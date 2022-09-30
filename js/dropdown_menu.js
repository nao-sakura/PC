$(function(){
   $('.menuBox').on("click", function(){
       $(".dropMenu:not(:animated)").slideDown();
   });
   
// メニュー領域外をクリックしたらメニューを閉じる
  $(document).on("click", function(e) {
    if (!$(e.target).closest('.dropMenu').length) {
        $('.dropMenu:not(:animated)').slideUp();
    }
  });
});
