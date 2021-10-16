<template>
  <el-dialog
    title="修改密码"
    :visible.sync="box"
    :modal-append-to-body="false"
    :close-on-click-modal="false"
    class="apply_"
    width="650px"
  >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名">
          <!-- <el-input  prop="userName"
            disabled
            v-model="ruleForm.userName"
            placeholder="请输入用户名"
          ></el-input> -->
          <span>{{ ruleForm.userName }}</span>
        </el-form-item>
        <el-form-item label="原始密码" prop="oldPwd">
          <el-input
            v-model="ruleForm.oldPwd"
            placeholder="请输入原始密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input
            v-model="ruleForm.newPwd"
            placeholder="请输入新密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="affirmPwd">
          <el-input
            v-model="ruleForm.affirmPwd"
            placeholder="请输入确认密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="box = false">取消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
  </el-dialog>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    const checkPwd = (rule, value, callback) => {
      let account = sessionStorage.account;
      if (value !== account) {
        if (value !== "123456") {
          if (this.$check.validatAlphabetsNumOthers(value)) {
            callback();
          } else {
            callback(new Error("仅支持数字、字母"));
          }
        } else {
          callback(new Error("密码不能为 123456"));
        }
      } else {
        callback(new Error("密码不能与用户名一致"));
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value !== this.ruleForm.newPwd) {
        callback(new Error("两次输入密码不匹配!"));
      } else {
        callback();
      }
    };
    return {
      box: false,
      ruleForm: {
        oldPwd: "",
        newPwd: "",
        affirmPwd: "",
        userName: "",
        // userName: "sadas",
      },
      rules: {
        oldPwd: [
          { required: true, message: "请输入原始密码", trigger: "blur" },
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        newPwd: [
          { required: true, message: "请输入新密码", trigger: "blur" },

          { trigger: "blur", validator: checkPwd },
          {
            pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,20}$/,
            message: "必须包含大小写字母及数字，8~20 个字符",
            trigger: "blur",
          },
        ],
        affirmPwd: [
          { required: true, message: "请输入确认密码", trigger: "blur" },

          { trigger: "blur", validator: validatePassCheck },
          {
            pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,20}$/,
            message: "必须包含大小写字母及数字，8~20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.box = true;
      setTimeout(() => {
        this.$refs["ruleForm"].resetFields();
      }, 10);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = {
            // currPwd: this.ruleForm.oldPwd,
            password: this.ruleForm.newPwd,
            userName: this.ruleForm.userName,
          };
          // this.fetch.modifyUserPwd(params).then((res) => {
          //   if (res.code === 200) {
          //     sessionStorage.state_ = false;
          //     console.log(sessionStorage.backUrl);
          //     setTimeout(() => {
          //       self.location.href = sessionStorage.backUrl;
          //     }, 1e3);
          //   } else {
          //     this.$message.error(res.message);
          //   }
          // });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.apply_ {
  line-height: 24px;
}
</style>
