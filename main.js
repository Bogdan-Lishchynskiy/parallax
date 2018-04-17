window.addEventListener('scroll', function (e) {
  console.log(document.body.scrollTop);
  var $parallax = document.getElementById('parallax');
  var posY = window.pageYOffset * 1.6;
  $parallax.style.backgroundPosition = '0px ' + (-posY) + 'px';
})