<template>
  <!-- 评估-审核 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>评估：李四先生房贷（66789）</h4>
    <el-form
      label-width="120px"
      class="demo-ruleForm"
    >
      <AssessMsg/>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注：">
            <p>客户一般上午在家，请看房前电话预约~</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="服务部门&人员：">
            <p>1-2 王五</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="权证部门&人员：">
            <p>2-1 马六</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="">
            <Voucher/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">驳回</el-button>
      <el-button type="primary" @click="box=false">审核通过</el-button>
    </p>
  </el-dialog>
</template>
<script>
import Voucher from '@/views/components/Voucher'
import AssessMsg from './AssessMsg'
export default {
  components: {
    Voucher, AssessMsg
  },
  data() {
    return {
      box: false
    }
  },
  methods: {
    init() { // 初始化
      this.box = true
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item{
  margin-bottom: 0;
}
</style>
