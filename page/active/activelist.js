// page/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeInfo: [],
    index: 0
  },
  bindActViewTap: function (e) {
    var that = this;
    var index = parseInt(e.target.dataset.index);    // 取得下标
    var title = that.data.activeInfo[index].title;      // 取出title值

    wx.showModal({
      title: '确定',
      content: '要跳转？',
      success: function (res) {
        if (res.confirm) {

            wx.navigateTo({
              url: '../others/testpage/testpage?title=' + title
            })

        }
      }
    })




  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.getSystemInfo({          //获取设备显示信息

      success: function (res) {

        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });

      }
    });

    wx.request({                //获取json中的数据
      url: 'http://192.168.1.35:3000/users',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (data) {
        var data = data.data;
        for( var i=0;i<data.length;i++ ){
          data[i].index = i
        }
        that.setData({
          activeInfo: data
        })
        
      }
    })
   
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})