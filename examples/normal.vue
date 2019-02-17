<template>
  <div class="normal">
    <p v-for="item in 100" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'

export default {
  name: 'normal',
  created () {
    this.rememberScroll = new RememberScroll({
      pageKey: 'normal'
    })
  }
}
</script>
