<template>
  <div>
    <img @click="getImgWidth('http://img.cdn.aliyun.dcloud.net.cn/stream/plugin_screens/ea958ec0-1ef2-11e9-b492-f32062ee3f56_0.png?v=1553485858')" v-for="item in 5" :key="item" src="~@img/ke_hu.png" class="img" alt="">
    <!-- <el-dialog
      :visible.sync="box"
      width="1200px">
      <img :src="previewUrl" class="previewImg" alt="">
    </el-dialog> -->
    <div @click="box=false" v-show="box" :class="{'el-dialog__wrapper': box}" class="box">
      <img :src="previewUrl" :style="`transform:rotate(${current*90}deg);`" class="previewImg" alt="">
      <p>
        <el-button @click.stop="current--" type="success" icon="el-icon-refresh-left" circle></el-button>
        <el-button @click.stop="current++" type="success" icon="el-icon-refresh-right" circle></el-button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      previewUrl: '',
      current: 0
    }
  },
  methods: {
    getImgWidth (url) { // 获取图片原始大小
      // let image = new Image()
      // image.src = src
      // let naturalWidth = image.width
      this.box = true
      this.current = 0
      this.previewUrl = url
    }
  }
}
</script>
<style lang="scss" scoped>
.img{
  width: 150px;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.box{
  z-index: 9999;
  background-color: rgba(0,0,0,0.4);
  text-align: center;
  p{
    position: absolute;
    bottom: 10px;
    left: calc(50% - 50px);
  }
}
.previewImg{
  margin: auto;
  max-height: 100vh;
  max-width: 100%;
}
</style>
