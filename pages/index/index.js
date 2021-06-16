import request  from '../../request/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    catesList: [],
    floorList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCatesList()
    this.getFloorList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
      url: '/home/swiperdata',
      method: "GET"
    }).then((result) => {
      this.setData({
        swiperList: result.data.message
      })
    }).catch(err => console.log(err))
  },
  // 获取导航图数据
  getCatesList() {
    request({
      url: '/home/catitems',
      method: "GET"
    }).then((result) => {
      this.setData({
        catesList: result.data.message
      })
    }).catch(err => console.log(err))
  },
  // 获取楼层数据
  getFloorList() {
    request({
      url: '/home/floordata',
      method: "GET"
    }).then((result) => {
      this.setData({
        floorList: result.data.message
      })
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