<template>
  <div class="bgfff p10">
    <div class="flex one_sift mt10">
      <div class="flex">
        <el-select v-model="selectType_" clearable placeholder="请选择" style="width:120px;margin-right: 10px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <el-input
          v-model="nameAndPhone"
          placeholder="请输入客户姓名或电话号码"
          clearable
          style="width:200px;margin-right: 10px;"/>
        <el-button icon="el-icon-search" circle style="margin-right: 10px;"/>
      </div>
      <div class="flex">
        <el-select v-model="selectType_" clearable placeholder="请选择" style="width:120px;margin-right: 10px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <i class="el-icon-question mr10"/>
        <el-button type="primary" plain @click="advancedSeek = true">高级查找</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      class="mt20"
      @sort-change="sortChange"
      @row-dblclick="dblclick"
      @selection-change="selectionChange">
      <el-table-column
        type="selection"
        width="55"/>
      <el-table-column
        prop="date"
        label="主题"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="name"
        label="协议号"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="address"
        label="产品"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="address"
        label="金额"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="address"
        label="状态"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="address"
        label="服务人员"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="enteringDete"
        label="权证人员"
        sortable="custom"
        min-width="150"/>
      <el-table-column
        prop="followUpDete"
        label="进度"
        sortable="custom"
        min-width="150"/>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="page.currentPage"
      :page-sizes="page.pageSizes"
      :page-size="page.pageSize"
      :total="page.totalCount"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>

  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {
        currentPage: 1,
        totalCount: 0,
        pageSize: 20,
        pageSizes: [20, 50, 100, 200]
      },
      column: 0,
      advancedSeek: false, // 高级查找
      selectType_: '',
      nameAndPhone: '',
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
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      selectList: [] // 多选选择的数据
    }
  },
  methods: {
    selectionChange(selection) { // 多选选项变化
      this.selectList = selection
    },
    sortChange(column, prop, order) { // 排序状态改变
      console.log(column, prop, order)
    },
    handleSizeChange(val) { // 修改每页显示条数
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) { // 切换分页
      console.log(`当前页: ${val}`)
    },
    dblclick(row, event) { // 行被双击跳转详情的操作
      console.log(row, event)
      this.$router.push(`orderDetail/${1}`)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.one_sift,.two_sift,.three_sift{
  justify-content: space-between;
  >.flex{
    align-items: center;
  }
}
</style>
