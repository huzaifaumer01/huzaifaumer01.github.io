/* =========================================================
   Huzaifa Umer — Portfolio interactions
   Vanilla JS · no dependencies
   ========================================================= */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Theme toggle (persisted) ---------- */
  var THEME_KEY = "hu-theme";
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  try {
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) applyTheme(savedTheme);
  } catch (e) {
    /* localStorage unavailable — fall back to system preference */
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      var current =
        root.getAttribute("data-theme") || (systemDark ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        /* ignore persistence errors */
      }
    });
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  var navScrim = document.getElementById("nav-scrim");

  function setMenu(open) {
    if (!navLinks || !navToggle) return;
    navLinks.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (navScrim) {
      if (open) {
        navScrim.hidden = false;
        // next frame so the transition runs
        requestAnimationFrame(function () {
          navScrim.classList.add("is-open");
        });
      } else {
        navScrim.classList.remove("is-open");
        window.setTimeout(function () {
          navScrim.hidden = true;
        }, 300);
      }
    }
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setMenu(!navLinks.classList.contains("is-open"));
    });
  }
  if (navScrim) {
    navScrim.addEventListener("click", function () {
      setMenu(false);
    });
  }
  if (navLinks) {
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---------- Sticky nav border on scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Active section highlight in nav ---------- */
  var sectionLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  var sections = sectionLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            sectionLinks.forEach(function (link) {
              link.classList.toggle(
                "is-active",
                link.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      spyObserver.observe(s);
    });
  }

  /* ---------- Placeholder links (GitHub / LinkedIn) ---------- */
  document
    .querySelectorAll("a[data-placeholder]")
    .forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (link.getAttribute("href") === "#") {
          e.preventDefault();
          var label = link.getAttribute("data-placeholder");
          window.alert(
            label +
              " has not been added yet.\nUpdate the href in index.html to enable this link."
          );
        }
      });
    });

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  /* ---------- Footer year (keeps © current if desired) ---------- */
  // Left as static "2026" per the brief; uncomment to auto-update:
  // var yearEl = document.getElementById("year");
  // if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
