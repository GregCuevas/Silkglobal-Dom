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
    {
      name: "MESHLINK, S.R.L.",
      location: "Santo Domingo",
      address: "Sector San Felipe",
      city: "Villa Mella",
      phone: "849-406-4939",
      email: "meshlinksrl@gmail.com",
    },
    {
      name: "INTERNATIONAL COMMUNICATIONS",
      location: "San Cristóbal",
      address: "La Cuchilla",
      city: "Villa Altagracia",
      phone: "809-618-0003",
      email: "carlossuero29@gmail.com",
    },
    {
      name: "BLUE GEM TECHNOLOGY",
      location: "Santiago",
      address: "Carretera Luperón",
      city: "Gurabo",
      phone: "849-248-2139",
      email: "raul03g@gmail.com",
    },
    {
      name: "PIRAX",
      location: "Espaillat",
      address: "Calle profesor juan bosh",
      city: "San Víctor",
      phone: "809-340-4819",
      email: "rvelzquez@gmail.com",
    },
    {
      name: "UNBITEL",
      location: "La Vega",
      address: "Residencial Fernandez",
      city: "Jarabacoa",
      phone: "809-610-1015",
      email: "ndiaz@unbitel.com.do",
    },
    {
      name: "NEXT TELECOM",
      location: "Dabajón",
      address: "Calle Presidente Henríquez",
      city: "Centro de la Ciudad",
      phone: "809-579-7345",
      email: "rtavarez@aztecatelecom.do",
    },
    {
      name: "XPLOIT TECHNOLOGY",
      location: "Santo Domingo",
      address: "Calle Cyrazao, Esquina 23",
      city: "Plaza Gloria Virginia",
      phone: "809-838-1161",
      email: "vasquez08@outlook.com",
    },
    {
      name: "KONEX TELECOM",
      location: "Santiago",
      address: "Calle Cuba No. 60",
      city: "CENTRO DE LA CIUDAD",
      phone: "809-865-8881",
      email: "bianto.nunez@gmail.com",
    },
    {
      name: "WIFI DOMINICANA",
      location: "Santiago",
      address: "5050 Wireless Way",
      city: "Santiago, DR 51000",
      phone: "+1 809 555 9753",
      email: "support@wifidominicana.com",
    },
    {
      name: "TELEPOP NETWORK, S.R.L.",
      location: "Puerto Plata",
      address: "Calle Primera, No.1",
      city: "Sector El Javillar",
      phone: "809-970-3191",
      email: "telepopnetwork.s.r.l@gmail.com",
    },
    {
      name: "INVERSIONES SOINPRO, S.R.L.",
      location: "La Vega",
      address: "Calle Los González No. 36-B",
      city: "El Caimito Adentro",
      phone: "809-224-1005",
      email: "ingvictordiaz02@gmail.com",
    },
    {
      name: "SERVIMAST JPM SRL",
      location: "Santiago",
      address: "8080 Service Road",
      city: "Santiago",
      phone: "809-555-9512",
      email: "pedronegocio169@gmail.com",
    },
    {
      name: "LINARES TECHNOLOGY SRL",
      location: "La Vega",
      address: "9090 Tech Park",
      city: "La Vega",
      phone: "809-555-7890",
      email: "linarestechnology@gmail.com",
    },
    {
      name: "HELLOFIBRA SERVICES PENA, S.R.L.",
      location: "Santiago",
      address: "1111 Fiber Optic Lane",
      city: "Santiago",
      phone: "809-555-4567",
      email: "Hellofibrard@gmail.com",
    },
    {
      name: "TECNOLOGIA COMPOSTELA",
      location: "Azua",
      address: "2222 Innovation Drive",
      city: "Azua",
      phone: "809-924-3726",
      email: "Latataagramonte@hotmail.com",
    },
    {
      name: "PENIEL WIFI SRL",
      location: "Santiago",
      address: "Calle 27 No. 12",
      city: "RESIDENCIAL LOS PRADOS",
      phone: "809-456-6147",
      email: "cheo29_5@hotmail.com",
    },
    {
      name: "FREFELIX SRL",
      location: "Santiago",
      address: "Calle 20 No. 24",
      city: "Reparto",
      phone: "809-510-9682",
      email: "felixnoel_3@hotmail.com",
    },
    {
      name: "SEQURE NETWORK",
      location: "Santiago",
      address: "5555 Security Avenue",
      city: "Santiago",
      phone: "809-555-7412",
      email: "sequrenetwork@gmail.com",
    },
    {
      name: "WALDO MAURICIO",
      location: "Santiago",
      address: "6666 Tech Solutions Street",
      city: "Santiago, DR 51000",
      phone: "+1 809 555 8523",
      email: "info@waldomauricio.com",
    },
    {
      name: "EOS TELECOM",
      location: "Santiago",
      address: "7777 Communication Road",
      city: "Santiago, DR 51000",
      phone: "+1 809 555 9634",
      email: "richard@eos.com.do",
    },
    {
      name: "TELCOFIBER",
      location: "Santiago",
      address: "Paradise II, Edificio 9, Apto.13",
      city: "Las Palomas",
      phone: "849-406-4939",
      email: "telcofiber@outlook.com",
    },
    {
      name: "ACOLME TECH/DCNA",
      location: "Santo Domingo",
      address: "Calle Mella No. 27",
      city: "El Bonito",
      phone: "929-705-7099",
      email: "acolmetech@gmail.com",
    },
    {
      name: "CASTILLO FM",
      location: "Duarte",
      address: "CALLE FRANK GRULLON NO.06",
      city: "SALIDA DE NAGUA",
      phone: "809-244-8989",
      email: "lenin@globalinternetrd.com",
    },
    {
      name: "GENIOS",
      location: "Santo Domingo",
      address: "Calle Fray Antón de Montesinos",
      city: "Nueva Isabela Guaricano",
      phone: "809-309-4321",
      email: "franciscopayampsfpg@gmail.com",
    },
    {
      name: "MASTER TECHNOLOGI",
      location: "San Pedro De Macorís",
      address: "Calle E, No. 04",
      city: "Sector de Quisqueya",
      phone: "809-350-7790",
      email: "domingo_s@live.com",
    },
    {
      name: "ALCOM SRL",
      location: "Azua",
      address: "Calle 30 de mayo, No.46",
      city: "Sector Finca",
      phone: "809-882-1717",
      email: "Josealejo2@hotmail.com",
    },
    {
      name: "ALMER COMUNICACIONES",
      location: "La Altagracia",
      address: "Carretera Verón",
      city: "Sector Punta Cana",
      phone: "829-415-3330",
      email: "jirehpcs@gmail.com",
    },
    {
      name: "ALCONTECH ALMANZAR",
      location: "La Vega",
      address: "Autopista Duarte Km 14",
      city: "Moca",
      phone: "809-276-0831",
      email: "alcontech@hotmail.com",
    },
    {
      name: "ESCALON TECHNOLOGY",
      location: "La Altagracia",
      address: "AV. ITALIA PLAZA FLAMBOYAN #2",
      city: "HIGUEY",
      phone: "809-285-4273",
      email: "escalontechnology@gmail.com",
    },
    {
      name: "EDJ COMUNICACIONES",
      location: "La Altagracia",
      address: "AV. ESTADOS UNIDOS, EDIFICIO PRIMAVERAL #10",
      city: "BAVARO",
      phone: "809-350-5888",
      email: "EDWINDELACRUZ602@GMAIL.COM",
    },
    {
      name: "PERSIL SERVICIOS MÚLTIPLES",
      location: "Santo Domingo",
      address: "Calle 16, No. 12",
      city: "PUEBLO NUEVO",
      phone: "829-986-4850",
      email: "Frank_silfa@hotmail.com",
    },
  ];

  const companyGrid = document.getElementById("companyGrid");
  const provinceSelect = document.getElementById("provinceSelect");
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

  function createCompanyCard(company) {
    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = `
      <h5>${formatCompanyName(company.name)}</h5>
      <p>${company.address}</p>
      <p>${company.city}</p>
      <p>${company.phone}</p>
      <p><a href="mailto:${company.email}">${company.email}</a></p>
    `;
    return card;
  }

  function displayCompanies(companiesArray, page = 1) {
    companyGrid.innerHTML = "";
    currentCompanies = companiesArray;
    currentPage = page;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedCompanies = companiesArray.slice(start, end);

    paginatedCompanies.forEach((company) => {
      companyGrid.appendChild(createCompanyCard(company));
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
        displayCompanies(currentCompanies, i);
      });
      pagination.appendChild(button);
    }
  }

  // Event Listener para el select
  provinceSelect.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "all") {
      displayCompanies(companies, 1);
    } else {
      const filteredCompanies = companies.filter(
        (company) => company.location === selectedValue
      );
      displayCompanies(filteredCompanies, 1);
    }
  });

  // Inicialización
  displayCompanies(companies, 1);
});

