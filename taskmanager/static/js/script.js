document.addEventListener('DOMContentLoaded', function() {
  console.log('JS LOADED')
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});