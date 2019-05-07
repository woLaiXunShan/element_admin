<template>
  <!-- 放款确认 -->
  <el-dialog :visible.sync="box" title="请确认放款信息" width="1200px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div class="text item">
        <el-row>
          <el-col :span="8">协议编号 ： 房8338339393938</el-col>
          <el-col :span="16">
            协议 ：
            <router-link to>【房贷】李四先生中信银行100万</router-link>
          </el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8">客户 ： 李四（952703） 主贷人</el-col>
          <el-col :span="8">身份证号 ： 590890199909082390</el-col>
          <el-col :span="8">民族 ： 汉族</el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8">从贷人信息 ： 李四（952703） 主贷人</el-col>
          <el-col :span="8">从贷人身份证号 ： 590890199909082390</el-col>
          <el-col :span="8">与客户关系 ： 夫妻</el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8">
            <el-checkbox v-model="checked">远郊</el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="checked2">评估差</el-checkbox>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card mt10">
      <div slot="header" class="clearfix">
        <span>任务信息</span>
      </div>
      <div class="text item">
        <el-row class="mt10">
          <el-col :span="8">评估 ： 李四</el-col>
          <el-col :span="8">送审 ： 吴六</el-col>
          <el-col :span="8">过件 ： 吴六</el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8">
            <el-col :span="8">抵押 ： 吴六</el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="8">放款 ： 吴六</el-col>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card mt10">
      <div slot="header" class="clearfix">
        <span>费用相关</span>
      </div>
      <div class="text item">
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="单据号" align="center" min-width="150">
            <template v-slot="scope">
              <router-link to class="blue">BXDJ00000000000001</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="费用类别" align="center"/>
          <el-table-column prop="address" label="金额" align="center"/>
          <el-table-column prop="address" label="创建时间" align="center"/>
          <el-table-column prop="address" label="执行时间" align="center"/>
          <el-table-column prop="address" label="状态" align="center"/>
          <el-table-column prop="enteringDete" label="创建人" align="center"/>
          <el-table-column prop="enteringDete" label="出纳" align="center"/>
        </el-table>
      </div>
    </el-card>
    <p style="text-align: center;" class="mt20">
      <el-button type="primary" @click="box=false">取消</el-button>
      <el-button type="primary" @click="$refs.entering.init()">进入放款</el-button>
    </p>
    <!-- 放款录入 -->
    <LoanEntering ref="entering"/>
  </el-dialog>
</template>
<script>
import LoanEntering from "./LoanEntering";
export default {
  components: {
    LoanEntering
  },
  data() {
    return {
      box: false,
      checked: false,
      checked2: false,
      tableData: [{}]
    };
  },
  methods: {
    init() {
      this.box = true;
    }
  }
};
</script>
