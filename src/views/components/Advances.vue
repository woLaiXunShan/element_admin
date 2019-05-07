<template>
  <!-- 预收款 -->
  <el-dialog
    :visible.sync="advancesBox"
    :modal-append-to-body="false"
    width="1000px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>交易类型</span>
      </div>
      <el-radio-group v-model="advancesType" @change="advancesType_">
        <el-radio label="1">收预收款（协议）</el-radio>
        <el-radio label="2">退预收款（协议）</el-radio>
      </el-radio-group>
    </el-card>
    <el-card class="box-card mt20">
      <div slot="header" class="clearfix">
        <span>交易信息</span>
      </div>
      <el-row>
        <el-col :span="6">客户姓名：张三丰</el-col>
        <el-col :span="6">客户电话：13700056547</el-col>
        <el-col :span="6">关联协议：13700056547</el-col>
        <el-col v-if="advancesType==='2'" :span="6">关联订单：13700056547</el-col>
      </el-row>
      <el-form ref="collectForm" :model="collectForm" :rules="collectRules" label-width="100px" class="demo-ruleForm">
        <el-row class="mt10">
          <el-col :span="8">
            <el-form-item v-if="advancesType==='1'" label="收费金额" prop="money">
              <el-input v-model="collectForm.money" style="width:200px;"/>
            </el-form-item>
            <el-form-item v-if="advancesType==='2'" label="退费金额" prop="returnMoney">
              <el-input v-model="collectForm.returnMoney" placeholder="最多可退300" style="width:200px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="单据号码" prop="bills">
              <p v-if="!isBills">
                <span>自动生成</span>
                <el-button class="ml10" type="primary" size="mini" plain @click="isBills=true,collectForm.bills=''">修改</el-button>
              </p>
              <el-input v-else v-model="collectForm.bills" maxlength="20"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8">
            <el-form-item :label="advancesType==='1'?`缴费方式`:`退费方式`" prop="paymentType">
              <el-select v-model="collectForm.paymentType" placeholder="请选择缴费方式">
                <el-option label="微信" value="1"/>
                <el-option label="支付宝" value="2"/>
                <el-option label="银行转账" value="3"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item v-if="collectForm.paymentType!=='3'" :label="advancesType==='1'?`缴费账号`:`退费账号`" prop="account">
              <el-input v-model="collectForm.account" maxlength="20"/>
            </el-form-item>
            <div v-else>
              <el-form-item label="银行卡号" prop="bankCard">
                <el-input v-model="collectForm.bankCard" maxlength="20"/>
              </el-form-item>
              <el-form-item label="开户行名称" prop="bankName">
                <el-input v-model="collectForm.bankName" maxlength="20"/>
              </el-form-item>
              <el-form-item label="收款人姓名" prop="payeeName">
                <el-input v-model="collectForm.payeeName" maxlength="20"/>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="备注">
              <el-input v-model="collectForm.remark" type="textarea" maxlength="100"/>
            </el-form-item>
          </el-col>
        </el-row>
        <p style="text-align: center;">
          <el-button style="width:120px;" type="primary" @click="submitForm('collectForm')">确定</el-button>
        </p>
      </el-form>
    </el-card>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      advancesBox: false,
      advancesType: '1', // 交易类型
      isBills: false,
      collectForm: {
        money: '',
        returnMoney: '',
        bills: '000',
        paymentType: '1',
        account: '',
        bankCard: '',
        bankName: '',
        payeeName: '',
        remark: ''
      },
      collectRules: {
        money: [{ required: true, message: '请输入收费金额', trigger: 'blur' }],
        returnMoney: [{ required: true, message: '请输入退费金额', trigger: 'blur' }],
        bills: [{ required: true, message: '请输入单据号码', trigger: 'blur' }],
        paymentType: [{ required: true, message: '请选择缴费方式', trigger: 'change' }],
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        bankCard: [{ required: true, message: '请输入银行卡号', trigger: 'blur' }],
        bankName: [{ required: true, message: '请输入开户行名称', trigger: 'blur' }],
        payeeName: [{ required: true, message: '请输入收款人姓名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) { // 提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        } else {
          return false
        }
      })
    },
    init() { // 初始化
      this.advancesBox = true
      this.advancesType = '1'
      this.advancesType_()
    },
    advancesType_() { // 选择交易类型
      this.isBills = false
      this.collectForm.remark = ''
      setTimeout(() => {
        this.$refs['collectForm'].resetFields()
      }, 10)
    }
  }
}
</script>
