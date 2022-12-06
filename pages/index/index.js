// index.js


Page({
    // 跳转到tabbar页面，非tabbar页面无法跳转
    click: function (event) {
        wx.switchTab({
            url: "../base/base"
        });
    },
    // 跳转到非tabbar页面，tabbar页面无法跳转,（入栈）
    // click: function (event) {
    //     wx.navigateTo({
    //         url: "../base/base"
    //     });
    // },
})