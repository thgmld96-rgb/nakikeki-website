(function initWelcomeModal() {
  const overlay = document.getElementById("welcomeModalOverlay");
  const modal = document.getElementById("welcomeModal");
  const closeButton = document.getElementById("welcomeModalClose");
  const ctaButton = document.getElementById("welcomeModalCta");

  if (!overlay || !modal || !closeButton || !ctaButton) {
    return;
  }

  function openModal() {
    overlay.hidden = false;
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  closeButton.addEventListener("click", closeModal);
  ctaButton.addEventListener("click", closeModal);

  overlay.addEventListener("click", function handleOverlayClick(event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function handleEscapeKey(event) {
    if (event.key === "Escape" && !overlay.hidden) {
      closeModal();
    }
  });

  openModal();
})();

(function initSiteHeader() {
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("siteNavList");

  if (!header || !navToggle || !navList) {
    return;
  }

  function updateScrolledState() {
    header.classList.toggle("is-scrolled", window.scrollY > 0);
  }

  function closeNav() {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
    navList.classList.remove("is-open");
  }

  function toggleNav() {
    const isOpen = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  }

  navToggle.addEventListener("click", toggleNav);

  navList.addEventListener("click", function handleNavLinkClick(event) {
    if (event.target.classList.contains("site-nav__link")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", function handleEscapeKey(event) {
    if (event.key === "Escape" && navList.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  window.addEventListener("scroll", updateScrolledState, { passive: true });
  updateScrolledState();
})();
