var url_head = "http://192.168.0.180:8081/api"; //http 本地
//var url_head = "http://127.0.0.1:8888/api"; //http  服务器

//需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数
function setAjax(url, content, success, error) { 	
	var set_url = url_head + url;
	$.ajax({
		url: set_url,
		data: JSON.stringify(content),
		type: "post",
		dataType: "json",
		contentType: "application/json",
		success,
		error
	});
}

//不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数
function setAjaxN(url, success, error) {
	var set_url = url_head + url;
	$.ajax({
		url: set_url,
		type: "post",
		dataType: "json",
		success,
		error
	});
}