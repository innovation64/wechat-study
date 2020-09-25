Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:[1,2,3,4,5,6,7,8,9,10],
    result:0,
    value:0
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
    var sum=1
    for(var j=1;j<=5;j++)
     sum*=j
     this.setData({result:sum})
  },
bindinput:function(e){
  console.log(e.detail.value)
  var sum=1
  for(var j=1;j<=e.detail.value;j++)
   sum*=j
   this.setData({result:sum})
   this.setData({value:e.detail.value})
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