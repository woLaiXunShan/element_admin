<template>
  <!-- 评估公共信息 -->
  <div>
    <el-row class="mt10">
      <el-col :span="12">
        <el-form-item label="使用房产：">
          <p>sac全款房</p>
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
          <p>天府三街23号1栋2单元11-9</p>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="贷款渠道：">
          <p>中信银行</p>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="评估公司：">
          <p>大连大丰</p>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="看房电话：">
          <p>13123456789</p>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.el-form-item{
  margin-bottom: 0;
}
</style>
