<style>

</style>

<template>
<div class="tips-demo">
  tips
</div>
</template>

<script>
import Tips from '../components/tips'

export default {
  data () {
    return {
    }
  },
  ready () {
    Tips.info('123', 3000000)
    window.alert(1)
    console.log(Tips)
  },
  methods: {
  }
}
</script>
