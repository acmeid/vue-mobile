<style>

</style>

<template>
<div class="profile">
  <div v-link="{ path: '/home', exact: true }">去首页</div>
</div>
</template>

<script>
import XHeader from 'vux/components/x-header'
import Actionsheet from 'vux/components/actionsheet'

export default {
  components: { XHeader, Actionsheet },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>
