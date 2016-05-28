<style lang="sass">
.ui-tips2
	position: relative;
	.tips
		position: relative
</style>
<script>
import Vue from 'vue'

function createTips (type, content, timeout, callback) {
  let tipsWrap = document.getElementById('tips_wrap')
  if (tipsWrap) tipsWrap.parentNode.removeChild(tipsWrap)

  let tpl = '<div class="tips" v-bind:class="type" v-if="show" transition="dia">' +
      '<i class="ui-icon-dl"></i>' +
      '<span>{{content}}</span>' +
    '</div>'

  let temp = document.createElement('div')
  temp.id = 'tips_wrap'
  temp.className = 'ui-tips2'
  temp.innerHTML = tpl
  document.body.appendChild(temp)

  new Vue({
    el: '#tips_wrap',
    data: {
      type: type,
      content: content || '',
      show: false
    },
    compiled () {
      this.show = true

      setTimeout(() => {
        this.show = false
      }, timeout - 200 || 1800)
      console.log(4)
      let tips = document.getElementById('tips_wrap')
      setTimeout(() => {
        if (tips && tips.parentNode) document.body.removeChild(tips)
        if (callback) callback()
      }, timeout || 2100)
    }
  })
}

export default {
  warn (content, timeout, callback) {
    createTips('warn', content, timeout, callback)
  },
  success (content, timeout, callback) {
    createTips('success', content, timeout, callback)
  },
  info (content, timeout, callback) {
    createTips('info', content, timeout, callback)
  }
}
</script>
