<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for='item in list'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div>
      <ul class="myul">
        <li @click="go('news')">
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>新闻</p>
        </li>
        <li @click="go('pics')">
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>图片分享</p>
        </li>
        <li @click="go('goods')">
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>商品</p>
        </li>
        <li>
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>新闻</p>
        </li>
        <li>
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>新闻</p>
        </li>
        <li>
          <!-- 路径就按当前文件所在位置来写 -->
          <img src="../../statics/images/menu5.png" alt="">
          <p>新闻</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
 
  export default {
    data() {
      return {
        list: [{
          url: 'http://www.itcast.cn/subject/phoneweb/index.html',
          img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
        }, {
          url: 'http://www.itcast.cn/subject/phoneweb/index.html',
          img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
        }]
      }
    },
    methods:{
      go(arg){
        this.$router.push({name:arg})
      }

    }
  }
</script>

<style>
  .myul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .myul, .myul li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .myul li {
    width: 33.33%;
  }

  .myul li img {
    width: 60%;
  }

  .mint-swipe {
    height: 200px !important;
  }

  .mint-swipe-item img {
    width: 100% !important;
  }
</style>