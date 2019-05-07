<template>
  <div>
    <ul>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">签单类型</p>
          <p class="con pl20">房贷</p>
        </div>
        <div class="flex">
          <p class="title pl20">协议号</p>
          <p class="con pl20">
            <el-input v-if="isEdit" v-model="loanMonth" style="width:95%"/>
            <span v-else>ysfd00001-01</span>
          </p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">贷款金额（万）</p>
          <p class="con pl20">
            <el-input v-if="isEdit" v-model="loanMonth" style="width:95%"/>
            <span v-else>60</span>
          </p>
        </div>
        <div class="flex">
          <p class="title pl20">贷款期数（月）</p>
          <p class="con pl20">
            <el-input v-if="isEdit" v-model="loanMonth" style="width:95%"/>
            <span v-else>240</span>
          </p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">收费方式</p>
          <p class="con pl20">按比例</p>
        </div>
        <div class="flex">
          <p class="title pl20">收费金额</p>
          <p class="flex justify align_items con pl20 pr20">30000
            <el-popover
              placement="top-end"
              width="400"
              trigger="click">
              <ul class="order_states">
                <li>123456798</li>
                <li>123456798</li>
                <li>123456798</li>
              </ul>
              <img slot="reference" src="~@img/lie_biao_shi_jian_1.png" style="vertical-align: middle;" alt="">
            </el-popover>
          </p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">服务人员</p>
          <p class="con pl20">1-2李四</p>
        </div>
        <div class="flex">
          <p class="title pl20">权证人员</p>
          <p class="con pl20">2-1王五</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">订单状态</p>
          <p class="flex justify align_items con pl20 pr20">评估
            <el-popover
              placement="top-end"
              width="400"
              trigger="click">
              <ul class="order_states">
                <li>123456798</li>
                <li>123456798</li>
                <li>123456798</li>
              </ul>
              <img slot="reference" src="~@img/lie_biao_shi_jian_1.png" style="vertical-align: middle;" alt="">
            </el-popover>
          </p>
        </div>
        <div class="flex">
          <p class="title pl20"/>
          <p class="con pl20"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEdit: false,
      protocol: '',
      loanMoney: '',
      loanMonth: ''
    }
  },
  methods: {
    saveBaseMsg() { // 保存基础信息
      this.isEdit = false
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  box-sizing: border-box;
}
.order_states{
  li{
    line-height: 24px;
  }
}
li.flex{
  line-height: 56px;
  border-bottom: solid 1px #dce1e6;
  border-right: solid 1px #dce1e6;
  &:first-child{
    border-top: solid 1px #dce1e6;
  }
  >div{
    width: 50%;
    color: #242b33;
    font-size: 14px;
    .title{
      width: 240px;
      background-color: #f2f4f5;
      border-right: solid 1px #dce1e6;
      border-left: solid 1px #dce1e6;
      color: #565e66;
    }
    .con {
      width: calc(100% - 240px);
    }
  }
}
</style>
