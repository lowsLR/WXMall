// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null,
    cartList: []
  },

  /**
   * 查看购物车
   */
  toCart: function(){
    wx.switchTab({
      url: "../cart/cart"
    })
  },

  /**
   * 添加购物车
   */
  addCart: function (){
    let needAdd = 1
    for (var i = 0; i < this.data.cartList.length; i++) {
      if (this.data.cartList[i].name == this.data.details.name) {
        needAdd = 0
        break
      }
    }
    if (needAdd) {
      this.data.cartList.push(this.data.details)
      this.setData({
        cartList: this.data.cartList
      })
      wx.showToast({
        title: '添加成功'
      })
    } else {
      wx.showToast({
        title: '请勿重复添加'
      })
    }
    wx.setStorageSync('cartList', this.data.cartList)
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
    this.setData({
      details: wx.getStorageSync('viewingDetailsPageData'),
      cartList: wx.getStorageSync('cartList') || []
    })
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
