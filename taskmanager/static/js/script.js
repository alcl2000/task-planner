$(document).ready(function(){
  $('.sidenav').sidenav();
});
$(document).ready(function(){
  $('.modal').modal();
});
  let datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
  });
$(document).ready(function(){
  $('select').formSelect();
});
$(document).ready(function(){
  $('.collapsible').collapsible();
});