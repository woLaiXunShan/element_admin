<template>
  <!-- 费用调整 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3 class="mb20">补收费信息</h3>
      <el-row class="mb10">
        <el-col :span="8">客户姓名：张三丰</el-col>
        <el-col :span="8">客户电话：13700056547</el-col>
        <el-col :span="8">关联协议：13700056547</el-col>
      </el-row>
      <el-row class="mb30">
        <el-col :span="8">单据号码：自动生成</el-col>
        <el-col :span="8">创建时间：自动生成</el-col>
        <el-col :span="8">关联订单：1565151</el-col>
      </el-row>
      <h3 class="mb10">收费信息</h3>
      <el-form-item label="收费金额" prop="num">
        <el-input v-model="ruleForm.num" maxlength="13" style="width:350px;"/>
      </el-form-item>
      <el-form-item label="费用类型" prop="type">
        <el-select v-model="ruleForm.type" style="width:350px;" placeholder="请选择费用类型">
          <el-option label="费用类型" value="1"/>
          <el-option label="费用类型2" value="2"/>
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
        num: '',
        type: '1',
        remark: ''
      },
      rules: {
        num: [{ required: true, message: '请输入收费金额', trigger: 'blur' }],
        type: [{ required: true, message: '请选择费用类型', trigger: 'change' }]
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
