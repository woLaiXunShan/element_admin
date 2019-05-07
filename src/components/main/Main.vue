<template>
  <el-container style="height:100vh;">
    <el-aside width="240px" style="background-color: rgb(4, 18, 31);">
      <div class="logo center">
        <img src="~@img/logo.png" alt="">
      </div>
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <el-header class="header_" style="background-color: #1976d2;">
        <Navbar></Navbar>
      </el-header>
      <Tags></Tags>
      <el-main style="background-color: #ebf0f5;">
        <div style="min-width:1200px;">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Sidebar, Navbar, Tags } from './components'
export default {
  components: {
    Sidebar, Navbar, Tags
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
.header_{
  height: 60px;
  line-height: 60px;
}
</style>
