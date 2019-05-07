<template>
  <!-- 贷款人变更 -->
  <div>
    <slot/>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="类别" prop="type">
        <template v-slot="scope">
          <el-select v-model="scope.row.type" placeholder="请选择">
            <el-option label="主贷人" value="1"/>
            <el-option label="从贷人" value="2"/>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="name"/>
      <el-table-column label="民族" prop="nation"/>
      <el-table-column label="身份证" prop="card" width="180"/>
      <el-table-column label="手机号" prop="phone"/>
      <el-table-column label="与客户关系" prop="relation"/>
      <el-table-column>
        <template slot="header">
          <el-button size="mini" type="primary" @click="$refs.addLoanMan.init()">新增</el-button>
        </template>
        <template v-slot="scope">
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增贷款人 -->
    <AddLoanMan ref="addLoanMan"/>
  </div>
</template>
<script>
import AddLoanMan from '@/views/components/AddLoanMan'
export default {
  components: {
    AddLoanMan
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
  methods: {}
}
</script>

