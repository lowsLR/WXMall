// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: app.globalData.data,
    activeMenuItem: 'menu-item0',
    activeListItem: 'list-item0',
    currentGoodIndex: 0,
    currentListIndex: 0
  },

  /**
   * 选择菜单
   */
  toggleActiveMenu: function(e){
    this.setData({
      activeMenuItem: e.target.id,
      activeListItem: e.target.dataset.relatedlistitem
    })
  },

  /**
   * 滚动列表
   */
  scrollingList: function(e){
    let y = Math.floor(e.detail.scrollTop / 457)
    this.setData({
      activeMenuItem: `menu-item${y}`
    })
  },

  /**
   * 查看详情
   */

  goDetails0: function (e){
    this.setData({
      currentGoodIndex: e.currentTarget.dataset.index
    })
  },
  goDetails1: function (e){
    this.setData({
      currentListIndex: e.currentTarget.dataset.index
    })
    wx.setStorageSync('viewingDetailsPageData', this.data.list.goods[this.data.currentListIndex].list[this.data.currentGoodIndex]);
    wx.navigateTo({
      url: '../details/details'
    })
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
