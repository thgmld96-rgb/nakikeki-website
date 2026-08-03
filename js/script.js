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

(function initDessertsGallery() {
  const gallery = document.getElementById("dessertsGallery");
  const progressBar = document.getElementById("dessertsGalleryProgressBar");

  if (!gallery) {
    return;
  }

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  function updateProgress() {
    if (!progressBar) {
      return;
    }
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const progress = maxScroll > 0 ? gallery.scrollLeft / maxScroll : 0;
    progressBar.style.transform = "scaleX(" + Math.min(Math.max(progress, 0.04), 1) + ")";
  }

  function handlePointerDown(event) {
    isDragging = true;
    startX = event.pageX;
    startScrollLeft = gallery.scrollLeft;
    gallery.classList.add("is-dragging");
    event.preventDefault();
  }

  function handlePointerMove(event) {
    if (!isDragging) {
      return;
    }
    const deltaX = event.pageX - startX;
    gallery.scrollLeft = startScrollLeft - deltaX;
  }

  function handlePointerUp() {
    isDragging = false;
    gallery.classList.remove("is-dragging");
  }

  gallery.addEventListener("mousedown", handlePointerDown);
  window.addEventListener("mousemove", handlePointerMove);
  window.addEventListener("mouseup", handlePointerUp);
  gallery.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  function setInitialScrollPosition() {
    const firstItem = gallery.querySelector(".desserts-gallery__item");
    if (!firstItem) {
      return;
    }
    const paddingLeft = firstItem.getBoundingClientRect().left - gallery.getBoundingClientRect().left;
    gallery.scrollLeft = paddingLeft + firstItem.getBoundingClientRect().width * 0.3;
  }

  setInitialScrollPosition();
  updateProgress();
})();

