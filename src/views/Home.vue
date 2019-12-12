<template>
  <div class="home">
    <span> {{pointsVal}}</span>

      <input ref="val" type="range" name="points" data-show-value="true"  @input="valChange" :step="step" :value="val" :min="minVal" :max="maxVal" class="scroll">
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxVal: 100,
      minVal: 0,
      step: 5,
      val: 0,
      pointsVal: 0
    }
  },
  methods: {
    valChange (val) {
      console.log(this.$refs.val.value)
      this.pointsVal = this.$refs.val.value
    }
  }
}
</script>
<style scoped>
.scroll{
  width: 500px;
  height: 20px;
  background-color: #424bd9;
}
</style>