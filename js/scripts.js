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
  const companies = [
    { name: "MESHLINK, S.R.L.", location: "SANTO DOMINGO | LOS GUARICANOS" },
    { name: "INTERNATIONAL COMMUNICATIONS", location: "VILLA ALTAGRACIA" },
    { name: "BLUE GEM TECHNOLOGY", location: "SANTIAGO" },
    { name: "PIRAX", location: "SAN VICTOR | MOCA" },
    { name: "UNBITEL", location: "JARABACOA" },
    { name: "NEXT TELECOM", location: "DAJABON | MONTECRISTI" },
    { name: "XPLOIT TECHNOLOGY", location: "EL LLANO | SAN PEDRO DE MACORÍS" },
    { name: "KONEX TELECOM", location: "SANTIAGO" },
    { name: "WIFI DOMINICANA", location: "SANTIAGO" },
    { name: "TELEPOP NETWORK, S.R.L.", location: "PUERTO PLATA" },
    { name: "SERVIMAST JPM SRL", location: "SANTIAGO" },
    { name: "LINARES TECHNOLOGY S.R.L.", location: "CONSTANZA" },
    { name: "HELLOFIBRA SERVICES PENA, S.R.L.", location: "AZUA" },
    { name: "TECNOLOGIA COMPOSTELA", location: "AZUA" },
    { name: "PENIEL WIFI S.R.L.", location: "SANTIAGO" },
    { name: "INVERSIONES SOINPRO, S.R.L.,", location: "SANTIAGO" },
    { name: "FREFELIX S.R.L.", location: "SANTIAGO" },
    { name: "SEQURE NETWORK", location: "SANTIAGO" },
    { name: "WALDO MAURICIO", location: "SANTIAGO" },
    { name: "EOS TELECOM", location: "SANTIAGO" },
    { name: "TELCOFIBRA", location: "BARAHONA" },
    { name: "ACOLME TECH/DCNA", location: "MONTEPLATA" },
    { name: "CASTILLO FM", location: "CASTILLO | DUARTE" },
    { name: "GENIOS", location: "SANTO DOMINGO | LOS GUARICANOS" },
    { name: "MASTER TECHNOLOGI", location: "SAN PEDRO" },
    { name: "ALCOM S.R.L.", location: "AZUA" },
    { name: "ALMER COMUNICACIONES", location: "VERON | LA ALTAGRACIA" },
    { name: "ALCOMTECH ALMANZAR", location: "LOS ALCARRIZOS" },
    { name: "ESCALON TECHNOLOGY", location: "PUNTA CANA" },
    { name: "EDJ TELECOMUNICACIONES", location: "PUNTA CANA" },
    { name: "PERSIL", location: "LOS ALCARRIZOS" },
  ];

  const companyGrid = document.getElementById("companyGrid");
  const provinceButton = document.getElementById("provinceButton");
  const provinceList = document.getElementById("provinceList");
  const pagination = document.getElementById("paginations");

  const ITEMS_PER_PAGE = 12;
  let currentPage = 1;
  let currentCompanies = [...companies];

  function formatCompanyName(name) {
    return name
      .split(" ")
      .map((word) => {
        if (word === "S.R.L." || word === "SRL") return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  function createCompanyCard(company, showLocation = false) {
    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = `
      <h5>${formatCompanyName(company.name)}</h5>
      ${showLocation ? `<p>${company.location}</p>` : ""}
    `;
    return card;
  }

  function displayCompanies(companiesArray, showLocation = false, page = 1) {
    companyGrid.innerHTML = "";
    currentCompanies = companiesArray;
    currentPage = page;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedCompanies = companiesArray.slice(start, end);

    paginatedCompanies.forEach((company) => {
      companyGrid.appendChild(createCompanyCard(company, showLocation));
    });

    updatePagination(companiesArray.length);
  }

  function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    pagination.innerHTML = "";

    if (totalPages <= 1) {
      pagination.style.display = "none";
      return;
    }

    pagination.style.display = "flex";

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.toggle("active", i === currentPage);
      button.addEventListener("click", () => {
        displayCompanies(currentCompanies, currentPage !== 1, i);
      });
      pagination.appendChild(button);
    }
  }

  function setupProvinceList() {
    const provinces = [
      ...new Set(companies.map((company) => company.location)),
    ].sort();
    provinceList.innerHTML = "";

    const allButton = document.createElement("button");
    allButton.textContent = "Todos";
    allButton.addEventListener("click", () => {
      displayCompanies(companies, false, 1);
      provinceList.style.display = "none";
    });
    provinceList.appendChild(allButton);

    provinces.forEach((province) => {
      const button = document.createElement("button");
      button.textContent = province;
      button.addEventListener("click", () => {
        const filteredCompanies = companies.filter(
          (company) => company.location === province
        );
        displayCompanies(filteredCompanies, true, 1);
        provinceList.style.display = "none";
      });
      provinceList.appendChild(button);
    });
  }

  provinceButton.addEventListener("click", () => {
    provinceList.style.display =
      provinceList.style.display === "none" || !provinceList.style.display
        ? "block"
        : "none";
  });

  document.addEventListener("click", (e) => {
    if (
      !provinceButton.contains(e.target) &&
      !provinceList.contains(e.target)
    ) {
      provinceList.style.display = "none";
    }
  });

  // Inicialización
  setupProvinceList();
  displayCompanies(companies, false, 1);
});