(function initCustomCakeSlider() {
  const viewport = document.getElementById("customcakeViewport");
  const track = document.getElementById("customcakeTrack");
  const prevButton = document.getElementById("customcakePrev");
  const nextButton = document.getElementById("customcakeNext");
  const dots = document.querySelectorAll(".customcake-slider__dot");

  if (!viewport || !track || !prevButton || !nextButton || dots.length === 0) {
    return;
  }

  const realItems = Array.prototype.slice.call(track.querySelectorAll(".customcake-slider__item"));

  if (realItems.length === 0) {
    return;
  }

  const REAL_COUNT = realItems.length;
  const CLONE_COUNT = 2; // covers up to 2-per-page (desktop) worth of loop clones on each end
  const DESKTOP_GAP_PX = 12;
  const MAX_ITEM_WIDTH_DESKTOP = 400;
  const MOBILE_SHRINK_FACTOR = 0.75;
  const MOBILE_PEEK_GUARD_PX = 4;
  const desktopQuery = window.matchMedia("(min-width: 769px)");
  let currentGap = DESKTOP_GAP_PX;
  let currentRealIndex = 0;

  // Build [clone(N-2), clone(N-1), real0..real(N-1), clone(0), clone(1)] so
  // stepping past either end lands on a clone that looks identical to the
  // real slide it mirrors; the scroll position is then silently corrected
  // to the real slide once the scroll settles, creating a seamless loop.
  const leadingFragment = document.createDocumentFragment();
  realItems.slice(REAL_COUNT - CLONE_COUNT).forEach(function appendLeadingClone(el) {
    const clone = el.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    leadingFragment.appendChild(clone);
  });
  track.insertBefore(leadingFragment, track.firstChild);

  const trailingFragment = document.createDocumentFragment();
  realItems.slice(0, CLONE_COUNT).forEach(function appendTrailingClone(el) {
    const clone = el.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    trailingFragment.appendChild(clone);
  });
  track.appendChild(trailingFragment);

  const allSlots = track.querySelectorAll(".customcake-slider__item");

  function getItemsPerPage() {
    return desktopQuery.matches ? 2 : 1;
  }

  function applyItemWidths() {
    let itemWidth;
    if (desktopQuery.matches) {
      const naturalWidth = (viewport.clientWidth - DESKTOP_GAP_PX) / 2;
      itemWidth = Math.min(naturalWidth, MAX_ITEM_WIDTH_DESKTOP);
      currentGap = DESKTOP_GAP_PX;
    } else {
      // Mobile shows exactly one deliberately-shrunk, centered photo. To keep
      // its neighbors fully out of view, the gap between EVERY photo must
      // equal the same margin used to center it: (viewport - item) / 2. A
      // small fixed gap would let the next photo's edge peek into view. A
      // few extra px on top absorb sub-pixel scroll-snap rounding, which
      // would otherwise let a hairline of the neighbor show through.
      itemWidth = viewport.clientWidth * MOBILE_SHRINK_FACTOR;
      currentGap = (viewport.clientWidth - itemWidth) / 2 + MOBILE_PEEK_GUARD_PX;
    }
    allSlots.forEach(function setWidth(slot) {
      // Set height explicitly too (photos are square) instead of relying
      // solely on the CSS aspect-ratio property, so sizing stays correct
      // even on browsers/devices with weaker aspect-ratio support.
      slot.style.width = itemWidth + "px";
      slot.style.height = itemWidth + "px";
    });
    track.style.gap = currentGap + "px";
  }

  function getSlotStep() {
    return allSlots[0].getBoundingClientRect().width + currentGap;
  }

  function scrollToDomIndex(domIndex, smooth) {
    viewport.scrollTo({ left: domIndex * getSlotStep(), behavior: smooth ? "smooth" : "auto" });
  }

  function updateDotsForRealIndex(realIndex) {
    dots.forEach(function updateDot(dot, index) {
      const isActive = index === realIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  }

  // After any scroll settles (button nav or manual swipe alike), check
  // whether we landed on a clone slot; if so, silently re-point scrollLeft
  // at the equivalent real slot with no animation, so the loop feels
  // continuous. Also keeps currentRealIndex/dots in sync with manual swipes.
  function correctIfOnClone() {
    const step = getSlotStep();
    if (!step) {
      return;
    }
    const domIndex = Math.round(viewport.scrollLeft / step);
    let realIndex;
    let correctedDomIndex = null;

    if (domIndex < CLONE_COUNT) {
      realIndex = REAL_COUNT - CLONE_COUNT + domIndex;
      correctedDomIndex = CLONE_COUNT + realIndex;
    } else if (domIndex >= CLONE_COUNT + REAL_COUNT) {
      realIndex = domIndex - CLONE_COUNT - REAL_COUNT;
      correctedDomIndex = CLONE_COUNT + realIndex;
    } else {
      realIndex = domIndex - CLONE_COUNT;
    }

    currentRealIndex = ((realIndex % REAL_COUNT) + REAL_COUNT) % REAL_COUNT;
    updateDotsForRealIndex(currentRealIndex);

    if (correctedDomIndex !== null) {
      scrollToDomIndex(correctedDomIndex, false);
    }
  }

  function goNext() {
    scrollToDomIndex(CLONE_COUNT + currentRealIndex + getItemsPerPage(), true);
  }

  function goPrev() {
    scrollToDomIndex(CLONE_COUNT + currentRealIndex - getItemsPerPage(), true);
  }

  function goToDot(realIndex) {
    currentRealIndex = realIndex;
    scrollToDomIndex(CLONE_COUNT + realIndex, true);
    updateDotsForRealIndex(currentRealIndex);
  }

  prevButton.addEventListener("click", goPrev);
  nextButton.addEventListener("click", goNext);

  dots.forEach(function bindDot(dot, index) {
    dot.addEventListener("click", function handleDotClick() {
      goToDot(index);
    });
  });

  let settleTimer = null;
  viewport.addEventListener(
    "scroll",
    function handleScroll() {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(correctIfOnClone, 120);
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    function handleResize() {
      applyItemWidths();
      scrollToDomIndex(CLONE_COUNT + currentRealIndex, false);
    },
    { passive: true }
  );

  desktopQuery.addEventListener("change", function handleBreakpointChange() {
    applyItemWidths();
    scrollToDomIndex(CLONE_COUNT + currentRealIndex, false);
    updateDotsForRealIndex(currentRealIndex);
  });

  applyItemWidths();
  scrollToDomIndex(CLONE_COUNT + currentRealIndex, false);
  updateDotsForRealIndex(currentRealIndex);
})();
