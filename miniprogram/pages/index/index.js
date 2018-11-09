var plugin = requirePlugin("myPlugin")
Page({
  data: {
    videoList: [
      {
        videoId: "1",
        videoUrl: "http://bigfile-30056.sz.gfp.tencent-cloud.com/573591438_2654109_87239F41BBAB68187B9F141663975422",
        duration: 14,
        poster: "http://qqpublic.qpic.cn/qq_public/0/0-3023372384-E5C8A2AC5702B4C0445CF93AC0F95995/900",
        height: 540,
        width: 960,
        title: "视频的标题",
        owner: "作者"
      },
      {
        videoId: "2",
        videoUrl: "http://v.kd.qq.com/1116_5X0000000000000000000000000VXW3t.f630.mp4?vkey=D1D50E7DE9118BA35E7F36B4F5113F0CABE1F145A32D37E8734920D0493167C25F6BE7E2856F6A446C5525A5CFFFDB37&guid=9B2D0B6E-C86A-4014-8C1E-765BD2E4E8E3",
        duration: 19,
        poster: "http://qqpublic.qpic.cn/qq_public_cover/0/0-10000-54B1432FE32258B4FBBA7773DAA9AA2E_vsmcut/600",
        height: 720,
        width: 1280,
        title: "视频的标题",
        owner: "作者"
      },
      {
        videoId: "3",
        videoUrl: "http://v.kd.qq.com/1116_6X000000000000000000000000rSRr6d.f630.mp4?vkey=9ECA8C8EF45B92B6F6CDA8203366F28DAD555A884E45804026871F6B41E74184B5918ECB22D22E024A7DD84DD93F4D1E&guid=9B2D0B6E-C86A-4014-8C1E-765BD2E4E8E3",
        duration: 10,
        poster: "http://qqpublic.qpic.cn/qq_public_cover/0/0-10000-F932175907E636B33F91399B94B09069_vsmcut/600",
        height: 720,
        width: 1280,
        title: "视频的标题",
        owner: "作者"
      },
      {
        videoId: "4",
        videoUrl: "http://v.kandian.qq.com/shg_1854451444_1047_a46f5942021d43f3a04509fa7144vide.f20.mp4?dis_k=1036eb4ab0c9c23e33e5b1fdc9a1c346&dis_t=1536047891",
        duration: 24,
        poster: "http://qqpublic.qpic.cn/qq_public_cover/0/0-10000-2E3FAC12CADC0D700D43185D563523A4_vsmcut/600",
        height: 720,
        width: 1280,
        title: "视频的标题",
        owner: "作者"
      },
      {
        videoId: "5",
        videoUrl: "http://v.kd1.qq.com/shg_321_1116_6X000000000000000000000000rsFXyc.f820.mp4?dis_k=5b8aca23b7f11a6cc39f5805cd819dbe&dis_t=1539679319",
        duration: 7,
        poster: "http://qqpublic.qpic.cn/qq_public_cover/0/0-10000-2B7A676DB48A093F277F334821289DE7_vsmcut/600",
        height: 1272,
        width: 720,
        title: "看到电视上这个场景，激动的我赶紧看看家里的冰箱……",
        owner: "CF解说武器"
      }
    ]
  },
  onLoad: function() {
    setTimeout(() => {
      // plugin.play('1')
    }, 2000)
  },
  play: function(e) {
    console.log(e.detail)
  },
  fullscreenchange: function(e) {
    console.log(e)
  }
})