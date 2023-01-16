$(document).ready(function(){
  $('.sidenav').sidenav();
});
$(document).ready(function(){
  $('.modal').modal();
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(datepicker,{
    format: "dd mmm yyyy",
    i18n: {done: "select"}
  });
});
$(document).ready(function(){
  $('select').formSelect();
});
      