import Storage from './utils/storage'
// import 'core-js/fn/object/assign'
// import 'core-js/fn/array/find'
// import 'core-js/fn/array/find-index'

class RememberScroll {
  constructor (options) {
    this.isSupport = Storage.isSupport()
    if (!this.isSupport) {
      return
    }
    this.timer = null

    let defaultOptions = {
      pageKey: '_page1', // 当前页面的唯一标识
      maxLength: 5
    }
    this.storageKey = '_rememberScroll'
    // 参数
    this.options = Object.assign({}, defaultOptions, options)

    // 缓存列表
    this.list = Storage.get(this.storageKey) || []
    this.initScroll()
    this.addScrollEvent()
  }
  /**
   * 初始化滚动条
   */
  initScroll () {
    if (this.list.length) {
      let currentPage = this.list.find(item => item.pageKey === this.options.pageKey)
      if (currentPage) {
        setTimeout(() => {
          this.scrollTo(0, currentPage.y)
        }, 0)

        // window.addEventListener(
        //   'pageshow',
        //   () => {
        //     this.scrollTo(0, currentPage.y)
        //   },
        //   false
        // )
      }
    }
  }
  scrollTo (x, y) {
    window.scrollTo(x, y)
  }
  updateScroll (y) {
    const data = {
      pageKey: this.options.pageKey,
      y
    }
    let index = this.list.findIndex(item => item.pageKey === data.pageKey)
    if (index >= 0) {
      this.list.splice(index, 1, data)
    } else {
      if (this.list.length >= this.options.maxLength) {
        this.list.shift()
      }
      this.list.push(data)
    }
    Storage.set(this.storageKey, this.list)
  }
  addScrollEvent () {
    window.addEventListener('beforeunload', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.updateScroll(scrollTop)
    })
  }
}

export default RememberScroll
