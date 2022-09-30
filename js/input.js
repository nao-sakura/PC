$(function(){
//	$("body").keypress( function( event ) {
	$("#mailaddress").keypress( function( event ) {
		if( event.which === 13 ){
			goNext("mypage");
		}
	});
	$("#password").keypress( function( event ) {
		if( event.which === 13 ){
			goNext("mypage");
		}
	});

	$("#contactnumber").keypress( function( event ) {
		if( event.which === 13 ){
			goNext("kakunin");
		}
	});
	$("#tel").keypress( function( event ) {
		if( event.which === 13 ){
			goNext("kakunin");
		}
	});
});

function checkInput(div, this_form) {
	if (div == "mypage") {
		if (this_form.m_email.value == '') {
			alert('メールアドレス(ID)を入力して下さい。');
			this_form.m_email.focus();
			return false;
		}
		if (this_form.m_passwd.value == '') {
			alert('パスワードを入力して下さい。');
			this_form.m_passwd.focus();
			return false;
		}
	} else if (div == "kakunin") {
		if (this_form.kkakunin_toiawase.value == '') {
			alert('お問合番号を入力して下さい。');
			this_form.kkakunin_toiawase.focus();
			return false;
		}
		if (this_form.kkakunin_tel.value == '') {
			alert('電話番号を入力して下さい。');
			this_form.kkakunin_tel.focus();
			return false;
		}
	} else {
		alert('不正な操作です。');
		return false;
	}
	return true;
}

function goNext(div) {
	var this_form = document.forms[0];
	if (checkInput(div, this_form) == false) {
		return false;
	}
	if (div == "mypage") {
		this_form.m_login.value = 1;
	} else {
		this_form.k_login.value = 1;
	}
	this_form.submit();
}