
export function configRouter (router) {
  router.map({
    '/': {
      component: require('../views/demo.vue'),
      title: 'demo'
    },
    '/demo': {
      component: require('../views/demo.vue'),
      title: 'demo'
    },
    '/tips': {
      component: require('../views/Tips'),
      title: 'tips'
    },
    '*': {
      component: require('../views/NotFound'),
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
