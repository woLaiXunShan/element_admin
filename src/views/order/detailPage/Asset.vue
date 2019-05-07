<template>
  <div>
    <ul>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">房产信息</p>
          <p class="con pl20">李四先生，58岁，汉族，已婚，本地户籍，上班族，事业单位；</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">车产信息</p>
          <p class="con pl20">征信情况征信情况征信情况</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">薪资信息</p>
          <p class="con pl20">李四，510921196502182368，主贷人；</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">保单信息</p>
          <p class="con pl20">13829781234</p>
        </div>
      </li>
      <li class="flex">
        <div class="flex">
          <p class="title pl20">企业信息</p>
          <p class="con pl20">13829781234</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
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
