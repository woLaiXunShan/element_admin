<template>
  <!-- 公共基础弹窗 -->
  <el-dialog
    :visible.sync="box"
    :modal-append-to-body="false"
    width="500px">
    <slot/>
    <p style="text-align:center;">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary">确定</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false
    }
  },
  methods: {
    init() {
      // 初始化
      this.box = true
    }
  }
}
</script>
