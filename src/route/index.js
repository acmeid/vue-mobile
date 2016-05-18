
export function configRouter (router) {
  router.map({
    '/': {
      component: require('../views/Home.vue'),
      title: '首页'
    },
    '/home': {
      component: require('../views/Home.vue'),
      title: '首页'
    },
    '/profile': {
      component: function (resolve) {
        require(['../views/Profile.vue'], resolve)
      },
      title: '个人中心'
    },
    // '/demo': {
    //   component: require('../demos/Demo.vue'),
    //   title: 'demo'
    // },
    // '/component/icon': {
    //   component: require('../demos/Icon')
    // },
    // '/component/switch': {
    //   component: require('../demos/Switch')
    // },
    // '/component/radio': {
    //   component: require('../demos/Radio')
    // },
    // '/component/input': {
    //   component: require('../demos/Input')
    // },
    // '/component/number': {
    //   component: require('../demos/Number')
    // },
    // '/component/checklist': {
    //   component: require('../demos/Checklist')
    // },
    // '/component/selector': {
    //   component: require('../demos/Selector')
    // },
    // '/component/tip': {
    //   component: require('../demos/Tip')
    // },
    // '/component/button': {
    //   component: require('../demos/Button')
    // },
    // '/component/textarea': {
    //   component: require('../demos/Textarea')
    // },
    // '/component/flexbox': {
    //   component: require('../demos/Flexbox')
    // },
    // '/component/tab': {
    //   component: require('../demos/Tab')
    // },
    // '/component/swiper': {
    //   component: require('../demos/Swiper')
    // },
    // '/component/sticky': {
    //   component: require('../demos/Sticky')
    // },
    // '/component/picker': {
    //   component: require('../demos/Picker')
    // },
    // '/component/datetime': {
    //   component: require('../demos/Datetime')
    // },
    // '/component/popup': {
    //   component: require('../demos/Popup')
    // },
    // '/component/range': {
    //   component: require('../demos/Range')
    // },
    // '/component/actionsheet': {
    //   component: require('../demos/Actionsheet')
    // },
    // '/component/clocker': {
    //   component: require('../demos/Clocker')
    // },
    // '/component/rater': {
    //   component: require('../demos/Rater')
    // },
    // '/component/popup-picker': {
    //   component: require('../demos/Popup-picker')
    // },
    // // '/component/address': {
    // //   component: require('../demos/Address')
    // // },
    // '/component/toast': {
    //   component: require('../demos/Toast')
    // },
    // '/component/loading': {
    //   component: require('../demos/Loading')
    // },
    // '/component/alert': {
    //   component: require('../demos/Alert')
    // },
    // '/component/confirm': {
    //   component: require('../demos/Confirm')
    // },
    // '/component/progress': {
    //   component: require('../demos/Progress')
    // },
    // '/component/x-img': {
    //   component: require('../demos/XImg')
    // },
    // '/component/1px': {
    //   component: require('../demos/1px')
    // },
    // '/component/orientation': {
    //   component: require('../demos/Orientation')
    // },
    // '/component/shake': {
    //   component: require('../demos/Shake')
    // },
    // '/component/cell': {
    //   component: require('../demos/Cell')
    // },
    // '/component/emotion': {
    //   component: require('../demos/Wechat-emotion')
    // },
    // '/component/search': {
    //   component: require('../demos/Search')
    // },
    // '/project/donate': {
    //   component: require('../demos/Donate')
    // },
    // '/project/thanks': {
    //   component: require('../demos/Thanks')
    // },
    // '/component/spinner': {
    //   component: require('../demos/Spinner')
    // },
    // '/component/calendar': {
    //   component: require('../demos/Calendar')
    // },
    // '/component/circle': {
    //   component: require('../demos/Circle')
    // },
    // '/component/countup': {
    //   component: require('../demos/Countup')
    // },
    // '/component/color-picker': {
    //   component: require('../demos/Color-picker')
    // },
    // '/component/blur': {
    //   component: require('../demos/Blur')
    // },
    // '/component/scroller': {
    //   component: require('../demos/Scroller')
    // },
    // '/component/comment': {
    //   component: require('../demos/Comment')
    // },
    // '/component/pulldown': {
    //   component: require('../demos/Pulldown')
    // },
    // '/component/pullup': {
    //   component: require('../demos/Pullup')
    // },
    // '/component/masker': {
    //   component: require('../demos/Masker')
    // },
    // '/component/countdown': {
    //   component: require('../demos/Countdown')
    // },
    // '/component/inview': {
    //   component: require('../demos/Inview')
    // },
    // '/component/x-header': {
    //   component: require('../demos/X-header')
    // },
    // '/component/inline-calendar': {
    //   component: require('../demos/InlineCalendar')
    // },
    // '/component/checker': {
    //   component: require('../demos/Checker')
    // },
    // '/component/scroller/full': {
    //   component: require('../demos/ScrollerFull')
    // },
    // '/component/number-roller': {
    //   component: require('../demos/NumberRoller')
    // },
    // '/component/timeline': {
    //   component: require('../demos/Timeline')
    // },
    // '/component/tabbar': {
    //   component: require('../demos/Tabbar')
    // },
    // '/component/panel': {
    //   component: require('../demos/Panel')
    // },
    // '/component/reddot': {
    //   component: require('../demos/Reddot')
    // },
    // '/component/button-tab': {
    //   component: require('../demos/ButtonTab')
    // },
    // '/component/scroller-swiper': {
    //   component: require('../demos/ScrollerSwiper')
    // },
    '*': {
      component: require('../views/NotFound.vue'),
      title: '页面找不到'
    }
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    // let path = transition.to.path
    transition.next()
  })
}
