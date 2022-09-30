var utm_source = get_para('utm_source') + "";
var medium = get_para('utm_medium');
var campaign = get_para('utm_campaign');
if (utm_source == "line") {
    $.ajax({
        type: "POST",
        async: false,
        data: "utm_source=" + utm_source + "&utm_medium=" + medium + "&utm_campaign=" + campaign,
        url: "https://www.sakuratravel.jp/search/ses_on.php",
        success: function(data){
			var ar_data = data.split("__");
			if (ar_data[1] == 1) {
				document.cookie = "fromsite=" + ar_data[0] + "; max-age=" + ar_data[5] + ";path=/;";
				document.cookie = "fromsite2=" + ar_data[3] + "; max-age=" + ar_data[5] + ";path=/;";
				document.cookie = ar_data[2] + "=" + ar_data[4] + "; max-age=" + ar_data[5] + ";path=/;";
			}
        },
        error: function(data) {
        }
    });
}

function get_para(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}