$(function(){
  $("input[name='deltype']").change(function(){
    if($(this).val() == 1){
      //全て取り消し
      $('.choice').hide();
      $('.bordicon').show();
      $('.bordicon').removeClass('noBord');
      $('.bordicon').removeClass('yesBord');
      $('.bordicon').addClass('noBord');
      $('.bordicon span').html('搭乗しない');
      $('.flightInfoArea').addClass('flightCnacelArea');
      $('.result_num').show();
      $('.result_num span').html('0');
      $('.caution').hide();
    }else{
      //一部取り消し
      $('.cancelcheck').prop('checked', false);
      $('.choice').show();
      $('.bordicon span').html('');
      $('.flightInfoArea').removeClass('flightCnacelArea');
      $('.bordicon').removeClass('noBord');
      $('.bordicon').removeClass('yesBord');
      $('.bordicon').show();
      $('.result_num').show();
      $('.caution').show();
/*
      $('.result_num').each(function(i, elem){
        var def_num = $(elem).prev().children('span').text();
        $(elem).children('span').html(def_num);
      });
*/
      $('.result_num').each(function(i, elem){
        var def_num = $(elem).next().val();
        $(elem).children('span').html(def_num);
      });


    }
  });
    $(".cancelcheck").change(function(){
      //キャンセル者指定時
      if ($(this).is(':checked')) {
        $(this).closest('.choice').next().addClass('noBord');
        $(this).closest('.choice').next().children('span').html('搭乗しない');
      }else{
        $(this).closest('.choice').next().removeClass('noBord');
        $(this).closest('.choice').next().children('span').html('');
      }
      //現在のvalueから対象のspanを特定
      var target_id = $(this).val();
      //対象グループの総チキャンセル者数を取得
      var mygroup = $(this).closest('.passengerGroup').find('input:checked');
      var cancel_num = $(mygroup).length;
      var def_num = $(this).parents('.flightCalculation').find('.def_num').children('span').text();
      //console.log(def_num);
      var num = def_num - cancel_num;
      $('#'+target_id).text(num);
  });
});

$(window).load(function (){
  //書き換え対象にID付与
  $('.result_num').each(function(i, elem){
    var span_id = 'result_num'+i;
    $(elem).children('span').attr('id', span_id);
  });
  //書き換え対象にIDをvalueで設定
  $('.passengerGroup').each(function(i, elem){
    var span_id = 'result_num'+i;
    //console.log(span_id);
    $(elem).find('input').each(function(n, check){
      //console.log(n);
      $(check).val(span_id);
    });
  });
  //初期化と非表示
  $('.cancelcheck').prop('checked', false);
  $('.flightInfoArea').removeClass('flightCnacelArea');
  $('.choice').hide();
  $('.bordicon').hide();
  $('.result_num').hide();
  $('.caution').hide();
  $("input[name='deltype']").prop('checked', false);
});