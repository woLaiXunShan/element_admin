<template>
  <!-- 退件 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="退件原因" prop="type">
        <el-select v-model="ruleForm.type" style="width:350px;" placeholder="请选择退件原因">
          <el-option label="退件" value="1"/>
          <el-option label="退件2" value="2"/>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="ruleForm.remark" maxlength="100" type="textarea" style="width:350px;"/>
      </el-form-item>
    </el-form>
    <p style="text-align: center;" class="mt20">
      <el-button style="width:120px;" type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      ruleForm: {
        type: '1',
        remark: ''
      },
      rules: {
        type: [{ required: true, message: '请选择退件原因', trigger: 'change' }]
      }
    }
  },
  methods: {
    init() {
      this.box = true
      setTimeout(() => {
        this.$refs['ruleForm'].resetFields()
      }, 10)
    },
    submitForm(formName) {
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
