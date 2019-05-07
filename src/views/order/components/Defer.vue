<template>
  <!-- 暂缓 v-dialogDrag -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="暂缓截至" prop="date">
        <el-date-picker
          v-model="ruleForm.date"
          type="date"
           :picker-options="pickerOptions"
          placeholder="选择暂缓截至日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="暂缓原因" prop="cause">
        <el-input v-model="ruleForm.cause" maxlength="100" type="textarea" style="width:350px;"/>
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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      },
      ruleForm: {
        date: '',
        cause: ''
      },
      rules: {
        date: [{ type: 'date', required: true, message: '请选择暂缓截至日期', trigger: 'change' }],
        cause: [{ required: true, message: '请输入暂缓原因', trigger: 'blur' }]
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
