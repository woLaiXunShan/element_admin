<template>
  <!-- 新增贷款人 -->
  <el-dialog :visible.sync="box" append-to-body width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="类别" prop="type">
            <el-select v-model="ruleForm.type" style="width:250px;" placeholder="请选择类别">
              <el-option label="主贷人" value="1"/>
              <el-option label="从贷人" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" maxlength="20" style="width:250px;"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="民族" prop="nation">
            <el-select v-model="ruleForm.nation" style="width:250px;" placeholder="请选择民族">
              <el-option label="区域一" value="shanghai"/>
              <el-option label="区域二" value="beijing"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证" prop="card">
            <el-input v-model="ruleForm.card" maxlength="18" style="width:250px;"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" maxlength="11" style="width:250px;"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="与客户关系" prop="relation">
            <el-input v-model="ruleForm.relation" maxlength="20" style="width:250px;"/>
          </el-form-item>
        </el-col>
      </el-row>
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
        name: '',
        nation: '',
        card: '',
        phone: '',
        relation: ''
      },
      rules: {
        type: [{ required: true, message: '请选择类别', trigger: 'change' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        nation: [{ required: true, message: '请选择民族', trigger: 'change' }],
        card: [{ required: true, message: '请输入身份证', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        relation: [{ required: true, message: '请输入与客户关系', trigger: 'blur' }]
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
