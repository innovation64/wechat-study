//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    film:[
      {name:"永生之书", img:1},
      {name:"波斯王子", img:2},
      {name:"侠盗联盟", img:3},
      {name:"大兵小将", img:4},
      {name:"芳华", img:5},
      {name:"暴走神探", img:6},
      {name:"绣春刀", img:7},
      {name:"毒液", img:8}
    ],
    i:5
  },
  tap:function(e)
  {
    //  console.log(e)
     console.log(e.currentTarget.dataset.img)
     this.setData({i:e.currentTarget.dataset.img})
  }
,
  nav:function(e)
    {
      let current = e.detail.current;
      let source = e.detail.source
      //console.log(source);
      console.log(current,this.data.index,this.data.cur)
      this.setData({
          i:current+1
      })

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