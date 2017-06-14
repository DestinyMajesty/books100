const Promise = require('./bluebird')

/**
 * 抓取远端API的结构
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
let DEBUG = true
module.exports = function (api, path, params) {
  if (!DEBUG) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${api}/${path}`,
        data: Object.assign({}, params),
        header: { 'Content-Type': 'json' },
        success: resolve,
        fail: reject
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      if (params.cmd in MockData) {
        let res = MockData[params.cmd]
        console.log('很好', res)
        resolve(res)
      }
    })
  }
}


const MockData = {
  queryLibraryAdded: {
    cmd: 'queryLibraryAdded',
    detail: {
      Sum: 15,
      LibraryList: [
        {
          title: '诛仙',
          describe: '青云门镇派之宝，为一千三百年前青叶祖师得自于幻月洞府。材质非金非石，有强大的噬血之力，非修为达至太极玄清道太清境界以上且心智坚韧者不能使用。'
        },
        {
          title: '佣兵天下',
          describe: '小说以三个小佣兵的角度，描述了一场跨越诸个大陆、十多个国家的旷世大战，最后，战火甚至蔓延到神界。十五个信仰、风俗完全不同的国家，跨越21000年的故事背景，三位绝对主人公，14位主线人物，数百位人、龙、神、魔不同的角色。'
        },
        {
          title: '诛仙',
          describe: '青云门镇派之宝，为一千三百年前青叶祖师得自于幻月洞府。材质非金非石，有强大的噬血之力，非修为达至太极玄清道太清境界以上且心智坚韧者不能使用。'
        },
        {
          title: '诛仙',
          describe: '青云门镇派之宝，为一千三百年前青叶祖师得自于幻月洞府。材质非金非石，有强大的噬血之力，非修为达至太极玄清道太清境界以上且心智坚韧者不能使用。'
        },
        {
          title: '诛仙',
          describe: '青云门镇派之宝，为一千三百年前青叶祖师得自于幻月洞府。材质非金非石，有强大的噬血之力，非修为达至太极玄清道太清境界以上且心智坚韧者不能使用。'
        }
      ]
    }
  },
  queryLibraryCreated: {
    cmd: 'queryLibraryCreated',
    detail: {
      Sum: 5,
      LibraryList: [
        {
          title: '诛仙',
          describe: '青云门镇派之宝，为一千三百年前青叶祖师得自于幻月洞府。材质非金非石，有强大的噬血之力，非修为达至太极玄清道太清境界以上且心智坚韧者不能使用。'
        },
        {
          title: '鹧鸪天·桂花',
          describe: '暗淡轻黄体性柔。情疏迹远只香留。何须浅碧深红色，自是花中第一流。梅定妒，菊应羞。画阑开处冠中秋。骚人可煞无情思，何事当年不见收。'
        },
        {
          title: '如梦令·昨夜雨疏风骤',
          describe: '昨夜雨疏风骤，浓睡不消残酒，试问卷帘人，却道海棠依旧。知否，知否，应是绿肥红瘦。'
        },
      ]
    }
  }
}
