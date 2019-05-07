<template>
  <!-- 评估-录入结果 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>评估：李四先生房贷（66789）</h4>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <AssessMsg/>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评估单价：" prop="price">
            <el-input v-model="ruleForm.price" :disabled="disabled" placeholder="请输入评估单价" class="width200 mr10"/>元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评估总价：" prop="priceTotal">
            <el-input v-model="ruleForm.priceTotal" :disabled="disabled" placeholder="请输入评估总价" class="width200 mr10"/>元
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mt20">
        <el-col :span="12">
          <el-form-item label="净值：" prop="worth">
            <el-input v-model="ruleForm.worth" :disabled="disabled" placeholder="请输入净值" class="width200 mr10"/>万元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建成年代：" prop="year">
            <el-date-picker
              v-model="ruleForm.year"
              :disabled="disabled"
              type="year"
              value-format="yyyy"
              class="width200"
              placeholder="选择年"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mt20">
        <el-col :span="22">
          <el-form-item label="备注：">
            <el-input v-model="ruleForm.remark" :disabled="disabled" type="textarea" maxlength="100"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button v-if="!disabled" type="primary" @click="submitForm('ruleForm')">保存</el-button>
      <el-button v-if="disabled" type="primary" @click="disabled=false">更新</el-button>
    </p>
  </el-dialog>
</template>
<script>
import AssessMsg from './AssessMsg'
export default {
  components: {
    AssessMsg
  },
  data() {
    return {
      box: false,
      disabled: true,
      ruleForm: {
        price: '',
        priceTotal: '',
        worth: '',
        year: '',
        remark: ''
      },
      rules: {
        price: [{ required: true, message: '请输入评估单价', trigger: 'blur' }],
        priceTotal: [{ required: true, message: '请输入评估总价', trigger: 'blur' }],
        worth: [{ required: true, message: '请输入净值', trigger: 'blur' }],
        year: [{ required: true, message: '请选择建成年代', trigger: 'change' }]
      }
    }
  },
  methods: {
    init() { // 初始化
      this.box = true
      this.disabled = true
      setTimeout(() => {
        this.$refs['ruleForm'].resetFields()
      }, 10)
    },
    submitForm(formName) { // 提交表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item{
  margin-bottom: 0;
}
</style>
