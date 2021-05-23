<template>
  <div class="home">
    <p v-for="item in ele" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'
export default {
  name: 'home',
  data () {
    return {
      ele: [],
      rememberScroll: null
    }
  },
  created () {
    // 模拟异步获取数据，这种情况要在异步方法内部初始化RememberScroll
    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        this.ele.push(i)
      }
      // 获取数据后再初始化
      this.rememberScroll = new RememberScroll({
        pageKey: 'home'
      })
    }, 2000)
  },
  beforeDestroy () {
    // must remove EventListener
    this.rememberScroll.destory()
  }
}
</script>
