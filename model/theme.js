// 使用类来封装业务逻辑，在js页面直接进行调用
import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme {

    // 改写theme，一次性获取所有theme，然后将不同数据赋值给不同的组件显示
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    // 一次性获取了所有theme，给数据赋值，不使用static属性，避免扩展性差
    async getThemes() {
        const names=`${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        });
    }

    // static async getHomeLocationA(callback) {
    // 上面没有通过static赋值数据，这里也就不需要static进行修饰了
    async getHomeLocationA(callback) {
        // // 模板字符串 ES6
        // wx.request({
        //     url:`${config.apiBaseUrl}theme/by/names`,
        //     method:'GET',
        //     data:{
        //         names:'t-1'
        //     },
        //     header:{
        //         appkey:config.appkey
        //     },
        //     // this的指代问题，要么在wx.request方法外使用that代替this，要么使用箭头函数
        //     // success(res){
        //     success:res=>{
        //         // 如果将home.js页面中的业务逻辑移动到这里，就没有变量了，可以直接通过callback返回
        //         // this.setData({
        //             // topTheme:res.data[0]
        //         // })
        //         callback(res.data)
        //     }
        // })
        //     Http请求可以是一个工具类，可以进行封装，这里直接调用
        // return await Http.request({
        //     url: `theme/by/names`,
        //     data: {
        //         names: `t-1`
        //     }
        //     // callback:data=>{
        //     //     callback(data)
        //     // }
        // })
        // return data

        return this.themes.find(t => t.name===Theme.locationA)
    }

    // static async getHomeLocationC(callback) {
    async getHomeLocationE(callback) {
        // return await Http.request({
        //     url: `theme/name/{name}/with_spu`,
        //     data: {
        //         names: `t-1`
        //     }
        //
        // })
        return this.themes.find(t => t.name===Theme.locationE)
    }

    // 获取滚动数据，带商品详细信息的
    static async getHomeLocationESpu(callback) {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static async getThemeSpuByName(name){
        return await Http.request({
            url: `theme/name/${name}/with_spu`,
        })
    }

    async getHomeLocationF(){
        return this.themes.find(t => t.name===Theme.locationF)
    }

    async getHomeLocationH(){
        return this.themes.find(t => t.name===Theme.locationH)
    }
}

export {
    Theme
}