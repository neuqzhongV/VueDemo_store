<template>
    <div>
        <h1>我是新闻组件</h1>
        <ul class="newsul">
            <li @click='go(item.id)' v-for="item in message">
                <div class="left">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="right">
                    <h4>{{item.title}}</h4>
                </div>
            </li>
        </ul>
    </div>
</template>
<style>
.newsul, .newsul li{
    margin: 0;
    padding: 0;
}
.newsul {
    padding-bottom: 50px;
}
.newsul li {
    display: flex;
    list-style: none;
}
.left {
    width: 25%;
}
.left img {
    width: 80%;
}
h4 {
    margin-top: 0;
}
.rigth {
    flex:1;
}
</style>
<script>
import axios from 'axios'
import config from '../config.js'
export default {
    data(){
        return {
            message: [],
        }
    },
    methods: {
        go(id){
            this.$router.push({name:'detail',params:{myid:id}})
        }
    },
    created(){
        axios.get(config.apiDomain+"/api/getnewslist")
        .then((res)=>{
            this.message = res.data.message
        })
    }
}
</script>