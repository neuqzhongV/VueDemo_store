<template>
<div>
  <h1>
    我是图片分享!
  </h1>
  <button @click="go(21)">风景摄影</button>
  <button @click="go(22)">明星美女</button>
  <button @click="go(23)">气质美女</button>
  <button @click="go(24)">性感美图</button>
  <div v-for="item in message">
    <img :src="imgDomain + item.img_url" alt="">
    <p>{{item.zhaiyao}}</p>
  </div>
</div>
</template>

<script>
import  axios from 'axios'
import config from '../config.js'
export  default{
  data(){
    return {
      imgDomain: config.imgDomain,
      message:[]
    }
  },
  methods:{
    go(id){
      this.$router.push({name:'pics',params:{youid:id}})
      console.log(this)
      this.getdata(id)
    },
    getdata(id){
       var youid = this.$route.params.youid;
       console.log(youid)
    // $router
    // father
    // 发请求获取图片信息
    axios.get(config.apiDomain + '/api/getimages/'+id)
    .then((res) => {
      console.log(res)
      this.message = res.data.message
     })
    }
  },

  // 如果这个组件一真在页面出现，没有消失过
  // 这个created就不会重新执行
  created(){
    // $router
    // father
    // 发请求获取图片信息
    axios.get(config.apiDomain + '/api/getimages/21')
    .then((res) => {
      this.message = res.data.message
    })
  }
}
</script>

<style>
</style>