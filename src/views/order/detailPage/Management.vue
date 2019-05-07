<template>
  <div>
    <ul>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">关联客户</p>
          <p class="con pl20">房贷</p>
        </div>
        <div class="flex">
          <p class="title pl20">关联协议</p>
          <p class="con pl20">123</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">服务部门</p>
          <p class="con pl20">31</p>
        </div>
        <div class="flex">
          <p class="title pl20">权证部门</p>
          <p class="con pl20">31</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">服务人员&电话</p>
          <p class="con pl20">31</p>
        </div>
        <div class="flex">
          <p class="title pl20">权证人员&电话</p>
          <p class="con pl20">31</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">修改人&修改时间</p>
          <p class="con pl20">31</p>
        </div>
        <div class="flex">
          <p class="title pl20">创建人&创建时间</p>
          <p class="con pl20">123</p>
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
