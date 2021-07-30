let lastKnownScrollPosition = 0;
let ticking = false;
let menu_is_open = false;


document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      swap_header_color(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


function set_navigation_bar_color(background_color, content_color, link_color='black') {
  let logo_desktop = document.getElementById("nav-logo");
  let logo_mobile = document.getElementById("mobile-nav-logo");
  let hamburger_menu = document.getElementsByClassName("hamburger-menu-div");
  let navbar_desktop = document.getElementById("navbar");
  let navbar_mobile = document.getElementById("mobile-navbar");

  if (background_color === "transparent") {
    navbar_desktop.classList.add("navbar--transparent" + "--" + link_color + "-text");
    navbar_mobile.classList.add("navbar--transparent");

    navbar_desktop.classList.remove("navbar--white");
    navbar_mobile.classList.remove("navbar--white");
  }

  else if (background_color === 'white') {
    navbar_desktop.classList.remove("navbar--transparent" + "--" + link_color + "-text");
    navbar_mobile.classList.remove("navbar--transparent");

    navbar_desktop.classList.add("navbar--white");
    navbar_mobile.classList.add("navbar--white");
  }

  if (content_color === 'black') {
    logo_desktop.src = "https://estyle.vteximg.com.br/arquivos/aionsolution_home_Logo_Aion_black.png";
    logo_mobile.src = "https://estyle.vteximg.com.br/arquivos/aionsolution_home_Logo_Aion_black.png";
    hamburger_menu[0].classList.add("hamburger-menu-div--dark");
    hamburger_menu[1].classList.add("hamburger-menu-div--dark");
    hamburger_menu[2].classList.add("hamburger-menu-div--dark");
  } 

  else if (content_color == 'white') {
    logo_desktop.src = "https://estyle.vteximg.com.br/arquivos/aionsolution_home_Logo_Aion.png";
    logo_mobile.src = "https://estyle.vteximg.com.br/arquivos/aionsolution_home_Logo_Aion.png";
    hamburger_menu[0].classList.remove("hamburger-menu-div--dark");
    hamburger_menu[1].classList.remove("hamburger-menu-div--dark");
    hamburger_menu[2].classList.remove("hamburger-menu-div--dark");
  }
}

function swap_header_color(scrollPos) {

  if (menu_is_open) {
    return
  }

  if (scrollPos === 0) {
    // set_navigation_bar_color(background_color, content_color, link_color='black')
    set_navigation_bar_color('transparent', 'white', 'white')
  }
  else {
    set_navigation_bar_color('white', 'black', 'white')
  }

  // // Se for na about_us, sempre será com o conteúdo preto
  // if (window.location.href.includes("de58f908-d2ce-4fa9-b979-e66d998cf013") || window.location.href.includes("/sobre-nos") || window.location.href.includes("/about_us")) {
  //   if (scrollPos === 0) {
  //     // set_navigation_bar_color(background_color, content_color, link_color='black')
  //     set_navigation_bar_color('transparent', 'white', 'white')
  //   }
  //   else {
  //     set_navigation_bar_color('white', 'black', 'white')
  //   }
  // }

  // // Se for na Home, dependerá da posição do scroll
  // else {
  //   if (scrollPos === 0) {
  //     set_navigation_bar_color('transparent', 'white', 'white')
  //   }
  //   else {
  //     set_navigation_bar_color('white', 'black', 'black')
  //   }
  // }
}


function switchMenu() {
  let open_menu = document.getElementById("mobile-menu");

  // Close menu
  if (menu_is_open) {
    menu_is_open = false;
    swap_header_color(lastKnownScrollPosition);
    open_menu.classList.remove("mobile-menu--visible");
  }

  // Open menu
  else {
    menu_is_open = true;
    open_menu.classList.add("mobile-menu--visible");
    set_navigation_bar_color('white', 'black')
  }
}
