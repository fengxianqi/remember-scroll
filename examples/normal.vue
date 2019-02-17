<template>
  <div class="about">
    <p v-for="item in 100" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import RememberScroll from 'remember-scroll'

export default {
  name: 'about',
  created () {
    this.rememberScroll = new RememberScroll({
      pageKey: 'about'
    })
  }
}
</script>
