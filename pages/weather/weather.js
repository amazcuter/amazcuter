// pages/weather/weather.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
var weatherdata = [];

function setOption(chart, weather) {
    var option = {
        title: {
            text: '北京未来24小时气温预测',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: weather,
            type: 'line',
            smooth: true
        }]
    };
    chart.setOption(option);
}
Page({
    data: {
        weatherdata: [],
        ec: {
            // 将 lazyLoad 设为 true 后，需要手动初始化图表
            lazyLoad: true
        },
        isLoaded: false,
        isDisposed: false
    },
    onReady: function () {
        // 获取组件
        this.ecComponent = this.selectComponent('#mychart-dom-line');
    },
    click() {
        var that = this
        wx.request({
            url: 'https://devapi.qweather.com/v7/weather/24h?location=101010100&key=74cb489fc3224179b203453b162c68ec',
            method: 'GET',
            success(res) {
                var arr = [];
                for (var i in res.data.hourly) {
                    arr.push(res.data.hourly[i].temp);
                }
                that.setData({
                    weatherdata: arr
                })
                that.updatadata()
            }
        })
    },
    updatadata() {
        this.ecComponent.init((canvas, width, height, dpr) => {
            // 获取组件的 canvas、width、height 后的回调函数
            // 在这里初始化图表
            const chart = echarts.init(canvas, null, {
                width: width,
                height: height,
                devicePixelRatio: dpr // new
            });
            setOption(chart, this.data.weatherdata);

            // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
            this.chart = chart;

            this.setData({
                isLoaded: true,
                isDisposed: false
            });
            // 注意这里一定要返回 chart 实例，否则会影响事件处理等
            return chart;
        });
    }
})