<template>
  <div class="main flex flex_just_betw">
    <div class="flex flex_cen">
      <i @click="$store.commit('IS_COLLAPSE')" :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" class="el-icon-s-unfold fs26 cursor mr20"></i>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="flex flex_cen">
      <el-dropdown trigger="click" placement="top" @command="handleCommand">
        <div class="flex_cen user_info cursor">
          <span class="colfff">王大锤</span>
          <img src="~@img/Y.png" class="user_img ml10" alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <ChangePassword ref="changePassword"></ChangePassword>
  </div>
</template>
<script>
import Breadcrumb from './Breadcrumb'
import ChangePassword from './ChangePassword'
export default {
  components: {
    Breadcrumb, ChangePassword
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleCommand (command) {
      console.log(command)
      if (command === "changePassword") {
        this.$refs.changePassword.init()
      }
      if (command === 'logout') {
        // this.fetch.logout().then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
        sessionStorage.token = ''
        sessionStorage.state_ = false
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 60px;
}
.user_info{
  height: 60px;
}
.user_img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
}
</style>
