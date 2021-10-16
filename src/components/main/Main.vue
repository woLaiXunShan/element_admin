<template>
  <el-container style="height:100vh;">
    <el-aside  :style="{'width': isCollapse?'64px':'15%'}" :class="{'navBox':!isCollapse}" style="background-color: rgb(4, 18, 31);">
      <div class="logo center">
        <img v-if="!isCollapse" src="~@img/logo.png" alt="">
        <img v-else src="~@img/Y.png" alt="">
      </div>
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <el-header class="header_" style="background-color: #1976d2;">
        <Navbar></Navbar>
      </el-header>
      <Tags></Tags>
      <el-main style="background-color: #ebf0f5;">
        <div class="bgf">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Sidebar, Navbar, Tags } from './components/Main'
export default {
  components: {
    Sidebar, Navbar, Tags
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  height: 60px;
  line-height: 60px;
  background-color: #05182a;
  img{
    vertical-align: middle;
  }
}
.navBox{
  max-width: 240px;
  min-width: 200px;
}
.header_{
  height: 60px;
  line-height: 60px;
}
</style>
