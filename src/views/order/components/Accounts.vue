<template>
  <!-- 结账/取消结账 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" width="800px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3 class="mb20">结账信息</h3>
      <el-row class="mb10">
        <el-col :span="8">客户姓名：张三丰</el-col>
        <el-col :span="8">订单号：13700056547</el-col>
        <el-col :span="8">订单结账类型：放款结账</el-col>
      </el-row>
      <el-row class="mb10">
        <el-col :span="8">放款金额：3600.0元</el-col>
        <el-col :span="8">收费比例：3%（最低1000元）</el-col>
      </el-row>
      <el-row class="mb30">
        <el-col :span="8">服务费：3600.0元</el-col>
        <el-col :span="8">代垫款：200.0元</el-col>
      </el-row>
      <el-row class="mb10">
        <el-col :span="12" class="flex align_items">
          <el-checkbox v-model="service" style="width:130px;">服务费调整</el-checkbox>
          <el-input v-model="serviceInput" style="width:180px;"/>
        </el-col>
        <el-col :span="12" class="flex align_items">
          <el-checkbox v-model="penalSum" style="width:130px;">违约金调整</el-checkbox>
          <el-input v-model="penalSumInput" style="width:180px;"/>
        </el-col>
      </el-row>
      <el-row class="mb10">
        <el-col :span="12" class="flex align_items">
          <el-checkbox v-model="orderCost" style="width:130px;">预收费抵扣-订单</el-checkbox>
          <el-input v-model="orderCostInput" disabled style="width:180px;"/>
        </el-col>
        <el-col :span="12" class="flex align_items">
          <el-checkbox v-model="protocolCost" style="width:130px;">预收费抵扣-协议</el-checkbox>
          <el-input v-model="protocolCostInput" disabled style="width:180px;"/>
        </el-col>
      </el-row>
      <el-row class="mt10">
        <el-col :span="12">
          <el-form-item :label="service?`缴费方式`:`退费方式`" prop="paymentType">
            <el-select v-model="ruleForm.paymentType" placeholder="请选择缴费方式">
              <el-option label="微信" value="1"/>
              <el-option label="支付宝" value="2"/>
              <el-option label="银行转账" value="3"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item
            v-if="ruleForm.paymentType!=='3'"
            :label="service?`缴费账号`:`退费账号`"
            prop="account"
          >
            <el-input v-model="ruleForm.account" maxlength="20"/>
          </el-form-item>
          <div v-else>
            <el-form-item label="银行卡号" prop="bankCard">
              <el-input v-model="ruleForm.bankCard" maxlength="20"/>
            </el-form-item>
            <el-form-item label="开户行名称" prop="bankName">
              <el-input v-model="ruleForm.bankName" maxlength="20"/>
            </el-form-item>
            <el-form-item label="收款人姓名" prop="payeeName">
              <el-input v-model="ruleForm.payeeName" maxlength="20"/>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="备注">
            <el-input v-model="ruleForm.remark" type="textarea" maxlength="100"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p class="pt20 bor_t pl10">
      应交易金额
      <!-- <span class="ml20 harvest">+ 2300.0 元</span> -->
      <span class="ml20 expend">- 2300.0 元</span>
    </p>
    <p style="text-align: center;" class="mt20">
      <el-button style="width:120px;" type="primary" @click="submitForm('ruleForm')">确定</el-button>
    </p>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      service: false,
      serviceInput: 0,
      penalSum: false,
      penalSumInput: 0,
      orderCost: false,
      orderCostInput: 100,
      protocolCost: false,
      protocolCostInput: 100,
      ruleForm: {
        paymentType: '1',
        account: '',
        bankCard: '',
        bankName: '',
        payeeName: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        bankCard: [
          { required: true, message: '请输入银行卡号', trigger: 'blur' }
        ],
        bankName: [
          { required: true, message: '请输入开户行名称', trigger: 'blur' }
        ],
        payeeName: [
          { required: true, message: '请输入收款人姓名', trigger: 'blur' }
        ]
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
