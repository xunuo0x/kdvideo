// plugin/components/kdvideo/kdvideo.js
import * as event from '../../utils/event.js'
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    videoInfo: {
      type: Object,
      observer: function (newVal, oldVal, path) {
        let initData = this.init(newVal)
        this.setData(initData)
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentVideoId: '-1',
    showCenterBtn: false,
    direction: 90,
    posterMode: 'scaleToFill',
    videoObjectFit: 'fill'
  },
  attached: function() {
    let initData = this.init(this.data.videoInfo)
    this.setData(initData)
    // 绑定updateCurrentId事件，更新当前播放视频id
    event.on('updateCurrentId', this, function(cid) {
      this.setData({
        currentVideoId: cid
      })
    })
  },
  detached: function() {
    // 解绑updateCurrentId事件
    event.remove('updateCurrentId', this)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    init(videoInfo) {
      let playTime = this.formatDuration(videoInfo.duration)
      return videoInfo.height > videoInfo.width ? {
        direction: 0,
        posterMode: 'aspectFit',
        videoObjectFit: 'contain',
        playTime: playTime
      } : {
        direction: 90,
        posterMode: 'scaleToFill',
        videoObjectFit: 'fill',
        playTime: playTime
      }
    },
    formatDuration: function(duration = 0) {
      // 格式化视频播放时长
      let minutes = Math.floor(duration / 60)
      let seconds = duration % 60
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      return minutes + ':' + seconds
    },
    play: function(e) {
      // 播放当前视频，通知所有视频组件currentVideoId更新
      event.emit('updateCurrentId', this.data.videoInfo.videoId)
    },
    videoPlay: function(e) {
      e.videoId = this.data.videoInfo.videoId
      this.triggerEvent('play', e)
    },
    ended: function () {
      event.emit('updateCurrentId', '-1')
    },
    pause: function(e) {
      event.emit('pause')
    },
    fullscreenchange: function(e) {
      this.triggerEvent('fullscreenchange', e)
    }
  }
})