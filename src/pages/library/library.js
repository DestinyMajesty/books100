// 获取全局应用程序实例对象
// const app = getApp()
const fetch = require('../../utils/fetch.js')
// 公用函数
// 获取已加入的书架
const getlibraryAddedData = (that) => {
  let params = {
    cmd: 'queryLibraryAdded'
  }
  fetch(null, null, params).then(
      (res) => {
        that.setData({
          LibraryAddedSum: res.detail.Sum,
          LibraryAddedList: res.detail.LibraryList
        })
      }
    )
}
// 获取已创建的书架
const getlibraryCreatedData = (that) => {
  let params = {
    cmd: 'queryLibraryCreated'
  }
  fetch(null, null, params).then(
      (res) => {
        that.setData({
          LibraryCreatedSum: res.detail.Sum,
          LibraryCreatedList: res.detail.LibraryList
        })
      }
    )
}
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    chooseLibraryAdded: true,
    LibraryAddedSum: '0',
    LibraryAddedList: [],
    LibraryCreatedSum: '0',
    LibraryCreatedList: [],
    item: {
      id: 0,
      img: '../../images/qrcode.png',
      time: '2016-09-15'
    }
  },
  // 各项点击事件函数
  // 我加入tab标签点击
  libraryAdded (event) {
    var that = this
    if (that.data.chooseLibraryAdded === false) {
      that.setData({
        chooseLibraryAdded: true
      })
    }
    getlibraryAddedData(that)
  },
   // 我创建tab标签点击
  libraryCreated (event) {
    var that = this
    if (that.data.chooseLibraryAdded === true) {
      that.setData({
        chooseLibraryAdded: false
      })
    }
    getlibraryCreatedData(that)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    var that = this
    // fetch().then(res => console.log(res))
    getlibraryAddedData(that)
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
