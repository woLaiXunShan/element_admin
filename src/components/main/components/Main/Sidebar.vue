<template>
  <div>
    <el-menu
      router
      class="el-menu-vertical-demo"
      background-color="rgb(4, 18, 31)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="(item, index) in routes">
        <el-submenu v-if="item.name!=='home_' && item.name!=='login'" :key="index" :index="`${index}`">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(it, i) in item.children">
              <el-menu-item v-if="!it.hidden" :key="`${index}-${i}`" :index="`${item.path}/${it.path}`">
                {{it.meta.title}}
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>
