<template>
    <div class="container">
        <div class="header">
            <van-search placeholder="想找什么" v-model="value"  />      
        </div>
        <div class="content">
            <router-view></router-view>
           
        </div>
        <div class="footer">
            <van-tabbar  v-model="active">
             <van-tabbar-item name="miste"  replace to="/base/miste" icon="setting-o">首页</van-tabbar-item>
             <van-tabbar-item name="setting"  replace to="/base/setting" icon="setting-o">分类</van-tabbar-item>
             <van-tabbar-item name="search"  replace to="/base/search" icon="search">订单</van-tabbar-item>
            <van-tabbar-item name="home"  replace to="/base/home" icon="home-o">购物车</van-tabbar-item>
            <van-tabbar-item name="friends"  replace to="/base/friends" icon="friends-o">我的</van-tabbar-item>     
            </van-tabbar>
        </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            value:"",
            active:"miste",
        }
    }
}
</script>


<style lang=""  scoped>
 html,body,#app,.container{
        height:100%;
        width: 100%;
        margin:0;
        padding:0; 
        
    }
    .container{
        display: flex;
        
        flex-direction: column;
       }
    .header{
        width:100%;
        height: 40px;
    }
   .content{
        flex:1;
        
        overflow: auto;
    }
.footer{
    width:100%;
    position:fixed;
    z-index: 9999;
}
</style>