document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myTopnav").addEventListener('click', toggleNavigation);
  window.addEventListener('scroll', function() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
});

function toggleNavigation() {
  document.getElementById("myTopnav").classList.toggle("responsive");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
