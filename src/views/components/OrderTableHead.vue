<template>
  <!-- 配置订单&&协议表头 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" width="300px">
    <p class="mb20">设置：快捷查询</p>
    <ul class="list_box">
      <li v-for="item in list" :class="{'on': headList.indexOf(item)!==-1}" :key="item" @click="selectTableHead(item)">{{ item }}</li>
    </ul>
    <p class="mt20" style="text-align:center;">
      <el-button type="primary" style="width:150px;">保存</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      list: ['主题', '协议号', '产品', '金额', '状态', '服务人员', '权证人员'],
      headList: [],
      selectedOptions: []
    }
  },
  methods: {
    init() { // 初始化
      this.box = true
      this.selectedOptions = []
    },
    selectTableHead(val) { // 配置表头
      if (this.headList.indexOf(val) === -1) {
        this.headList.push(val)
      } else {
        const len = this.headList.indexOf(val)
        this.headList.splice(len, 1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list_box{
  height: 200px;
  overflow: auto;
  li{
    line-height: 30px;
    border-bottom: 1px solid #dce1e6;
    padding-left: 10px;
    cursor: pointer;
    &.on{
      background-color: #409EFF;
      color: #fff;
    }
  }
}
/*滚动条样式*/
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
