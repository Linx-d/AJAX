 wx.config({
        beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId:config.authCorpId, // 必填，企业微信的corpID
        timestamp:config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
        jsApiList: ['checkJsApi','openUserProfile'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
    });

    wx.ready(function(){
        wx.agentConfig ({
            corpid: agentConfig.authCorpId, // 必填，企业微信的corpid，必须与当前登录的企业一致
            agentid: agentConfig.agentId, // 必填，企业微信的应用id （e.g. 1000247）
            timestamp: agentConfig.timestamp, // 必填，生成签名的时间戳
            nonceStr: agentConfig.nonceStr, // 必填，生成签名的随机串
            signature: agentConfig.signature,// 必填，签名，见附录1
            jsApiList: [
                'getCurExternalContact',
                'openUserProfile',
            ],
            success: function(res) {
                wx.invoke('getCurExternalContact', {
                }, function(res){
                    // 调用成功
                });
            },
            fail: function(res) {
                if(res.errMsg.indexOf('function not exist') > -1){
                    alert('版本过低请升级')
                }
                alert(JSON.stringify(res));
            }
        });
    });