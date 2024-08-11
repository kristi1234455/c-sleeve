// components/hot-list/hot-list.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    banner:Object
  },

  // 定义监听器，用来处理banner数据
  observers:{
    // 'banner,theme':function (banner,theme) {
    'banner':function (banner) {
      if(!banner){
        return
      }
      if(banner.items.length ===0){
        return
      }
      const left = banner.items.find(t => t.name === 'left')
      const rightTop = banner.items.find(t => t.name === 'right-top')
      const rightBottom = banner.items.find(t => t.name === 'right-bottom')
      this.setData({
        left,
        rightTop,
        rightBottom,
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})