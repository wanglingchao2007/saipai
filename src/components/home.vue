<template>
    <div class="home">
       <van-nav-bar title="购物车" right-text="编辑" border="1" >  
        </van-nav-bar>
       
       <van-card
        num="1"
        price="2200.00"
        desc="现代连年有余 碧玉挂件"
        title="玉坠"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
        <div slot="tags">
            <van-tag plain type="danger">仅剩2件</van-tag>
            <van-tag plain type="danger">欲购从速</van-tag>
        </div>
        <div slot="footer">
            <van-button size="mini">-</van-button>
            <van-button size="mini">+</van-button>
        </div>
        </van-card>

     <van-submit-bar
            :price="2200.00*100"
            button-text="结算"
            @submit="onSubmit"
            class="ycdb"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <!-- <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span> -->
        </van-submit-bar>
    
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            checked:true
        }
    },
    methods:{
        onSubmit(){

        }
    }
}
</script>
<style  scoped>
 .ycdb{
     z-index: 10000;
     margin-bottom: 50px;
 }
</style>