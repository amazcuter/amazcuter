// pages/layout-flex/layout-flex.js

var color =[];
Page({
    data: {
        color:[]
    },
    onLoad(options) {
        let arr=[];
        for (var i = 0; i < 25; i++) {
            arr.push(this.getColor())
        }
        this.setData({
            color:arr
        })
    },
    recolor: function () {
        let arr=[];
        for (var i = 0; i < 25; i++) {
            arr.push(this.getColor())
        }
        this.setData({
            color:arr
        })
    },
    getColor: function () {
        var letter = "0123456789ABCDEF";
        var c = "#";
        for (var i = 0; i < 6; i++) {
            c = c + letter[Math.floor(Math.random() * 16)]
        }
        return c;
    }

})