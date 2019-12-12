<template>
  <div class="main flex justify">
    <div class="flex align_items">
      <i @click="$store.commit('IS_COLLAPSE', !isCollapse)" :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" class="el-icon-s-unfold fs26 cursor mr20"></i>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="flex align_items">
      <el-dropdown trigger="click" placement="top" @command="handleCommand">
        <span class="user-name el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right colfff"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item command="center">个人中心</el-dropdown-item> -->
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Breadcrumb from './Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleCommand (command) {
      console.log(command)
      // if (command === 'logout') {
      //   this.fetch.logout().then(res => {
      //     console.log(res)
      //   }).catch(err => {
      //     console.log(err)
      //   })
      //   sessionStorage.token = ''
      //   sessionStorage.state_ = false
      //   this.$router.push({ path: '/login' })
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 60px;
}
.user-img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
}
</style>
