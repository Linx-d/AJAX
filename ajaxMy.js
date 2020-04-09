//var url_head = "http://192.168.0.180:8081/api"; //http 本地
var url_head = "http://111.231.188.211:8888/api"; //http  服务器

/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 login----*/
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
/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 end----*/


/*--- 异步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
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
/*--- 异步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/

 
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
	function setAjaxA(url, content, success, error) { 	
		var set_url = url_head + url;
		$.ajax({
			async: false,
			url: set_url,
			data: JSON.stringify(content),
			type: "post",
			dataType: "json",
			contentType: "application/json",
			success,
			error
		});
	}
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/


/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
	function setAjaxNA(url, success, error) {
		var set_url = url_head + url;
		$.ajax({
			async: false,
			url: set_url,
			type: "post",
			dataType: "json",
			success,
			error
		});
	}
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end-----*/

/*--------------获取 地址栏 参数 login--------------------------*/
  //url为空时为调用当前url地址 
  //调用方法为 var patams = getPatams();
  //获取地址栏上的 userName
  //var userName =  patams.userName;
  function getPatams(url) {
      var theRequest = new Object();
      if (!url)
          url = location.href;
      if (url.indexOf("?") !== -1)
      {
          var str = url.substr(url.indexOf("?") + 1) + "&";
          var strs = str.split("&");
          for (var i = 0; i < strs.length - 1; i++)
          {
              var key = strs[i].substring(0, strs[i].indexOf("="));
              var val = strs[i].substring(strs[i].indexOf("=") + 1);
              theRequest[key] = val;
          }
      }
      return theRequest;
  }
/*--------------获取 地址栏 参数 end--------------------------*/