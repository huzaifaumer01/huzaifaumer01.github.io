/* =========================================================
   Huzaifa Umer — Project detail modal
   Data-driven case-study popups. Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Project data ----------
     OSNtv is the full reference (content + impact metrics provided by Huzaifa).
     Other entries are assembled strictly from documented facts — no invented
     metrics, team sizes or ratings. Optional fields are simply omitted. */
  var PROJECTS = {
    "armf": {
      title: "ARMF",
      icon: { text: "ARMF", g1: "#16a34a", g2: "#059669", acronym: true },
      businessGoal: "Enable individuals and businesses to move money across borders quickly and affordably, with transparent pricing and competitive exchange rates.",
      overview: "ARMF is a fintech platform for fast international money transfers, offering affordable transfer fees, competitive exchange rates and zero hidden fees for both individuals and businesses operating across borders.",
      problem: "International transfers are often slow and burdened with opaque fees. The app needed to make cross-border payments fast and transparent while keeping the experience simple for individuals and businesses alike.",
      solution: "Delivered a streamlined native iOS money-transfer experience with clear pricing and exchange-rate visibility, backed by REST API integrations for payments and account management.",
      role: "Worked as a Senior iOS Developer on the native iOS app, implementing money-transfer flows, account management and the integrations that power cross-border payments.",
      keyFeatures: ["International Money Transfer", "Competitive Exchange Rates", "Transparent, Zero Hidden Fees", "Individual & Business Accounts", "Cross-Border Payments"],
      techStack: { "Languages": "Swift", "UI": "UIKit", "Networking": "REST APIs" },
      insights: "ARMF deepened my experience building trustworthy fintech experiences, where clarity, reliability and the secure handling of financial data are essential."
    },

    "arm-authenticator": {
      title: "Arm Transaction Authenticator",
      icon: { text: "AT", g1: "#2563eb", g2: "#4f46e5" },
      businessGoal: "Provide a hardware-backed way to authorize high-value crypto withdrawals, ensuring only the legitimate account owner can approve a transaction.",
      overview: "A dedicated iOS authenticator that verifies crypto withdrawal transactions using strong authentication and encrypted mobile-to-mobile confirmation, built as part of the Armup exchange ecosystem.",
      problem: "Verifying high-value crypto transactions requires strong, multi-layered authentication without exposing sensitive data — ideally confirming a transaction across two trusted devices.",
      solution: "Architected the app in VIPER and built secure authentication flows combining JWT authorization, Face ID, device binding and multi-factor verification, with encrypted peer-to-peer confirmation over Apple Multipeer Connectivity.",
      role: "Worked as a Senior iOS Developer at Armup — architecting the application, building the security and verification flows, and collaborating with backend and Android teams on API contracts.",
      keyFeatures: ["Crypto Withdrawal Verification", "JWT Authorization", "Face ID Biometrics", "Device Binding", "Multi-Factor Verification", "Encrypted Peer-to-Peer Confirmation", "Keychain-Protected Data", "Real-Time Push Updates", "Deep Linking"],
      challenges: [
        { title: "Secure Mobile-to-Mobile Verification", body: "Built encrypted peer-to-peer transaction verification over Apple Multipeer Connectivity, allowing one device to securely confirm a transaction initiated on another without exposing sensitive data." },
        { title: "Layered Authentication", body: "Combined JWT authorization, Face ID, device binding and multi-factor verification into a cohesive flow, protecting sensitive data with Keychain Services and encryption best practices." }
      ],
      contributions: ["Architected the application using VIPER.", "Implemented JWT-based authorization and multi-factor verification.", "Integrated Face ID biometrics and device binding.", "Built encrypted peer-to-peer verification with Apple Multipeer Connectivity.", "Protected sensitive data with Keychain Services.", "Implemented real-time updates via push notifications and deep linking."],
      techStack: { "Languages": "Swift", "Architecture": "VIPER", "Security": "JWT, Face ID, Device Binding, Keychain, Multi-Factor Verification", "Connectivity": "Apple Multipeer Connectivity", "Real-Time": "Push Notifications, Deep Linking" },
      insights: "This project sharpened my focus on mobile security architecture — designing verification flows that are both robust and seamless for high-stakes fintech use."
    },

    "armup-exchange": {
      title: "Armup Crypto Exchange",
      icon: { text: "AC", g1: "#0ea5e9", g2: "#2563eb" },
      businessGoal: "Provide a reliable, secure crypto exchange experience with real-time updates and strong account protection.",
      overview: "A production crypto exchange iOS application that I maintained and enhanced, focused on secure authorization, real-time transaction updates and a dependable trading experience at scale.",
      problem: "A high-stakes trading app must stay secure, responsive and reliable while continuously shipping new features.",
      solution: "Implemented JWT authorization and multi-factor verification, real-time push updates, deep linking and reusable UI components on a VIPER architecture that kept the codebase maintainable.",
      role: "Worked as a Senior iOS Developer at Armup, maintaining and enhancing the exchange app and collaborating with backend and Android teams.",
      keyFeatures: ["Secure Authorization", "Multi-Factor Verification", "Real-Time Transaction Updates", "Deep Linking", "Reusable UI Components"],
      techStack: { "Languages": "Swift", "Architecture": "VIPER", "Security": "JWT, Multi-Factor Verification", "Real-Time": "Push Notifications, Deep Linking" },
      insights: "Maintaining a live exchange taught me to balance rapid feature delivery with the reliability and security that financial users depend on."
    },

    "time2feel": {
      title: "Time2Feel",
      icon: { text: "T2", g1: "#14b8a6", g2: "#6366f1" },
      appStore: "https://apps.apple.com/us/app/time2feel/id1601673329",
      businessGoal: "Support behavioral research with reliable, real-time physiological data collection and adaptive survey scheduling.",
      overview: "Native iOS and Android apps supporting behavioral research, integrating the Empatica E4 medical-grade wearable for real-time physiological data collection and adaptive, research-driven survey scheduling.",
      problem: "Research integrity depends on accurate, continuous physiological data and precisely timed surveys — a challenge across two platforms and a medical-grade wearable.",
      solution: "Integrated the Empatica E4 wearable for real-time data capture and built automated and deviation-based survey scheduling with physiological triggers and custom data-export pipelines, wrapped in a family-friendly UX.",
      role: "Worked as a Senior iOS Developer at Troon Technologies, building the iOS app and contributing to Android, with a focus on wearable integration and research data pipelines.",
      keyFeatures: ["Empatica E4 Wearable Integration", "Real-Time Physiological Data", "Automated Survey Scheduling", "Deviation-Based Scheduling", "Physiological Triggers", "Custom Data-Export Pipelines", "Family-Friendly UX"],
      challenges: [
        { title: "Medical-Grade Wearable Integration", body: "Integrated the Empatica E4 for real-time physiological data collection, ensuring reliable capture and export suitable for research use." },
        { title: "Adaptive Survey Scheduling", body: "Implemented automated and deviation-based survey scheduling driven by physiological triggers to maintain research data quality." }
      ],
      techStack: { "Languages": "Swift (iOS), Android", "Wearable": "Empatica E4", "Data": "Custom export pipelines" },
      insights: "Working at the intersection of health hardware and research gave me a deep appreciation for data reliability and rigorous real-time collection."
    },

    "health-pro": {
      title: "Health Pro Solutions",
      icon: { text: "HP", g1: "#10b981", g2: "#0891b2" },
      appStore: "https://apps.apple.com/us/app/health-pro-solutions/id6743844799",
      businessGoal: "Streamline healthcare workforce management — scheduling, payroll, credentials and communication — in one reliable native app.",
      overview: "A native Swift healthcare workforce-management platform for providers and administrators, unifying payroll, scheduling, credential and document management with real-time communication.",
      problem: "Healthcare operations juggle payroll, scheduling, credentialing, documents and communication across many providers — often in fragmented tools.",
      solution: "Built provider workflows covering payroll, scheduling, credential and document management, with real-time communication, in a single native iOS experience.",
      role: "Worked as a Senior iOS Developer at Troon Technologies, building the native iOS platform.",
      keyFeatures: ["Payroll Management", "Scheduling", "Credential Management", "Document Management", "Provider Workflows", "Real-Time Communication"],
      techStack: { "Languages": "Swift", "Networking": "REST APIs", "Real-Time": "Real-time communication" },
      insights: "This platform reinforced how much thoughtful workflow design matters in healthcare, where reliability and clarity directly affect providers' day-to-day work."
    },

    "mcbcem": {
      title: "MCBCEM / ECC",
      icon: { text: "MC", g1: "#f97316", g2: "#ef4444" },
      appStore: "https://apps.apple.com/app/mcbcem/id6503282754",
      businessGoal: "Coordinate emergency response reliably in areas where network connectivity is intermittent or absent.",
      overview: "Emergency Command Center apps for iOS and Android supporting wildfire and flood response — designed offline-first so volunteer coordination and task management keep working in low-connectivity environments.",
      problem: "Emergency operations often happen where connectivity is unreliable, yet coordination and task management must continue without interruption.",
      solution: "Designed offline-first workflows with resilient data handling, volunteer onboarding and coordination, task management and real-time coordination that gracefully tolerate connectivity loss.",
      role: "Worked as a Senior iOS Developer at Troon Technologies, building the iOS app and contributing to Android, with a focus on offline-first reliability.",
      keyFeatures: ["Offline-First Operation", "Volunteer Onboarding", "Volunteer Coordination", "Task Management", "Real-Time Coordination", "Wildfire & Flood Response"],
      challenges: [
        { title: "Offline-First Architecture", body: "Designed workflows that continue to function without connectivity and sync reliably when the network returns — essential for field operations during emergencies." }
      ],
      techStack: { "Languages": "Swift (iOS), Android", "Approach": "Offline-first, resilient sync" },
      insights: "Building for emergency response underlined the importance of resilience — software that stays dependable exactly when conditions are at their worst."
    },

    "midriva": {
      title: "Midriva & Midriva Driver",
      icon: { text: "M", g1: "#8b5cf6", g2: "#ec4899" },
      appStore: "https://apps.apple.com/us/app/midriva/id1438867085",
      businessGoal: "Deliver a reliable on-demand experience connecting riders and drivers with live tracking and communication.",
      overview: "A paired rider and driver on-demand platform with real-time tracking and user–provider communication, built on reusable on-demand frameworks.",
      problem: "On-demand platforms need accurate live location tracking and dependable communication between users and providers at scale.",
      solution: "Built real-time tracking and status updates with CoreLocation, Google Maps and Socket.IO, integrated payments and authentication, on reusable frameworks that accelerated development.",
      role: "Worked as an iOS Developer at Vizteck Solutions, where I helped pioneer the on-demand division and its reusable iOS frameworks.",
      keyFeatures: ["Real-Time Tracking", "Live Status Updates", "User–Provider Communication", "Payment Integration", "Authentication"],
      techStack: { "Languages": "Swift", "Location": "CoreLocation, Google Maps", "Real-Time": "Socket.IO", "Notifications": "Push Notifications" },
      insights: "Midriva was foundational to my on-demand experience — real-time systems and reusable architecture that could power an entire product family."
    },

    "osn-plus": {
      title: "OSN+",
      icon: { text: "OSN+", g1: "#7c3aed", g2: "#6d28d9", acronym: true },
      appStore: "https://apps.apple.com/us/app/osn/id862390640",
      businessGoal: "Deliver a stable, secure premium streaming experience with protected content and smooth playback.",
      overview: "A premium OTT streaming platform for the MENA region. I focused on playback reliability, app stability and secure content delivery — FairPlay DRM and custom HLS streaming — alongside memory optimization and crash-resolution workflows.",
      problem: "Premium streaming must protect licensed content and stay stable across long sessions and varying networks, while resolving hard-to-reproduce playback crashes.",
      solution: "Improved playback reliability and stability, worked with FairPlay DRM and custom HLS streaming, optimized memory usage, and established crash-resolution workflows to keep the experience smooth.",
      role: "Worked as an iOS Developer on the OSN+ streaming app, improving playback reliability, stability, DRM and streaming performance.",
      keyFeatures: ["Premium OTT Streaming", "FairPlay DRM", "Custom HLS Streaming", "Playback Reliability", "App Stability", "Memory Optimization", "Crash-Resolution Workflows"],
      challenges: [
        { title: "Secure, Reliable Playback", body: "Worked with FairPlay DRM and custom HLS streaming while improving stability and optimizing memory usage for long viewing sessions." },
        { title: "Crash Resolution", body: "Established crash-resolution workflows to identify, reproduce and fix playback-related failures on a large streaming app." }
      ],
      techStack: { "Languages": "Swift", "Streaming": "AVPlayer, HLS", "DRM": "FairPlay", "Focus": "Stability, memory, crash resolution" },
      insights: "OSN+ strengthened my expertise in secure, high-quality video playback and in the disciplined debugging that large streaming apps demand."
    },

    "osn-tv": {
      title: "OSNtv",
      icon: { text: "OSNtv", g1: "#2563eb", g2: "#6d28d9", acronym: true },
      appStore: "https://apps.apple.com/ae/app/myosntv/id6737794176",
      businessGoal: "Deliver a secure premium streaming experience capable of protecting licensed content while providing smooth playback across varying network conditions and supporting premium entertainment features expected from a modern OTT platform.",
      overview: "OSN TV is a premium OTT streaming platform serving audiences across the Middle East with Live TV and Video-on-Demand content. The application delivers secure premium entertainment using FairPlay DRM while providing a high-quality playback experience through adaptive HLS streaming, Chromecast, AirPlay, and multilingual content support.",
      problem: "Building a premium streaming application requires balancing playback performance, content protection, adaptive streaming, and user experience. The platform needed a scalable playback architecture that isolated media playback from the UI while supporting FairPlay DRM, Live TV, Chromecast, AirPlay, subtitles, and multiple audio tracks.",
      solution: "Designed a reusable player abstraction layer built around AVPlayer, integrated FairPlay DRM for protected content, implemented adaptive HLS playback, and developed a modular playback architecture that centralized media controls and simplified feature development across the application.",
      role: "Worked as a Senior iOS Developer within a 20-member engineering team, implementing streaming features, integrating FairPlay DRM, designing the player abstraction layer, improving playback stability, optimizing memory usage, and collaborating closely with backend engineers, QA, and product teams.",
      keyFeatures: ["Live TV", "Video on Demand", "FairPlay DRM", "Adaptive HLS Streaming", "Multiple Audio Tracks", "Subtitles", "Chromecast", "AirPlay", "Picture in Picture", "Background Playback", "Playback Resume", "Premium Content"],
      challenges: [
        { title: "FairPlay DRM Integration", body: "Implemented Apple's FairPlay Streaming workflow including certificate retrieval, SPC generation, CKC processing, and secure license acquisition while handling playback edge cases such as expired licenses and protected content failures." },
        { title: "Player Abstraction Layer", body: "Designed a reusable playback architecture where application features communicate with a custom Player Manager instead of directly interacting with AVPlayer. This separation simplified feature development, improved maintainability, and reduced coupling between business logic and media playback." },
        { title: "Playback Performance & Memory Optimization", body: "Optimized playback initialization, player lifecycle management, and memory usage to improve startup performance while maintaining stable streaming during long playback sessions." }
      ],
      contributions: ["Designed and implemented a reusable Player Wrapper architecture.", "Integrated FairPlay DRM for premium protected content.", "Implemented adaptive HLS streaming.", "Developed Live TV and Video-on-Demand playback.", "Integrated Chromecast support.", "Integrated AirPlay support.", "Implemented Picture in Picture playback.", "Added support for multiple audio tracks and subtitles.", "Improved playback stability and memory management.", "Integrated Analytics and Crashlytics.", "Applied MVVM, Coordinator, Clean Architecture, and Repository Pattern throughout the application."],
      techStack: { "Languages": "Swift", "UI": "SwiftUI", "Architecture": "MVVM, Coordinator, Clean Architecture, Repository Pattern", "Streaming": "AVPlayer, AVFoundation, HLS, Picture in Picture, AirPlay, Chromecast", "DRM": "FairPlay", "Storage": "CoreData", "Cloud": "Firebase, Analytics, Crashlytics" },
      impact: [
        { value: "20M+", label: "Downloads" },
        { value: "4.4★", label: "App Rating" },
        { value: "Live", label: "TV + VOD" },
        { value: "FairPlay", label: "DRM" }
      ],
      insights: "OSN TV significantly expanded my expertise in premium video streaming and secure content delivery. The most valuable lesson was designing a reusable player abstraction that isolated business logic from AVPlayer, making the playback system easier to extend, test, and maintain while supporting FairPlay DRM, Live TV, AirPlay, Chromecast, and future streaming capabilities."
    },

    "humanize-ai": {
      title: "Humanize AI",
      icon: { text: "HA", g1: "#0891b2", g2: "#6366f1" },
      appStore: "https://apps.apple.com/us/app/humanize-ai-paraphrase-tools/id6761074082",
      businessGoal: "Give writers a native toolkit to detect AI-generated text and rewrite it into natural, human-sounding prose.",
      overview: "An AI writing toolkit with four tools — AI Humanizer, Paraphraser, AI Text Detector and Email Writer — that detects AI-generated content and rewrites it into natural, human-sounding prose while preserving meaning and tone. Designed and shipped as a fully native iOS app.",
      problem: "Writers need to check whether text reads as AI-generated and refine it — quickly, in one place, with a genuinely native experience.",
      solution: "Designed and shipped a fully native Swift/UIKit app bundling four distinct tools behind a clean, cohesive experience.",
      role: "Designed and shipped the app end-to-end as a fully native iOS application.",
      keyFeatures: ["AI Humanizer", "Paraphraser", "AI Text Detector", "Email Writer", "Preserves Meaning & Tone", "Fully Native iOS"],
      techStack: { "Languages": "Swift", "UI": "UIKit", "Platform": "Native iOS" },
      insights: "Shipping a focused AI product end-to-end reinforced the value of a cohesive native experience and tight, purposeful feature sets."
    },

    "ai-tts": {
      title: "AI Text to Speech & Audio Books",
      icon: { text: "TS", g1: "#f59e0b", g2: "#d97706" },
      appStore: "https://apps.apple.com/us/app/ai-text-to-speech-audio-books/id6762444973",
      businessGoal: "Let people listen to any text, book, PDF or document with natural AI voices.",
      overview: "A voice-reading productivity app that reads aloud text, books, PDFs and documents using AI-generated voices. Designed and shipped as a native iOS app with a freemium subscription model.",
      problem: "People want to consume written content hands-free, across many formats, with pleasant, natural-sounding voices.",
      solution: "Built a native Swift/UIKit app that reads text, books, PDFs and documents aloud with AI voices, monetized through a freemium model with monthly, yearly and lifetime tiers.",
      role: "Designed and shipped the app end-to-end as a native iOS application.",
      keyFeatures: ["Reads Text, Books, PDFs & Documents", "AI-Generated Voices", "Hands-Free Listening", "Freemium Model", "Monthly, Yearly & Lifetime Tiers"],
      techStack: { "Languages": "Swift", "UI": "UIKit", "Monetization": "In-App Purchases (Freemium)" },
      insights: "This app broadened my experience with accessibility-minded productivity features and subscription monetization on iOS."
    }
  };

  /* ---------- Rendering ---------- */
  var esc = function (s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  function section(label, inner) {
    return '<section class="modal__section"><span class="modal__label">' + label + "</span>" + inner + "</section>";
  }
  function paras(text) { return '<p class="modal__text">' + esc(text) + "</p>"; }

  function render(p) {
    var h = "";
    if (p.businessGoal) h += section("Business Goal", paras(p.businessGoal));
    if (p.overview) h += section("Overview", paras(p.overview));
    if (p.problem) h += section("Problem", paras(p.problem));
    if (p.solution) h += section("Solution", paras(p.solution));
    if (p.role) h += section("My Role", paras(p.role));

    if (p.keyFeatures && p.keyFeatures.length) {
      var feats = p.keyFeatures.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
      h += section("Key Features", '<ul class="modal__features">' + feats + "</ul>");
    }

    if (p.challenges && p.challenges.length) {
      var ch = p.challenges.map(function (c) {
        return '<div class="modal__challenge"><h4>' + esc(c.title) + "</h4><p>" + esc(c.body) + "</p></div>";
      }).join("");
      h += section("Engineering Challenges", ch);
    }

    if (p.contributions && p.contributions.length) {
      var contrib = p.contributions.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
      h += section("Key Engineering Contributions", '<ul class="modal__list">' + contrib + "</ul>");
    }

    if (p.techStack) {
      var rows = Object.keys(p.techStack).map(function (k) {
        return "<div><b>" + esc(k) + ":</b> <span>" + esc(p.techStack[k]) + "</span></div>";
      }).join("");
      h += section("Tech Stack", '<div class="modal__stack">' + rows + "</div>");
    }

    if (p.impact && p.impact.length) {
      var tiles = p.impact.map(function (s) {
        return '<div class="modal__stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
      }).join("");
      h += section("Impact", '<div class="modal__impact">' + tiles + "</div>");
    }

    if (p.insights) h += section("Engineering Insights", paras(p.insights));

    if (p.appStore) {
      h += '<div class="modal__cta"><a class="btn btn--primary" href="' + p.appStore +
        '" target="_blank" rel="noopener noreferrer">View on the App Store' +
        '<svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>';
    }
    return h;
  }

  /* ---------- Modal controller ---------- */
  var modal = document.getElementById("project-modal");
  if (!modal) return;
  var body = document.getElementById("modal-body");
  var titleEl = document.getElementById("modal-title");
  var iconEl = document.getElementById("modal-icon");
  var closeBtn = document.getElementById("modal-close");
  var lastFocused = null;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function open(slug, trigger) {
    var p = PROJECTS[slug];
    if (!p) return;
    lastFocused = trigger || document.activeElement;

    titleEl.textContent = p.title;
    iconEl.textContent = p.icon.text;
    iconEl.className = "modal__icon" + (p.icon.acronym ? " modal__icon--acronym" : "");
    iconEl.style.setProperty("--g1", p.icon.g1);
    iconEl.style.setProperty("--g2", p.icon.g2);
    body.innerHTML = render(p);

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    // reset scroll and move focus once the panel is laid out
    requestAnimationFrame(function () {
      body.scrollTop = 0;
      closeBtn.focus({ preventScroll: true });
    });
  }

  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    lastFocused = null;
  }

  // Open from a card
  var grid = document.querySelector(".projects");
  if (grid) {
    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".project[data-project]");
      if (card) open(card.getAttribute("data-project"), card);
    });
    grid.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      var card = e.target.closest(".project[data-project]");
      if (card) { e.preventDefault(); open(card.getAttribute("data-project"), card); }
    });
  }

  // Close interactions
  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) close();
  });
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  // Basic focus trap inside the panel
  modal.addEventListener("keydown", function (e) {
    if (e.key !== "Tab" || modal.hidden) return;
    var focusables = modal.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();
