<template>
  <!-- 放款录入 -->
  <el-dialog :visible.sync="box" append-to-body width="800px">
    <h4>放款：李四先生房贷（66789）</h4>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-row class="mt20">
        <el-col :span="12">
          <el-form-item label="任务管理者：">
            <p>王大锤</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间：">
            <p>2019-04-12 15:07:32</p>
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
          <el-form-item label="贷款渠道：">
            <p>贷款渠道</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="放款金额：" prop="price">
            <el-input v-model="ruleForm.price" placeholder="请输入放款金额" class="width200 mr10"/>万
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款利率：" prop="rate">
            <el-input v-model="ruleForm.rate" placeholder="请输入放款利率" class="width200 mr10"/>%
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款期限：" prop="limit">
            <el-input v-model="ruleForm.limit" placeholder="请输入贷款期限" class="width200 mr10"/>月
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款日期：" prop="date">
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择放款日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="还款方式：" prop="repaymentType">
            <el-input v-model="ruleForm.repaymentType" placeholder="请输入还款方式" class="width200 mr10"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款支行：" prop="subBranch">
            <el-input v-model="ruleForm.subBranch" placeholder="请输入放款支行" class="width200 mr10"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="每期还款金额：" prop="terminallyPrice">
            <el-input
              v-model="ruleForm.terminallyPrice"
              placeholder="请输入每期还款金额"
              class="width200 mr10"
            />元
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="每期还款日期：" prop="terminallyDate">
            <el-date-picker
              v-model="ruleForm.terminallyDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择每期还款日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="还款终止日期：" prop="lastDate">
            <el-date-picker
              v-model="ruleForm.lastDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择还款终止日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="三方卡：" prop="threeCard">
            <el-input v-model="ruleForm.threeCard" placeholder="请输入三方卡" class="width200 mr10"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="收款开户名：" prop="accountName">
            <el-input v-model="ruleForm.accountName" placeholder="请输入收款开户名" class="width200 mr10"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款银行&卡号：" prop="cardNumber">
            <el-input v-model="ruleForm.cardNumber" placeholder="请输入收款银行&卡号" class="width200 mr10"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="归本时间：" prop="vereignungDate">
            <el-date-picker
              v-model="ruleForm.vereignungDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择归本时间"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="过件时间：" prop="pieceDate">
            <el-date-picker
              v-model="ruleForm.pieceDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择过件时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22">
          <el-form-item label="备注：">
            <el-input v-model="ruleForm.remark" type="textarea" maxlength="100"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;" class="mt10">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
      <el-button type="primary">处理中</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      ruleForm: {
        loanPro: '',
        price: '',
        rate: '',
        limit: '',
        date: '',
        repaymentType: '',
        subBranch: '',
        terminallyPrice: '',
        terminallyDate: '',
        lastDate: '',
        threeCard: '',
        accountName: '',
        cardNumber: '',
        vereignungDate: '',
        pieceDate: '',
        remark: ''
      },
      rules: {
        loanPro: [
          { required: true, message: '请选择贷款产品', trigger: 'change' }
        ],
        price: [{ required: true, message: '请输入放款金额', trigger: 'blur' }],
        rate: [{ required: true, message: '请输入放款利率', trigger: 'blur' }],
        limit: [{ required: true, message: '请输入贷款期限', trigger: 'blur' }],
        date: [
          { required: true, message: '请选择放款日期', trigger: 'change' }
        ],
        repaymentType: [
          { required: true, message: '请输入还款方式', trigger: 'blur' }
        ],
        subBranch: [
          { required: true, message: '请输入放款支行', trigger: 'blur' }
        ],
        terminallyPrice: [
          { required: true, message: '请输入每期还款金额', trigger: 'blur' }
        ],
        terminallyDate: [
          { required: true, message: '请选择每期还款日期', trigger: 'change' }
        ],
        lastDate: [
          { required: true, message: '请选择还款终止日期', trigger: 'change' }
        ],
        threeCard: [
          { required: true, message: '请输入三方卡', trigger: 'blur' }
        ],
        accountName: [
          { required: true, message: '请输入收款开户名', trigger: 'blur' }
        ],
        cardNumber: [
          { required: true, message: '请输入收款银行&卡号', trigger: 'blur' }
        ],
        vereignungDate: [
          { required: true, message: '请选择归本时间', trigger: 'change' }
        ],
        pieceDate: [
          { required: true, message: '请选择过件时间', trigger: 'change' }
        ]
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
    init() {
      this.box = true
      setTimeout(() => {
        this.$refs['ruleForm'].resetFields()
      }, 10)
    },
    submitForm(formName) {
      // 提交表单
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
