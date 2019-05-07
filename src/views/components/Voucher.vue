<template>
  <ul class="flex img_list">
    <li>
      <img src="~@img/xie_yi.png" alt>
      <p>的士票</p>
    </li>
    <li>
      <img src="~@img/zhang_hu_shou_zhi.png" alt>
      <p>的士票</p>
    </li>
    <li>
      <img src="~@img/logo.png" alt>
      <p>的士票</p>
    </li>
    <li>
      <img src="~@img/logo.png" alt>
      <p>的士票</p>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.img_list {
  flex-wrap: wrap;
  li {
    width: 100px;
    height: 85px;
    padding-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
    text-align: center;
    position: relative;
    margin-bottom: 10px;
    img {
      max-width: 90px;
      max-height: 75px;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 7px;
      width: 84px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
