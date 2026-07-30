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

(function initHeroBanner() {
  const track = document.getElementById("heroTrack");
  const dots = document.querySelectorAll(".hero-dot");

  if (!track || dots.length === 0) {
    return;
  }

  const AUTOPLAY_INTERVAL_MS = 4000;
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  let autoplayTimer = null;

  function getActiveIndex() {
    const slideWidth = track.clientWidth;
    if (!slideWidth) {
      return 0;
    }
    return Math.round(track.scrollLeft / slideWidth);
  }

  function updateDots() {
    const activeIndex = getActiveIndex();
    dots.forEach(function updateDot(dot, index) {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  }

  function goToSlide(index) {
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
  }

  function goToNextSlide() {
    const nextIndex = (getActiveIndex() + 1) % dots.length;
    goToSlide(nextIndex);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (!mobileQuery.matches) {
      return;
    }
    autoplayTimer = window.setInterval(goToNextSlide, AUTOPLAY_INTERVAL_MS);
  }

  dots.forEach(function bindDot(dot, index) {
    dot.addEventListener("click", function handleDotClick() {
      goToSlide(index);
      startAutoplay();
    });
  });

  track.addEventListener(
    "scroll",
    function handleTrackScroll() {
      window.requestAnimationFrame(updateDots);
    },
    { passive: true }
  );

  track.addEventListener("touchstart", stopAutoplay, { passive: true });
  track.addEventListener("touchend", startAutoplay, { passive: true });

  mobileQuery.addEventListener("change", function handleBreakpointChange() {
    updateDots();
    startAutoplay();
  });

  window.addEventListener(
    "resize",
    function handleResize() {
      updateDots();
    },
    { passive: true }
  );

  updateDots();
  startAutoplay();
})();

(function initHeroDesktopSlider() {
  const track = document.getElementById("heroSliderTrack");
  const prevButton = document.getElementById("heroSliderPrev");
  const nextButton = document.getElementById("heroSliderNext");
  const dots = document.querySelectorAll(".hero-slider__dot");

  if (!track || !prevButton || !nextButton || dots.length === 0) {
    return;
  }

  const AUTOPLAY_INTERVAL_MS = 5000;
  const SLIDE_WIDTH_PERCENT = 100 / dots.length;
  const desktopQuery = window.matchMedia("(min-width: 769px)");
  let currentIndex = 0;
  let autoplayTimer = null;

  function updateSlide() {
    track.style.transform = "translateX(-" + currentIndex * SLIDE_WIDTH_PERCENT + "%)";
    dots.forEach(function updateDot(dot, index) {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  }

  function goToSlide(index) {
    currentIndex = (index + dots.length) % dots.length;
    updateSlide();
  }

  function goToNextSlide() {
    goToSlide(currentIndex + 1);
  }

  function goToPrevSlide() {
    goToSlide(currentIndex - 1);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (!desktopQuery.matches) {
      return;
    }
    autoplayTimer = window.setInterval(goToNextSlide, AUTOPLAY_INTERVAL_MS);
  }

  prevButton.addEventListener("click", function handlePrevClick() {
    goToPrevSlide();
    startAutoplay();
  });

  nextButton.addEventListener("click", function handleNextClick() {
    goToNextSlide();
    startAutoplay();
  });

  dots.forEach(function bindDot(dot, index) {
    dot.addEventListener("click", function handleDotClick() {
      goToSlide(index);
      startAutoplay();
    });
  });

  track.addEventListener("mouseenter", stopAutoplay);
  track.addEventListener("mouseleave", startAutoplay);

  desktopQuery.addEventListener("change", function handleBreakpointChange() {
    updateSlide();
    startAutoplay();
  });

  updateSlide();
  startAutoplay();
})();