// SUCURSALES

document.addEventListener("DOMContentLoaded", function () {
  const companies = [
    {
      name: "Santo Domingo",
      location: "Santo Domingo",
      address: "Edificio Lama, Av. Winston Churchill ",
      phone: "829-470-5896",
      email: "info@silkglobal.com",
    },
    {
      name: "Las Terrenas",
      location: "Las Terrenas",
      address: "C/ Juan Pablo Duarte, Plaza Piantini Local A-2",
      phone: "829-470-6922",
      email: "info@silkglobal.com",
    },
  ];

  const companyGrid = document.getElementById("companyGrid");
  const provinceSelect = document.getElementById("provinceSelects");
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

  function createCompanyCard(company) {
    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = `
      <h5>${formatCompanyName(company.name)}</h5>
      <p>${company.address}</p>
      
      <p>${company.phone}</p>
      <p><a href="mailto:${company.email}">${company.email}</a></p>
    `;
    return card;
  }

  function displayCompanies(companiesArray, page = 1) {
    companyGrid.innerHTML = "";
    currentCompanies = companiesArray;
    currentPage = page;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedCompanies = companiesArray.slice(start, end);

    paginatedCompanies.forEach((company) => {
      companyGrid.appendChild(createCompanyCard(company));
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
        displayCompanies(currentCompanies, i);
      });
      pagination.appendChild(button);
    }
  }

  // Event Listener para el select
  provinceSelect.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "all") {
      displayCompanies(companies, 1);
    } else {
      const filteredCompanies = companies.filter(
        (company) => company.location === selectedValue
      );
      displayCompanies(filteredCompanies, 1);
    }
  });

  // Inicialización
  displayCompanies(companies, 1);
});

