var products = document.getElementById('products');
var submenuitem = document.getElementsByClassName('sub-menu-ul');

products.addEventListener('mouseover', submenu);

function submenu() {
  (products.getAttribute('aria-expanded')=='false')?(products.setAttribute('aria-expanded', 'true')):(products.setAttribute('aria-expanded', 'false'));

  submenuitem[0].classList.toggle('sub-menu-visible');
  console.log('worked');
}
