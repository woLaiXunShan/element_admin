<template>
  <div class="flex align_items p10 shadow">
    <el-tag class="mr10 cursor" size="small"
      v-for="(item, index) in tags"
      :key="item.name"
      :closable="item.name === 'home' ? false : true"
      :type="item.name === $route.name ? '' : 'info'"
      @click.native="linkTo(item.url)"
      @close="handleClose(index, item.name)"
    >
      {{item.title}}
    </el-tag>
  </div>
</template>
<script>
export default {
  computed: {
    tags () {
      return JSON.parse(this.$store.state.tags)
    }
  },
  methods: {
    handleClose (index, name) {
      this.tags.splice(index, 1)
      if (name === this.$route.name) {
        let url = this.tags[this.tags.length - 1].url
        this.$router.push(url)
      }
      this.$store.commit('TAG', JSON.stringify(this.tags))
    },
    linkTo (url) {
      this.$router.push(url)
    }
  }
}
</script>
