import {config} from "../config/config";
import {promisic} from "./util";

class Http{
    // async await是es7的语法
    static async request({
                             url,
                             data,
                             // callback,
                             method = 'GET'
    }) {
        // 模板字符串 ES6
        // 避免在每个方法中都返回callback，使用promisic，原生小程序不支持promise，就使用lin UI来支持转换promise
        // 使用方法：将wx.request作为参数传到promisic方法中，返回的结果是一个函数，而不是值
        const res = await promisic(wx.request)({
            // url的拼接，前半部分是config中写死的地址，后半部分是根据请求的不同，传过来的地址
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
            // success(res) {
            //     callback(res.data)
            // }
        })
        // 对返回的数据进行处理，返回的数据都是.data
        return res.data
    }
}
export {
    Http
}