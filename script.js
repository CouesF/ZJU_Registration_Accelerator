// ==UserScript==
// @name         Modify Interval Time
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modify setInterval time in regi.zju.edu.cn
// @author       You
// @match        http://regi.zju.edu.cn/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // 覆写 `setInterval` 调用的函数
    const originalSetInterval = window.setInterval;

    window.setInterval = function(callback, interval) {
        if (interval === 1000) {  // 如果 interval 是 1e3（即 1000ms）
            console.log('Modifying interval to 100ms');
            interval = 10;  // 修改为 100ms，这个值改的越小，学习速度越快
        }
        return originalSetInterval(callback, interval);
    };

})();
