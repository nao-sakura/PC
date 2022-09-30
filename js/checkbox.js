function checkconf(CheckBox,Btn){
  if(CheckBox.prop('checked')) {
    Btn.removeClass('disable');
  }
  else {
    Btn.addClass('disable');
  }
}
