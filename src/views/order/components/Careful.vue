<template>
  <!-- 送审 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>送审：李四先生房贷（66789）</h4>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm mt10"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="任务管理者：">
            <p/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间：">
            <p/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款产品：" prop="loanPro">
            <el-select v-model="ruleForm.loanPro" class="width200">
              <el-option label="贷款产品" value="1"/>
              <el-option label="贷款产品2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="送审渠道：">
            <p>送审渠道</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class=" mt20">
        <el-col :span="12">
          <el-form-item label="是否完成件：">
            <el-select v-model="ruleForm.isFinish" class="width200">
              <el-option label="是" value="1"/>
              <el-option label="否" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="送审时间：" prop="carefulDate">
            <el-date-picker
              v-model="ruleForm.carefulDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class=" mt10">
        <el-col :span="24">
          <el-form-item label="资料清单：">
            <el-checkbox-group v-model="ruleForm.checkList">
              <el-checkbox label="1">复选框 A</el-checkbox>
              <el-checkbox label="2">复选框 B</el-checkbox>
              <el-checkbox label="3">复选框 C</el-checkbox>
              <el-checkbox label="4">复选框 A</el-checkbox>
              <el-checkbox label="5">复选框 B</el-checkbox>
              <el-checkbox label="6">复选框 C</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class=" mt10">
        <el-col :span="22">
          <el-form-item label="备注：">
            <el-input v-model="ruleForm.remark" type="textarea" maxlength="100"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class=" mt10">
          <el-form-item label="上传证件：">
            <Upload/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
      <!-- <el-button v-if="disabled" type="primary" @click="disabled=false">更新</el-button> -->
    </p>
  </el-dialog>
</template>
<script>
import Upload from '@/views/components/Upload'
export default {
  components: {
    Upload
  },
  data() {
    return {
      box: false,
      disabled: true,
      ruleForm: {
        loanPro: '',
        checkList: [],
        isFinish: '1',
        carefulDate: '',
        remark: ''
      },
      rules: {
        loanPro: [{ required: true, message: '请选择贷款产品', trigger: 'change' }],
        carefulDate: [{ type: 'date', required: true, message: '请选择送审时间', trigger: 'change' }]
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
