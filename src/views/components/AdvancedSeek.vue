<template>
  <div>
    <p class="mb20">高级查找：</p>
    <el-form ref="advancedSeekForm" :model="advancedSeekForm" :rules="advancedSeekRules" class="advancedSeekForm" label-width="120px">
      <el-form-item label="贷款类型：" prop="abandonCause">
        <el-select v-model="advancedSeekForm.abandonCause" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="客户意向：" prop="abandonCause">
        <el-select v-model="advancedSeekForm.abandonCause" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="客户标签：" prop="abandonCause">
        <el-select v-model="advancedSeekForm.abandonCause" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="客户分类：" prop="abandonCause">
        <el-select v-model="advancedSeekForm.abandonCause" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="排序：" prop="abandonCause">
        <el-select v-model="advancedSeekForm.abandonCause" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <div>
        <el-form-item label="" prop="abandonCause">
          <el-input
            v-model="advancedSeekName"
            placeholder="保存名称"
            clearable/>
        </el-form-item>
      </div>
    </el-form>
    <p class="mt30 center">
      <el-button style="width:150px;" type="primary" @click="submitForm('advancedSeekForm')">查找</el-button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      advancedSeekForm: {
        abandonCause: ''
      },
      advancedSeekRules: { // 高级查找的表单验证
        abandonCause: [{ required: true, message: '请选择', trigger: 'change' }]
      },
      advancedSeekName: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  methods: {
    submitForm(formName) { // 验证表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.advancedSeekForm{
  display: flex;
  flex-wrap: wrap;
}
</style>
