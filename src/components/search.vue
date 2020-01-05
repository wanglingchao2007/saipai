<template>
    <div class="searcher">
        <van-nav-bar title="我的订单" left-text="返回" border="true" left-arrow>
          <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-tabs v-model="active">
        <van-tab title="全部">内容 1</van-tab>
        <van-tab title="待付款">内容 2</van-tab>
        <van-tab title="待发货">内容 3</van-tab>
        <van-tab title="待收货">内容 4</van-tab>
        <van-tab title="待评价">内容 5</van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:""
        }
    }
}
</script>

<style lang="" scoped>
 
</style>