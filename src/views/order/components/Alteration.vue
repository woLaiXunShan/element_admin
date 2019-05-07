<template>
  <!-- 变更 -->
  <el-dialog :visible.sync="box" width="1000px">
    <!-- 贷款人变更 -->
    <Borrower>
      <p class="mb10">贷款人信息变更</p>
    </Borrower>
    <p class="mb10 mt10">资产绑定变更</p>
    <el-select v-model="asset" placeholder="请选择" style="width:400px;">
      <el-option label="工资" value="1"/>
      <el-option label="公积金" value="2"/>
      <el-option label="社保" value="3"/>
    </el-select>
    <p style="text-align: center;" class="mt20">
      <el-button style="width:120px;" type="primary" @click="submitForm">提交</el-button>
    </p>
  </el-dialog>
</template>
<script>
import Borrower from './Borrower'
export default {
  components: {
    Borrower
  },
  data() {
    return {
      box: false,
      asset: '1',
      tableData: [
        {
          type: '1',
          name: '王小虎',
          nation: '汉',
          card: '513701199905297520',
          phone: '13123456789',
          relation: '本人'
        },
        {
          type: '1',
          name: '王小虎',
          nation: '汉',
          card: '513701199905297520',
          phone: '13123456789',
          relation: '夫妻'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      // 提交信息变更
    }
  }
}
</script>
