<template>
  <!-- 过件 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>过件：李四先生房贷（66789）</h4>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="140px"
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
            <el-select v-model="ruleForm.loanPro" :disabled="disabled" class="width200">
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
      <el-row class="mt20">
        <el-col :span="12">
          <el-form-item label="过件额度：" prop="limit">
            <el-input v-model="ruleForm.limit" :disabled="disabled" placeholder="请输入过件额度" class="width200 mr10"/>元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="过件利率：" prop="rate">
            <el-input v-model="ruleForm.rate" :disabled="disabled" placeholder="请输入过件利率" class="width200 mr10"/>%
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mt20">
        <el-col :span="12">
          <el-form-item label="过件期限：" prop="deadline">
            <el-input v-model="ruleForm.deadline" :disabled="disabled" placeholder="请输入过件期限" class="width200 mr10"/>月
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="过件日期：" prop="date">
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择过件日期"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mt20">
        <el-col :span="12">
          <el-form-item label="完成日期：">
            <p>{{ timer_ }}</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="修改人&修改时间：">
            <p>1-2 张三 2019-04-12 15:07:32</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class=" mt10">
        <el-col :span="22">
          <el-form-item label="备注：">
            <el-input v-model="ruleForm.remark" :disabled="disabled" type="textarea" maxlength="100"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button v-if="!disabled" type="primary" @click="submitForm('ruleForm')">完成</el-button>
      <el-button v-if="disabled" type="primary" @click="disabled=false">更新</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      disabled: true,
      ruleForm: {
        loanPro: '',
        limit: '',
        rate: '',
        deadline: '',
        date: '',
        remark: ''
      },
      rules: {
        loanPro: [{ required: true, message: '请选择贷款产品', trigger: 'change' }],
        limit: [{ required: true, message: '请输入过件额度', trigger: 'blur' }],
        rate: [{ required: true, message: '请输入过件利率', trigger: 'blur' }],
        deadline: [{ required: true, message: '请输入过件期限', trigger: 'blur' }],
        date: [{ required: true, message: '请选择过件日期', trigger: 'change' }]
      },
      timer_: this.$date.newDate() // 当前时间
    }
  },
  created() {
    this.getNewDate()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
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
    },
    getNewDate() {
      // 获取当前时间-到秒
      this.timer = setInterval(() => {
        this.timer_ = this.$date.newDate()
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item{
  margin-bottom: 0;
}
</style>
