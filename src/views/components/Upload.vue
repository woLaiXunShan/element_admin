<template>
  <el-upload
    :action="`http://api.yscrm.cn/api/upload`"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :file-list="fileList"
    list-type="picture-card"
    class="avatar-uploader"
    accept="image/gif, image/jpeg, image/jpg, image/bmp, image/png"
  >
    <i class="el-icon-plus"/>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      fileList: []
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      this.imageUrl = res.data.path
    },
    beforeAvatarUpload(file) {
      const testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const isJpg = testmsg === 'jpg'
      const isJpeg = testmsg === 'jpeg'
      const isPng = testmsg === 'png'
      const isGif = testmsg === 'gif'
      const isBmp = testmsg === 'bmp'
      const isLt2M = file.size / 1024 / 1024 < 2 // 这里做文件大小限制
      if (!isJpg && !isJpeg && !isPng && !isGif && !isBmp) {
        this.$message({
          message: '上传文件只能是 jpg jpeg gif png bmp格式!',
          type: 'warning'
        })
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 2MB!',
          type: 'warning'
        })
      }
      return isJpg || isJpeg || isPng || isGif || isBmp && isLt2M
    }
  }
}
</script>
