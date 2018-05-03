function shareFriend() {
  WeixinJSBridge.invoke('sendAppMessage',{
    "appid": appid,
    "img_url": imgUrl,
    "img_width": "200",
    "img_height": "200",
    "link": lineLink,
    "desc": descContent,
    "title": shareTitle
  }, function(res) {
//_report('send_msg', res.err_msg);
  });
}
function tofriend() {
  console.log('qqq')
  wx.onMenuShareAppMessage({
    title: '车智行', // 分享标题
    desc: '车智行', // 分享描述
    link: 'https://www.baidu.com', // 分享链接
    imgUrl: '', // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
      console.log('sss')
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
}
