//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: "",
    password: "",
    nationalityIndex: "",
    nationalityArray: ["中国", "其他"],
    isChinese: true,
    loginSwitched: true,
    registerSwitched: false,

    year: 2020,
    month: 10,
    day: 14,
    age: "",
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  test() {
    this.setData({
      loginSwitched: !this.data.loginSwitched,
      registerSwitched: !this.data.registerSwitched,
    })
  },
  nationalityChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    if (e.detail.value != 0) {
      this.setData({
        isChinese: false,
        nationalityIndex: e.detail.value
      })
    } else {
      this.setData({
        isChinese: true,
        nationalityIndex: e.detail.value
      })
    }
  },
  dateChange(e) {
    let temp = e.detail.value
    let time = temp.split('-')
    this.setData({
      year: time[0],
      month: time[1],
      day: time[2]
    })
    this.ageChange()
  },
  regionChange(e){
    this.setData({
      region: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    })
    console.log()
  },
  ageChange(){
    this.setData({
      age: 2020 - this.data.year
    })
  }

})