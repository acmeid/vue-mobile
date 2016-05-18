<style>
.go{
  font-size: 14px;
}
.banner{
  width: 100%;
}

.banner img{
  width: 100%;
}
.x-header{
  background: #eee;
  color: #555;
}
.x-header .x-header-title, .x-header h1{
  color: #555;
}
.x-header .x-header-left a, .x-header .x-header-left button, .x-header .x-header-right a, .x-header .x-header-right button{
  color: #555;
}

.x-header .x-header-left .x-header-back:before{
  border: 1px solid #555;
  border-width: 1px 0 0 1px;
}

.x-header .x-header-title, .x-header h1{
  height: 35px;
  line-height: 35px;
}

/*分类*/
.category {
  background: #f5f8fa;
}

.category .title{
  font-size: 16px;
}

.category .content {
  padding-bottom: 10px;
  /*margin-top: 10px;*/
}

.category .c-item {
  background: #fff;
  margin-bottom: 10px;
  padding: 5px 10px;
}

.category .c-item .tit {
  line-height: 30px;
  padding-left: 10px;
  position: relative;
  font-size: 14px;
}

.category .c-item .tit:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 6px;
  width: 4px;
  height: 16px;
  background: #00afec;
  color: #00afec;
}

.category .c-item .list {
  overflow: hidden;
}

.category .c-item .list > div {
  line-height: 0;
  width: 50%;
  overflow: hidden;
  float: left;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.category .c-item .list > div:nth-child(odd) {
  padding-right: 3px;
}

.category .c-item .list > div:nth-child(even) {
  padding-left: 3px;
}

.category .c-item .list > div img {
  width: 100%;
}

.category .b-cate {
  color: #00afec;
}

.category .b-cate .icon {
  /*background-image: url("/static/assets/images/mall/bar-catalog-on@2x.png");*/
}
</style>

<template>
<div class="home">
  <x-header 
  :left-options="{showBack: true, preventGoBack: true}"
  :right-options="{showMore: true}" 
  @on-click-more="showMenus = true">
    商品分类
  </x-header>
  <actionsheet :menus="menus" :show.sync="showMenus" :cancel-text="'取消'" show-cancel ></actionsheet>
  <!-- <div v-link="{ path: '/profile', exact: true}" class="go">去个人中心</div> -->

  <div class="page-group"><div class="page page-current category" id="category">

<div class="content native-scroll"><div class="c-item"> <div class="tit" data-title="轻松优选">轻松优选</div>  </div> <div class="c-item"> <div class="tit" data-title="轻松智选">轻松智选</div> <div class="list">  <div> <a href="/static/mall/products.html?id=9"> <img src="http://pic.uyess.com/product/8a320ef0a92c9bc1cfd37e3275ec707c.png" alt=""> </a> </div>  <div> <a href="/static/mall/products.html?id=11"> <img src="http://pic.uyess.com/product/146c5eb2ad9dceddcb2a6982e5c122b5.png" alt=""> </a> </div>  </div> </div></div></div></div>

  <div v-for="item in banner" class="banner"><img v-bind:src="item.image_url" alt=""></div>
</div>
</template>

<script>
import api from '../api'
import XHeader from 'vux/components/x-header'
import Actionsheet from 'vux/components/actionsheet'

export default {
  components: { XHeader, Actionsheet },
  data () {
    return {
      menus: {
        menu1: '从相机',
        menu2: '从相册'
      },
      showMenus: false,
      banner: []
    }
  },
  ready () {
    api.getMallBanner.get({cityId: 1}).then(res => {
      this.banner = res.data.list
    })
  },
  methods: {

  }
}
</script>
