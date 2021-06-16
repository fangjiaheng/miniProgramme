// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
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
    handleTap (e) {
      // console.log(e.target.dataset)
      const { index } = e.target.dataset
      this.triggerEvent('tapChildComponent', index)
      // const tabs = JSON.parse(JSON.stringify(this.data.tabs)) // 深拷贝
      // tabs.forEach((v, i) => i === index ? v.isActive = true: v.isActive = false)
      // this.setData({
      //   tabs
      // })
    }
  }
})
