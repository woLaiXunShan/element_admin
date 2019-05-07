<template>
  <!-- 订单&&协议公共筛选条件配置 -->
  <div class="condition">
    <div class="mt10 flex align_items">
      <span>贷款类型：</span>
      <el-button :type="trade_type.length===0?'primary':''" size="mini" @click="selectType('trade_type','')">不限</el-button>
      <el-button :type="trade_type.indexOf('income')!==-1?'primary':''" size="mini" @click="selectType('trade_type','income')">收入</el-button>
      <el-button :type="trade_type.indexOf('outcoome')!==-1?'primary':''" size="mini" @click="selectType('trade_type','outcoome')">支出</el-button>
      <el-button :type="trade_type.indexOf('no_trade')!==-1?'primary':''" size="mini" @click="selectType('trade_type','no_trade')">无交易</el-button>
    </div>
    <div class="mt10 flex align_items">
      <span>签单时间：</span>
      <el-button :type="trade_type.length===0?'primary':''" size="mini" @click="selectType('trade_type','')">不限</el-button>
      <el-button :type="trade_type.indexOf('income')!==-1?'primary':''" size="mini" @click="selectType('trade_type','income')">收入</el-button>
      <el-button :type="trade_type.indexOf('outcoome')!==-1?'primary':''" size="mini" @click="selectType('trade_type','outcoome')">支出</el-button>
      <el-button :type="trade_type.indexOf('no_trade')!==-1?'primary':''" size="mini" @click="selectType('trade_type','no_trade')">无交易</el-button>
    </div>
    <div class="mt10 flex align_items">
      <span>订单状态：</span>
      <el-button :type="trade_type.length===0?'primary':''" size="mini" @click="selectType('trade_type','')">不限</el-button>
      <el-button :type="trade_type.indexOf('income')!==-1?'primary':''" size="mini" @click="selectType('trade_type','income')">收入</el-button>
      <el-button :type="trade_type.indexOf('outcoome')!==-1?'primary':''" size="mini" @click="selectType('trade_type','outcoome')">支出</el-button>
      <el-button :type="trade_type.indexOf('no_trade')!==-1?'primary':''" size="mini" @click="selectType('trade_type','no_trade')">无交易</el-button>
    </div>
    <div class="mt10 flex align_items">
      <span>接单时间：</span>
      <el-button :type="trade_type.length===0?'primary':''" size="mini" @click="selectType('trade_type','')">不限</el-button>
      <el-button :type="trade_type.indexOf('income')!==-1?'primary':''" size="mini" @click="selectType('trade_type','income')">收入</el-button>
      <el-button :type="trade_type.indexOf('outcoome')!==-1?'primary':''" size="mini" @click="selectType('trade_type','outcoome')">支出</el-button>
      <el-button :type="trade_type.indexOf('no_trade')!==-1?'primary':''" size="mini" @click="selectType('trade_type','no_trade')">无交易</el-button>
    </div>
    <div class="mt10 flex align_items">
      <span>订单任务：</span>
      <el-button :type="trade_type.length===0?'primary':''" size="mini" @click="selectType('trade_type','')">不限</el-button>
      <el-button :type="trade_type.indexOf('income')!==-1?'primary':''" size="mini" @click="selectType('trade_type','income')">收入</el-button>
      <el-button :type="trade_type.indexOf('outcoome')!==-1?'primary':''" size="mini" @click="selectType('trade_type','outcoome')">支出</el-button>
      <el-button :type="trade_type.indexOf('no_trade')!==-1?'primary':''" size="mini" @click="selectType('trade_type','no_trade')">无交易</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trade_type: [],
      receipt_type: [],
      status: []
    }
  },
  methods: {
    selectType(type, val) { // 多选筛选
      switch (type) {
        case 'trade_type':
          if (val) {
            if (this.trade_type.indexOf(val) === -1) {
              this.trade_type.push(val)
            } else {
              const i = this.trade_type.indexOf(val)
              this.trade_type.splice(i, 1)
            }
          } else {
            this.trade_type = []
          }
          break
        case 'receipt_type':
          if (val) {
            if (this.receipt_type.indexOf(val) === -1) {
              this.receipt_type.push(val)
            } else {
              const i = this.receipt_type.indexOf(val)
              this.receipt_type.splice(i, 1)
            }
          } else {
            this.receipt_type = []
          }
          break
        case 'status':
          if (val) {
            if (this.status.indexOf(val) === -1) {
              this.status.push(val)
            } else {
              const i = this.status.indexOf(val)
              this.status.splice(i, 1)
            }
          } else {
            this.status = []
          }
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.condition{
  color: #606266;
}
</style>
