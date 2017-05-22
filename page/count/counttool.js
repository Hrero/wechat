// page/count/counttool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amount:1000,returns:3.5,cycle:120,income:''
  },

  /**
   * 点击计算收益
   */
  amountInputEvent: function(e){
    this.setData({
       amount:e.detail.value
    })
  },
  returnsInputEvent: function (e) {
    this.setData({
      returns: e.detail.value
    })
  },
  cycleInputEvent: function (e) {
    this.setData({
      cycle: e.detail.value
    })
  },
  onCalculateEarnings: function (e) {
    this.setData({
      income: ((this.data.amount * (this.data.returns / 100) * this.data.cycle) / 365).toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('-----页面加载----')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('-----初次渲染----')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('-----显示----')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('-----隐藏----')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('-----卸载----')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('----上拉----------')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('----下拉----------')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '互存金融理财器',
      path: 'page/count/counttool',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
