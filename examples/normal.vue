<template>
  <div class="normal">
    <p v-for="item in 100" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'

export default {
  name: 'normal',
  mounted () {
    this.rememberScroll = new RememberScroll({
      pageKey: location.pathname // 使用url路径做key、
    })
  },
  beforeDestroy () {
    // must remove EventListener
    this.rememberScroll.destory()
  }
}
</script>
