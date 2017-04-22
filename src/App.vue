<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>
        <div class="content">
            <router-view></router-view>
        </div>

        <mt-tabbar v-model='isSelect'>
            <mt-tab-item @click="go" id="home">
                <img slot="icon" src="../statics/images/menu3.png"> 首页
            </mt-tab-item>
            <mt-tab-item id="vip">
                <img slot="icon" src="../statics/images/menu4.png"> 会员
            </mt-tab-item>
            <mt-tab-item id="cart">
                <img slot="icon" src="../statics/images/menu5.png"> 购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../statics/images/menu6.png"> 搜索
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<style scope>
    .mint-tabbar {
        position: fixed !important;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .content {
        margin-top: 40px;
    }
</style>
<script>
    export default {
        data() {
            return {
                isSelect: ''
            }
        },
        methods: {
            go: function () {
                console.log(123)
                // 改变url中锚点部分
                this.$router.push({
                    name: 'home'
                })
                // location.hash = '#/home'
            }
        },

        created() {
            window._tmp = this
        },

        updated() {
            this.$router.push({
                name: this.isSelect
            })
        }

    }
</script>