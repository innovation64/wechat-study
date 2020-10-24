//logs.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      {
        id:1,
        name: "手机数码"
      },
      {
        id:2,
        name: "电脑插件"

      },
      {
        id:3,
        name: "电视影音"
      },
      {
        id:4,
        name: "空调冰箱"
      },
      {
        id:5,
        name: "厨卫电器"
      },
      {
        id:6,
        name: "生活电器"
      }
    ]
  },
  tap: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    this.setData({
      i: e.currentTarget.dataset.id
    })
   navigator
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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