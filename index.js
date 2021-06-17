
let lastKnownScrollPosition = 0;
let ticking = false;
let menu_is_open = false;


function navigation_dark_background() {
  
  let nav_logo = document.getElementById("nav-logo")
  let logo_mobile = document.getElementById("mobile-nav-logo")
  
  let hamburger_menu = document.getElementsByClassName("hamburger-menu-div")
 
  nav_logo.src="images/Logo_Aion.png"
  logo_mobile.src="images/Logo_Aion.png"
  hamburger_menu[0].classList.remove('hamburger-menu-div--white-background') 
  hamburger_menu[1].classList.remove('hamburger-menu-div--white-background') 
  hamburger_menu[2].classList.remove('hamburger-menu-div--white-background') 
  
}

function navigation_light_background() {
  
  let nav_logo = document.getElementById("nav-logo")
  let logo_mobile = document.getElementById("mobile-nav-logo")
  
  let hamburger_menu = document.getElementsByClassName("hamburger-menu-div")
  
  nav_logo.src="images/Logo_Aion_black.png"
  logo_mobile.src="images/Logo_Aion_black.png"
  hamburger_menu[0].classList.add('hamburger-menu-div--white-background') 
  hamburger_menu[1].classList.add('hamburger-menu-div--white-background') 
  hamburger_menu[2].classList.add('hamburger-menu-div--white-background') 
}



function swap_header_color(scrollPos) {
  let navbar = document.getElementById("navbar")
  let navbar__mobile = document.getElementById('mobile-navbar')
  if (!menu_is_open) {

  if (scrollPos == 0) {
    
    navbar.classList.remove('navbar--scrolled')
    navbar__mobile.classList.remove("mobile-navbar--scrolled");
    
    if (window.location.pathname == '/about_us.html') {
      navigation_light_background()
    }
    else {
         navigation_dark_background()
        }
      }
      
      else if (scrollPos !== 0) {
        navbar.classList.add("navbar--scrolled");
        navbar__mobile.classList.add("mobile-navbar--scrolled");
        navigation_light_background()
      }
  }

};

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        swap_header_color(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }

  });

function switchMenu() {
  let open_menu = document.getElementById("mobile-menu")
  let nav_logo_mobile = document.getElementById("mobile-nav-logo")

  // Close menu
  if (menu_is_open) {
    open_menu.classList.remove('mobile-menu--visible')

    swap_header_color(lastKnownScrollPosition);
    if (window.location.pathname == '/about_us.html') {
      nav_logo_mobile.src="images/Logo_Aion_black.png"
    }

    else { 
      nav_logo_mobile.src="images/Logo_Aion.png"
    }

    menu_is_open = false
  }
  
  // Open menu
  else {
    open_menu.classList.add('mobile-menu--visible')
    menu_is_open = true;
    // navigation_dark_background();
    swap_header_color(lastKnownScrollPosition);
  }

}