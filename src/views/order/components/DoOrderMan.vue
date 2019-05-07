<template>
  <!-- 做单人员 -->
  <el-dialog
    :visible.sync="box"
    :modal-append-to-body="false"
    width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="跟单人员" prop="documentary">
            <el-select v-model="ruleForm.documentary" filterable style="width:200px;" placeholder="请选择跟单人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评估" prop="assess">
            <el-select v-model="ruleForm.assess" filterable style="width:200px;" placeholder="请选择评估人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="送审" prop="send">
            <el-select v-model="ruleForm.send" filterable style="width:200px;" placeholder="请选择送审人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="过件" prop="piece">
            <el-select v-model="ruleForm.piece" filterable style="width:200px;" placeholder="请选择过件人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="抵押" prop="pledge">
            <el-select v-model="ruleForm.pledge" filterable style="width:200px;" placeholder="请选择抵押人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款" prop="loan">
            <el-select v-model="ruleForm.loan" filterable style="width:200px;" placeholder="请选择放款人员">
              <el-option label="退件" value="1"/>
              <el-option label="退件2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align: center;">
      <el-button style="width:120px;" type="primary" @click="submitForm('ruleForm')">保存</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      ruleForm: {
        documentary: '',
        assess: '',
        send: '',
        piece: '',
        pledge: '',
        loan: ''
      },
      rules: {
        documentary: [{ required: true, message: '请选择跟单人员', trigger: 'change' }],
        assess: [{ required: true, message: '请选择评估人员', trigger: 'change' }],
        send: [{ required: true, message: '请选择送审人员', trigger: 'change' }],
        piece: [{ required: true, message: '请选择过件人员', trigger: 'change' }],
        pledge: [{ required: true, message: '请选择抵押人员', trigger: 'change' }],
        loan: [{ required: true, message: '请选择放款人员', trigger: 'change' }]
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
