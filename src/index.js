import Storage from './utils/storage'
import throttle from './utils/throttle'
// import 'core-js/fn/object/assign'
// import 'core-js/fn/array/find'
// import 'core-js/fn/array/find-index'
class RememberScroll {
  constructor (options = {}) {
    this.isSupport = Storage.isSupport()
    // if browser don't support localStorage, do nothing
    if (!this.isSupport) {
      return
    }
    this.timer = null

    let defaultOptions = {
      pageKey: '_page1', // 当前页面的唯一标识
      maxLength: 5
    }
    this.storageKey = '__rememberScroll__'


    this._eventHandler = null

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
      let index = this.list.findIndex(item => item.pageKey === this.options.pageKey)
      if (index >= 0) {
        setTimeout(() => {
          this.scrollTo(0, this.list[index].y)
          this._moveToHead(index)
        }, 0)
      }
    }
  }
  scrollTo (x, y) {
    window.scrollTo(x, y)
  }
  updateScroll () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const data = {
      pageKey: this.options.pageKey,
      y: scrollTop
    }
    let index = this.list.findIndex(item => item.pageKey === data.pageKey)
    if (index >= 0) {
      this.list.splice(index, 1)
      this.list.push(data)
    } else {
      if (this.list.length >= this.options.maxLength) {
        this.list.shift()
      }
      this.list.push(data)
    }
    Storage.set(this.storageKey, this.list)
  }
  addScrollEvent () {
    this._eventHandler = throttle(this.updateScroll.bind(this), 100)
    window.addEventListener('scroll', this._eventHandler)
  }

  // 将当前的一项移到最前面，LRU
  _moveToHead (index){
    // list has no item,
    // cannot find item,
    // item has been at the end
    if (!this.list.length || !this.list[index] || index === this.list.length - 1) {
      return
    }
    const item = this.list.splice(index, 1)
    this.list.push(item)
  }

  destory (){
    window.removeEventListener('scroll', this._eventHandler)
  }
}

export default RememberScroll
