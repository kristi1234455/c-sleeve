// pages/home/home.js
import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner as Grid, Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 这里更改名字后，wxml中也需要更改使用的标签的名字
        // topTheme:null,
        themeA: null,
        // 标签的定义，直接使用ABC，而不是自定义的英文名字，布局太多，不好区分
        bannerB: null,
        // categoryC:null
        grid: [],
        activityD:null,
        themeE:null,
        themeF:null,
        bannerG:null,
        themeH:null
    },

    /**
     * 生命周期函数--监听页面加载
     * 页面的JS应该做数据绑定，而不是写业务逻辑
     * 页面JS相当于是view视图层
     * 前端的业务逻辑层至少要分出一层来，这里分出model层，专门写业务逻辑
     * model层使用class类来进行封装，使用es6的class类
     * 注意：home不是业务对象，而home上的theme、banner才是业务对象
     */
    async onLoad(options) {
        // Theme.getHomeLocationA(data=>{
        //   this.setData({
        //     topTheme:data[0]
        //   })
        // })

        // const data = await Theme.getHomeLocationA()
        // console.log(data)
        // this.setData({
        //   topTheme: data[0]
        // })

        // 这里简写，直接使用initALL函数
        this.initAllData()
    },

    async initAllData() {
        // 将获取数据的方式不放在home的js中，而是放在theme的js中
        // const themes=await Theme.getThemes();
        const theme =new Theme()
        await theme.getThemes()

        // 注意：这里的实例化方法也需要加上await，否则数据是出不来的
        const themeA = await theme.getHomeLocationA()
        const themeE= await theme.getHomeLocationE()
        // themeE中还会显示商品的详细数据，所以，需要获取spu
        let themeESpu = []
        if(themeE.online){
            const data = await Theme.getHomeLocationESpu()
            if(data){
                themeESpu=data.spu_list.slice(0,8)
            }
        }
        const themeF = await theme.getHomeLocationF()
        const themeH = await theme.getHomeLocationH()

        const bannerB = await Banner.getHomeLocationB()
        // const categoryC = await Category.getHomeLocationC()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()
        const bannerG = await Banner.getHomeLocationG()
        this.setData({
            // themeA: themeA[0],
            themeA,
            bannerB,
            // categoryC
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})