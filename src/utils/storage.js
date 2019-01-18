const Storage = {
  isSupport () {
    if (window.localStorage) {
      return true
    } else {
      console.error('Your browser cannot support localStorage!')
      return false
    }
  },
  get (key) {
    if (!this.isSupport) {
      return
    }
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
  },
  remove (key) {
    if (!this.isSupport) {
      return
    }
    window.localStorage.removeItem(key)
  },
  set (key, data) {
    if (!this.isSupport) {
      return
    }
    const newData = JSON.stringify(data)
    window.localStorage.setItem(key, newData)
  }
}

export default Storage
