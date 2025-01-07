(function ($) {
  $(document).ready(function () {
    "use strict";

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();

    // HAMBURGER
    $(".menu-btn").on("click", function (e) {
      $(".menu-btn").toggleClass("active");
      $(".bars .bar").toggleClass("rotated");
      $(".navbar .navbar-nav").toggleClass("active");
    });

    // SANDWICH BUTTON
    $(".sandwich-btn").on("click", function (e) {
      $(this).toggleClass("open");
      $(".sandwich-menu").toggleClass("open");
    });

    // SEARCH
    $(".search-btn").on("click", function (e) {
      $(".search-box").addClass("open");
    });

    $(".close-btn").on("click", function (e) {
      $(".search-box").removeClass("open");
    });

    // MOBILE MENU
    $(".navbar-nav .nav-item a").on("click", function (e) {
      $(this)
        .parent()
        .children(".navbar-nav .dropdown-menu, .navbar-nav .sub-dropdown-menu")
        .slideToggle(300);
      return true;
    });

    // DATA BACKGROUND IMAGE
    var pageSection = $(".bg-image");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
      }
    });

    // DATA BACKGROUND COLOR
    var pageSection = $(".bg-color");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-color", $(this).data("background"));
      }
    });

    // TREE MENU
    $(".sandwich-menu .nav-menu li a").on("click", function (e) {
      $(this).parent().children(".sandwich-menu .dropdown").slideToggle(300);
      return true;
    });

    // SIDE TREE MENU
    $(".solutions .sidebar ul li a").on("click", function (e) {
      $(this)
        .parent()
        .children(".solutions .sidebar ul li ul")
        .slideToggle(300);
      return true;
    });

    // GO TO TOP
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    $(".scrollup").on("click", function (e) {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
  // END JQUERY

  // COUNTER
  if (!document.getElementById("counter")) {
  } else {
    var lastWasLower = false;
    $(document).scroll(function () {
      var p = $("#counter");
      var position = p.position();
      var position2 = position.top;

      if ($(document).scrollTop() > position2 - 300) {
        if (!lastWasLower) $("#1").html("11");
        $("#2").html("33");
        $("#3").html("52");
        $("#4").html("1");
        $("#5").html("18");
        $("#6").html("1");

        lastWasLower = true;
      } else {
        lastWasLower = false;
      }
    });
  }

  // WOW ANIMATION
  wow = new WOW({
    animateClass: "animated",
    offset: 50,
  });
  wow.init();

  // SLIDER
  var menu = [];
  jQuery(".swiper-slide").each(function (index) {
    menu.push(jQuery(this).find(".slide-inner").attr("data-text"));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-custom-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      },
    },
  };

  var swiper = new Swiper(".swiper-container", swiperOptions);

  // CAROUSEL
  var swiper2 = new Swiper(".swiper-carousel", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 14,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // TESTIMONIALS
  var swiper3 = new Swiper(".swiper-testimonials", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // MASONRY
  var $container = $(".masonry").imagesLoaded(function () {
    $container.isotope({
      itemSelector: ".masonry li",
      layoutMode: "masonry",
    });
  });

  // ISOTOPE FILTER
  var $container = $(".masonry");
  $container.isotope({
    filter: "*",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false,
    },
  });

  $(".showcase-filter li a").on("click", function (e) {
    $(".showcase-filter li a.current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
})(jQuery);

// FAQ

function toggleFAQ(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.display = "none";
    });
    document.querySelectorAll(".toggle-icon").forEach((icon) => {
      icon.textContent = "+";
    });
    answer.style.display = "block";
    icon.textContent = "×";
  }
}

// NEWS
document.addEventListener("DOMContentLoaded", function () {
  // Select all pagination buttons
  const paginationButtons = document.querySelectorAll(".pagination-button");

  // Select the content containers for all pages
  const page1Content = document.querySelector(".col-12.page-1");
  const page2Content = document.querySelector(".col-12.page-2");
  const page3Content = document.querySelector(".col-12.page-3");

  // Add click event listeners to each pagination button
  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      paginationButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      this.classList.add("active");

      // Get the page number from the button's data attribute
      const pageNumber = this.getAttribute("data-page");

      // Hide all pages
      page1Content.style.display = "none";
      page2Content.style.display = "none";
      page3Content.style.display = "none";

      // Show the selected page
      if (pageNumber === "1") {
        page1Content.style.display = "flex";
      } else if (pageNumber === "2") {
        page2Content.style.display = "flex";
      } else if (pageNumber === "3") {
        page3Content.style.display = "flex";
      }

      // Reinitialize WOW animations for newly visible content
      // This assumes you're using the WOW library for animations
      if (typeof WOW !== "undefined") {
        new WOW().init();
      }
    });
  });
});

// Revendedores
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-content");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const items = document.querySelectorAll(".carousel-grid address");

  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 0;

  function updateCarousel() {
    const offset = -currentPage * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    // Actualizar visibilidad de los botones
    prevButton.style.visibility = currentPage === 0 ? "hidden" : "visible";
    nextButton.style.visibility =
      currentPage === totalPages - 1 ? "hidden" : "visible";
  }

  function moveNext() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCarousel();
    }
  }

  function movePrev() {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  }

  // Event Listeners para los botones
  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);

  // Soporte para gestos táctiles en dispositivos móviles
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      moveNext();
    } else if (touchEndX - touchStartX > 50) {
      movePrev();
    }
  });

  // Inicializar el carrusel
  updateCarousel();

  // Actualizar el carrusel cuando se redimensiona la ventana
  window.addEventListener("resize", updateCarousel);
});
