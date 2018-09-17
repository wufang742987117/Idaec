;(function () {
    'use strict';
    angular
        .module('app').constant('CONFIG', {
        "private":"http://47.100.122.177/api/private/",
        "public": "http://47.100.122.177/api/public/",
        "usertoken": "http://47.100.122.177/api/token/",
        "authentication": "http://47.100.122.177/api/auth/",
        "news": "http://47.100.122.177/api/news/",
        "sinapay": "http://47.100.122.177/api/payment/sina/",
        "c2c": "http://47.100.122.177/api/c2c/",
        "c2cimage": "https://www.idaec.com/hbf/",
		"bbs":"http://192.168.0.9:88/bbs/"
    });
})();
