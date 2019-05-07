<template>
  <div class=" ">
    <div class="rightPage flex">
      <img src="~@img/zuo_fan_1.png" alt="">
      <img src="~@img/you_fan_1.png" alt="">
      （4, 20）
    </div>
    <div class="user_state mt10 bgfff">
      <p class="flex title p10">
        <img src="~@img/xie_yi.png" alt="">
        <span class="ml20">【随便贷】李先生中信银行60万（66789）</span>
      </p>
      <div class="pl20 pt20 pr20 pb30">
        <p class="plan">进度：9-28已申请评估，待权证助理审核；</p>
        <div class="flex state_list mt10">
          <div class="state_box ac">
            <p>执行</p>
            <p class="date">09-28</p>
          </div>
          <div class="flex align_items active">
            <span class="wire"/>
            <div class="state_box">
              <p class="cursor" @click="toAssess">评估</p>
              <p class="date">09-28</p>
            </div>
          </div>
          <div class="flex align_items on">
            <span class="wire"/>
            <div class="state_box">
              <p class="cursor" @click="$refs.careful.init()">送审</p>
              <p class="date">09-28</p>
            </div>
          </div>
          <div class="flex align_items active">
            <span class="wire"/>
            <div class="state_box">
              <p class="cursor" @click="$refs.piece.init()">过件</p>
              <p class="date">09-28</p>
            </div>
          </div>
          <div class="flex align_items">
            <span class="wire"/>
            <div class="state_box">
              <p class="cursor" @click="$refs.common.init()">抵押</p>
              <p class="date"/>
            </div>
          </div>
          <div class="flex align_items">
            <span class="wire"/>
            <div class="state_box">
              <p class="cursor" @click="$refs.loan.init()">放款</p>
              <p class="date"/>
            </div>
          </div>
        </div>
      </div>
      <div class="p20 mt10" style="border-top:1px solid #dce1e6;">
        <!-- <el-button v-if="!isEdit" type="primary" plain @click="editBaseMsg">编辑</el-button>
        <el-button v-else type="primary" plain @click="saveBaseMsg">保存</el-button> -->
        <el-button type="primary" plain @click="$refs.allocationBox.allocation=true">分配</el-button>
        <el-button type="primary" plain @click="$refs.allocation.box=true">变更</el-button>
        <el-button type="primary" plain @click="$refs.decline.init()">退件</el-button>
        <el-button type="primary" plain @click="$refs.doOrderMan.box=true">规划人员</el-button>
        <!-- <el-button type="primary" plain @click="$refs.accounts.init()">结账/取消结账</el-button>
        <el-button type="primary" plain @click="$refs.adjust.init()">费用调整</el-button> -->
        <el-button type="primary" plain @click="$refs.defer.init()">暂缓</el-button>
        <el-button type="primary" plain>违约</el-button>
      </div>
    </div>
    <el-tabs v-model="baseMessage" class="mt20" type="border-card">
      <el-tab-pane name="basic" label="基本信息">
        <Base_ ref="basic"/>
      </el-tab-pane>
      <el-tab-pane label="客户信息">
        <Customer/>
      </el-tab-pane>
      <el-tab-pane label="资产信息">
        <Asset/>
      </el-tab-pane>
      <el-tab-pane label="管理信息">
        <Management/>
      </el-tab-pane>
      <el-tab-pane label="附件信息">
        <Accessory/>
      </el-tab-pane>
    </el-tabs>
    <el-tabs class="mt20" type="border-card">
      <el-tab-pane label="收款信息">
        <Proceeds/>
      </el-tab-pane>
      <el-tab-pane label="费用信息">
        <Cost/>
      </el-tab-pane>
    </el-tabs>
    <!-- 分配 -->
    <AllocationBox ref="allocationBox"/>
    <!-- 变更 -->
    <Alteration ref="allocation"/>
    <!-- 退件 -->
    <Decline ref="decline"/>
    <!-- 做单人员 -->
    <DoOrderMan ref="doOrderMan"/>
    <!-- 结账/取消结账 -->
    <Accounts ref="accounts"/>
    <!-- 费用调整 -->
    <Adjust ref="adjust"/>
    <!-- 暂缓 -->
    <Defer ref="defer"/>
    <!-- 送审 -->
    <Careful ref="careful"/>
    <!-- 送审 -->
    <Piece ref="piece"/>
    <!-- 抵押 -->
    <Common ref="common">
      <h3 class="pl30 mb30">是否要完成抵押？</h3>
    </Common>
    <!-- 放款 -->
    <Loan ref="loan"/>
  </div>
</template>
<script>
import { Base_, Customer, Asset, Management, Accessory, Proceeds, Cost } from './detailPage'
import AllocationBox from '@/views/components/AllocationBox'
import Common from '@/views/components/Common'
import { Alteration, Decline, DoOrderMan, Accounts, Adjust, Careful, Piece, Loan, Defer } from './components'
export default {
  components: {
    Base_, Customer, Asset, Management, Accessory, Proceeds, Cost,
    AllocationBox, Common,
    Alteration, Decline, DoOrderMan, Accounts, Adjust, Careful, Piece, Loan, Defer

  },
  data() {
    return {
      isEdit: false,
      baseMessage: 'basic'
    }
  },
  methods: {
    editBaseMsg() { // 编辑基础信息
      this.baseMessage = 'basic'
      this.isEdit = true
      this.$refs.basic.isEdit = true
    },
    saveBaseMsg() { // 保存基础信息
      this.baseMessage = 'basic'
      this.isEdit = false
      this.$refs.basic.saveBaseMsg()
    },
    toAssess() { // 跳转评估列表
      this.$router.push(`/order/assessList/${this.$route.params.id}`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.rightPage{
  color: #1976d2;
  font-size: 12px;
  align-items: center;
  justify-content: flex-end;
  img{
    margin: 0 5px;
    cursor: pointer;
  }
}
.user_state{
  border-radius: 4px;
  .title{
    font-size: 26px;
    letter-spacing: 1px;
    color: #242b33;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
    }
  }
  .plan{
    color: #1976d2;
    font-size: 14px;
  }
  .state_list{
    .wire{
      width: 40px;
      height: 2px;
      background-color: #f2f4f5;
      margin: 0 5px;
    }
    .align_items{
      &.on{
        .state_box{
          background-color: #00c7ac;
          color: #fff;
        }
        .wire{
          background-color: #00c7ac;
        }
      }
      &.active{
        .state_box{
          background-color: #f5aa2a;
          color: #fff;
        }
        .wire{
          background-color: #00c7ac;
        }
      }
    }
    .state_box{
      width: 160px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #f2f4f5;
      color: #8a9299;
      border-radius: 4px;
      .date{
        color: #565e66;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        margin-top: 10px;
      }
      &.ac{
        background-color: #00c7ac;
        color: #fff;
      }
    }
  }
}
</style>
