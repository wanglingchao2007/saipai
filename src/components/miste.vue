<template>
  <div class="miste">
    <div class="nav">
      <ul>
        <li v-for="(v,i) in na" :key="i">
          <span>{{v}}</span>
        </li>
      </ul>
    </div>
    <!-- 轮播 -->
    <div class="lb">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="flzx">
      <div class="wz">
        <span>——福利专享——</span>
      </div>
      <div class="students">
        <div class="universty">
          <img :src="fuli[0]" alt />
          
        </div>
        <div class="friends">
          <img :src="fuli[1]" alt />
          <img :src="fuli[2]" alt />
           
        </div>
      </div>
    </div>
    <!-- 特别推荐 -->
    <div class="special">
      <div class="specialOne">
        <span>特别推荐</span>
        <span>更多></span>
      </div>
      <div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(v,i) in tt" :key="i">
            <van-image :src="v" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  <!-- 人气推荐 -->
    <div class="human">
      <div class="humanOne">
        <span>人气推荐</span>
      </div>
      <div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(v,i) in hu" :key="i">
            <van-image :src="v.img" />
            <p>
               {{v.text}}
              <span>{{v.price}}</span>
            </p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
<!-- 最新上架 -->
    <div class="news">
      <div class="newsOne">
        <span>最新上架</span>
      </div>
      <div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(v,i) in ne" :key="i">
            <van-image :src="v.img" />
            <p>
              {{v.text}}
              <span>{{v.price}}</span>
            </p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 1000 * 60 * 60 * 60,
      images: [],
      fuli:[],
      tt:[],
      hu:[],
      ne:[],
      na:[],
    };
  },
  mounted() {
    this.getClassifyd();
    this.getClassifyl();
    this.getClassifyf();
    this.getClassifyt();
    this.getClassifyh();
    this.getClassifyn();
  },
  methods: {
    //导航接口
     getClassifyd() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifynav`).then(res => {
        console.log("导航:",res.data.info[0].nav);
        if (res.data.code == 200) {
          this.na = res.data.info[0].nav;
        } else {
          alert("出错了");
        }
      });
    },
    //轮播接口
    getClassifyl() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifylb`).then(res => {
        console.log("广告轮播：",res.data.info[0].lb)
        if (res.data.code == 200) {
          this.images = res.data.info[0].lb;
        } else {
          alert("出错了");
        }
      });
    },
    //福利专享接口
     getClassifyf() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifyfl`).then(res => {
        console.log("福利专享：",res.data.info[0].fuli);
        if (res.data.code == 200) {
          this.fuli = res.data.info[0].fuli;
        } else {
          alert("出错了");
        }
      });
    },
    //特别推荐接口
     getClassifyt() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifytt`).then(res => {
        console.log("特别推荐：",res.data.info[0].tt);
        if (res.data.code == 200) {
          this.tt = res.data.info[0].tt;
        } else {
          alert("出错了");
        }
      });
    },
    //人气推荐接口
    getClassifyh() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifyhu`).then(res => {
        console.log("人气推荐:",res.data.info[0].hm);
        if (res.data.code == 200) {
          this.hu = res.data.info[0].hm;
        } else {
          alert("出错了");
        }
      });
    },
    //最新上架
     getClassifyn() {
      this.axios.get(`http://127.0.0.1:3000/misteclassifynew`).then(res => {
        console.log("最新上架:",res.data.info[0].new);
        if (res.data.code == 200) {
          this.ne = res.data.info[0].new;
        } else {
          alert("出错了");
        }
      });
    },
  }
};
</script>
<style lang="" scoped>
.nav {
  height: 50px;
  width: 100%;
  display: flex;
  margin: 10px auto;
}
.nav ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
li {
  width: 22%;
  text-align: center;
  /* border-bottom:1px solid; */
}
li span:hover {
  border-bottom: 1px solid red;
}
.lb {
  width: 100%;
  height: 150px;
}
.lb img {
  width: 100%;
  height: 150px;
  border: 1px solid #999;
}
.flzx {
  width: 90%;
  height: 240px;
  border: 1px solid #666;
  margin: 10px auto;
}
.wz {
  width: 100%;
  height: 10%;
  text-align: center;
}
.students {
  width: 100%;
  height: 90%;
  display: flex;
}

.universty {
  width: 50%;
  height: 100%;
}
.universty img {
  width: 99%;
  height: 100%;
}
.friends {
  width: 50%;
  height: 100%;
}
.friends img {
  width: 100%;
  height: 49%;
}

.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
.limitheader {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.limitheader span {
  font-size: 22px;
}
.news p span {
  color: red;
}
.human p span {
  color: red;
}
.newsOne span {
  font-size: 18px;
}
.humanOne span {
  font-size: 18px;
}
.specialOne {
  display: flex;
  justify-content: space-between;
}
.specialOne span {
  font-size: 18px;
}
</style>