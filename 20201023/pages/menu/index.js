//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [{
        name: "网购标签式",
        url: "/pages/biaoqian/index"
      },
      {
        name: "网购多版面式",
        url: "/pages/duobanmian/index"
      },
      {
        name: "网购宫格式",
        url: "/pages/gongge/index"
      },
      {
        name: "网购列表式",
        url: "/pages/liebiao/index"
      }
    ],


  },
  navigate: function(e){
    let temp = e.currentTarget.dataset.url
    wx.navigateTo({
      url: temp,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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