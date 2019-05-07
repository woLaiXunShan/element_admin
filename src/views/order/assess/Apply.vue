<template>
  <!-- 评估-申请 -->
  <el-dialog :visible.sync="box" :modal-append-to-body="false" class="apply_" width="800px">
    <h4>评估：李四先生房贷（66789）</h4>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-row class="mt10">
        <el-col :span="12">
          <el-form-item label="任务管理者：">
            <p>张三</p>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间：">
            <p>{{ timer_ }}</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="使用房产：">
            <el-select v-model="ruleForm.house" placeholder="请选择">
              <el-option label="使用房产" value="1"/>
              <el-option label="使用房产2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="房产面积(㎡)：">
            <p>120</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="房产地址：">
            <p>120</p>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款渠道：">
            <el-select v-model="ruleForm.house" filterable placeholder="请选择">
              <el-option label="使用房产" value="1"/>
              <el-option label="使用房产2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评估公司：">
            <el-select v-model="ruleForm.house" filterable placeholder="请选择">
              <el-option label="使用房产" value="1"/>
              <el-option label="使用房产2" value="2"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="看房电话：" prop="phone">
            <el-input
              v-model="ruleForm.phone"
              maxlength="11"
              placeholder="请输入看房电话"
              style="width:200px;"
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
      <el-row>
        <el-col :span="24">
          <el-form-item :label="'上传凭证：（房产资料）'" class="set_label">
            <Upload/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <p style="text-align:center;">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">保存并申请</el-button>
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
      ruleForm: {
        house: '',
        phone: '',
        remark: ''
      },
      rules: {
        phone: [{ required: true, message: '请输入看房电话', trigger: 'blur' }]
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
      // 初始化
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
