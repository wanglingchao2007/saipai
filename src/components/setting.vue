<template>
    <div class="classify">
        <p>分类</p><hr>
        <div class="goodsclassify">
            <div class="leftlist">
                <van-sidebar v-model="activeKey">
                <van-sidebar-item title="中国书画" />
                <van-sidebar-item title="油画雕塑" />
                <van-sidebar-item title="版画纸本" />
                <van-sidebar-item title="拍卖" />
                <van-sidebar-item title="文玩杂项" />
                <van-sidebar-item title="当代工艺" />
                <van-sidebar-item title="文创衍生" />
                <van-sidebar-item title="海外拾珍" />
                <van-sidebar-item title="软杂" />
                </van-sidebar>
            </div>
            <div class="rightgoods">
                <van-index-bar :index-list="indexList">
                    <van-index-anchor index="1">中国书画</van-index-anchor>
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                </van-index-bar>
                   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      activeKey: 0,
      indexList: [1]
    };
  }
}
</script>
<style lang="" scoped="">
.classify{
    width:100%;
    margin-top: 10px;
}
    .classify p{
        font-size: 20px;
        text-align: center;
    }  
    .goodsclassify{
        display: flex;
    }
    .leftlist{
        height:100vh;       
        
    }
    .rightgoods{
        height:100vh;
        flex:1;
        overflow-y: scroll;
    }
</style>