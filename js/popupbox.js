$(function(){
    //上からの位置調整
    var topPositon = 140;
    // ウィンドウの大きさ取得
    var w = $(window).width();
    var h = $(window).height();
	// スクロール取得
    var vScrollDistance = $(window).scrollTop();
    // 読み込むエリアの大きさ取得
    var yomikomiW = $('.readArea').outerWidth(true);
    var yomikomiH = $('.readArea').outerHeight(true);
    // バックレイヤー挿入
    $('body').append('<div class="back-layer"></div>');
    // ホップアップ表示
    $('.back-layer').fadeIn('slow');
    $('.readArea').fadeIn('slow');
    // ホップアップ中央に表示
//    $('.readArea').css({"left": ((w-yomikomiW)/2) + "px","top": ((h-yomikomiH)/2) + topPositon + "px"});
    $('.readArea').css({"left": ((w - yomikomiW) / 2) + "px","top": ((h - yomikomiH) / 2 + vScrollDistance) + "px"});
    // 閉じる処理
    $('.back-layer,.closebtn').unbind().click(function(){
        $('.readArea').fadeOut("fast",function(){
            $('.back-layer').fadeOut('fast',function() {
                // バックレイヤーと読み込みエリア削除
                $('.back-layer , .readArea').remove();
            });
        });
    });
});