// DISTRIBUIDORES

document.addEventListener("DOMContentLoaded", function () {
  const companies = [
    {
      name: "Wisphas",
      location: "Santo Domingo",
      address: "Santo Domingo Este ",
      phone: "829-689-2708",
      email: "ileguizamon27@gmail.com",
    },
    {
      name: "Metro Network SRL",
      location: "Santo Domingo",
      address: "Santo Domingo Norte",
      phone: "829-396-2169",
      email: "metronetworks.rd@gmail.com",
    },
    {
      name: "Hannel Celedonio",
      location: "Santo Domingo",
      address: "Santo Domingo Este",
      phone: "829-924-7710",
      email: "janelcm01@gmail.com",
    },
    {
      name: "Swat TECHNOLOGY",
      location: "La Altagracia",
      address: "Bávaro",
      phone: "829-648-9751",
      email: "codiosnegros@gmail.com",
    },
    {
      name: "Ranred Dominicana",
      location: "Puerto Plata",
      address: "Altamira",
      phone: "829-723-1498",
      email: "domingo_s@live.com",
    },
    {
      name: "Speedwy SRL",
      location: "Valverde",
      address: "Sibila Mao",
      phone: "829-642-5981",
      email: "speedwitelecom@gmail.com",
    },
    {
      name: "TECHNOWILL",
      location: "San José de Ocoa",
      address: "San José de Ocoa",
      phone: "809-710-0377",
      email: "cristhian53cristhian@gmail.con",
    },
    {
      name: "Thiago Travel Multiservice",
      location: "San Juan",
      address: "San Juan",
      phone: "829-305-7319",
      email: "Cesarjbaez@gmail.com",
    },
    {
      name: "ARTEL DOMINICANA SRL",
      location: "Distrito Nacional",
      address: "LA CIENAGA",
      phone: "809-799-0404",
      email: "REITORCONSULTING@GMAIL.COM",
    },
    {
      name: "Jef Red Technology",
      location: "Santo Domingo",
      address: "Los Alcarrizos",
      phone: "829-353-2222",
      email: "ramonvicente2882@outlook.com",
    },
    {
      name: "JAVE Network",
      location: "Monte Cristi",
      address: "VILLA VASQUEZ",
      phone: "",
      email: "javewireless@hotmail.es",
    },
    {
      name: "SomosNet Technology",
      location: "San Pedro de Macorís",
      address: "VILLA VELAZQUEZ",
      phone: "829-526-3972",
      email: "somosnet2205@gmail.com",
    },
    {
      name: "Servicio Nuñez",
      location: "",
      address: "",
      phone: "",
      email: "info@servicios-nunez.com",
    },
    {
      name: "Eriamtech",
      location: "La Vega",
      address: "MICHES",
      phone: "829-470-6922",
      email: "wilsonmessina@gmail.com",
    },
  ];

  const companyGrid = document.getElementById("companyGrid");
  const provinceSelect = document.getElementById("provinceSelectd");
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

  function createCompanyCard(company) {
    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = `
      <h5>${formatCompanyName(company.name)}</h5>
      <p>${company.address}</p>
      
      <p>${company.phone}</p>
      <p><a href="mailto:${company.email}">${company.email}</a></p>
    `;
    return card;
  }

  function displayCompanies(companiesArray, page = 1) {
    companyGrid.innerHTML = "";
    currentCompanies = companiesArray;
    currentPage = page;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedCompanies = companiesArray.slice(start, end);

    paginatedCompanies.forEach((company) => {
      companyGrid.appendChild(createCompanyCard(company));
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
        displayCompanies(currentCompanies, i);
      });
      pagination.appendChild(button);
    }
  }

  // Event Listener para el select
  provinceSelect.addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue === "all") {
      displayCompanies(companies, 1);
    } else {
      const filteredCompanies = companies.filter(
        (company) => company.location === selectedValue
      );
      displayCompanies(filteredCompanies, 1);
    }
  });

  // Inicialización
  displayCompanies(companies, 1);
});
