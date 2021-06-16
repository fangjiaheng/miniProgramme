import request from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftCatesList: [],
    rightCatesList: [],
    currentIndex: 0,
    // 右侧的下拉滚动条, 需要每次点击左侧菜单栏 恢复到0
    scrollTop: 0
  },
  // 接口的返回数据
  Cates:[],
  // 点击左侧导航栏
  handleTap (e) {
    const { index: currentIndex } = e.currentTarget.dataset
    this.setData({
      currentIndex,
      rightCatesList: this.Cates[currentIndex].children,
      scrollTop: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 
      1. 先判断本地有没有旧数据
        {
          time: Date.now(),
          data: [...]
        }
      2. 没有就发请求
      3. 有,判断是否过期, 没过期就用
    */
   const Cates = wx.getStorageSync('cates')
   if (!Cates) {
    this.getCatesList()
   } else {
     // 有数据, 判断是否过期
     if (Date.now() - Cates.time > 1000 * 10) {
      // 超时
      this.getCatesList()
     } else {
      this.Cates = Cates.data
      let leftCatesList = this.Cates.map(item => item.cat_name)
      let rightCatesList = this.Cates[0].children
      this.setData({
        leftCatesList,
        rightCatesList
      })
     }
   }
  },
  // 获取分类数据
  getCatesList() {
    request({
      url: '/categories',
      method: "GET"
    }).then((result) => {
      this.Cates = result.data.message
      // 将数据存入缓存
      wx.setStorageSync('cates', {
        time: Date.now(),
        data: this.Cates
      })
      let leftCatesList = this.Cates.map(item => item.cat_name)
      let rightCatesList = this.Cates[0].children
      this.setData({
        leftCatesList,
        rightCatesList
      })
      // let left = []
      // let right = []
      // this.Cates = result.data.message
      // this.Cates.forEach(item => {
      //   const { cat_id, cat_name, cat_pid, cat_level, cat_deleted, cat_icon } = item
      //   const { children } = item
      //   left.push({ cat_id, cat_name, cat_pid, cat_level, cat_deleted, cat_icon })
      //   right.push({ children })
      // })
      // console.log(left)
    }).catch(err => console.log(err))
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})