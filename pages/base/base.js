// pages/base/base.js
//定义开始秒数
var num;
var btndis;
var flag;
import Dialog from '@vant/weapp/dialog/dialog';
Page({
    data: {
        gradientColor: {
            '0%': '#ffd01e',
            '100%': '#ee0a24',
        },
        num: 10,
        btndis: false,
    },
    start: function () { //开始计时函数
        //设置显示器值为当前值减一
        this.setData({
            btndis: true
        })
        if (this.data.num > 0) {
            this.setData({
                num: this.data.num - 1
            })
            this.timer()
        } else {
            this.setData({
                num: 10,
                btndis: false
            })
            Dialog.alert({
                message: '时间到',
            }).then(() => {
                // on close
            });
        }
    },
    timer: function () {
        setTimeout(this.start, 1000);
    },

})