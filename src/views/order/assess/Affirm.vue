<template>
  <!-- 评估-确认 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>评估：李四先生房贷（66789）</h4>
    <el-form label-width="120px" class="demo-ruleForm">
      <AssessMsg/>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评估单价：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评估总价：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="净值：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建成年代：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22">
          <el-form-item label="地址变更：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22">
          <el-form-item label="备注：">
            <p>中信银行</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="">
            <el-checkbox v-model="previews">预评已出</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="">
            <el-checkbox v-model="comment">正评已出</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="上传证件：（预评）" class="set_label">
            <Upload/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary" @click="box=false">完成</el-button>
      <el-button type="primary" @click="box=false">作废</el-button>
    </p>
  </el-dialog>
</template>
<script>
import AssessMsg from './AssessMsg'
import Upload from '@/views/components/Upload'
export default {
  components: {
    AssessMsg, Upload
  },
  data() {
    return {
      box: false,
      previews: false,
      comment: false
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
<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 0;
}
</style>
