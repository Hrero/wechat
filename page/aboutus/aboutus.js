// page/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgItemName: "msgItem-company",
    index:'',
    currentTab:0,
    winWidth:0,
    winHeight:0
  },
  // onChangeTopbarIndex: function(e){
  //   var msgItemName = '';
  //   var index = e.currentTarget.dataset.current;
   
  //   if (index == 0 ){
  //     msgItemName = "msgItem-company"
  //   }
  //   else if( index == 1 ){
  //     msgItemName = "msgItem-assurance"
  //   }
  //   else if( index == 2 ){
  //     msgItemName = "msgItem-management"
  //   }
  //   this.setData({
  //     msgItemName: msgItemName,
  //     currentTab: index
  //   })
  // },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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