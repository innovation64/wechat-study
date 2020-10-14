
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    }
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  onHide() {

  },

  inputValue: '',
  data: {
    video:[{name:"视频1 冠世一战",add:"https://kvideo01.youju.sohu.com/15fc35e5-de41-412e-b1d9-ba0a0b6f3c0e1_0_0.mp4"},
    {name:"视频2 思念是一种病",add:"https://video.pearvideo.com/mp4/third/20200921/cont-1698243-11905134-173810-hd.mp4"},
    {name:"视频3 HEAL SOMEONE ",add:"https://video.pearvideo.com/mp4/third/20201010/cont-1700946-10453553-085728-hd.mp4"}
  ],
    src:"https://kvideo01.youju.sohu.com/15fc35e5-de41-412e-b1d9-ba0a0b6f3c0e1_0_0.mp4",
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  change:function(e){
    console.log(e)
    this.setData({src:this.data.video[e.detail.current].add})
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
