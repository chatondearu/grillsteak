<template>
  <div class="panel">
    <slot name="header"></slot>
    <slot name="content" class="content"></slot>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.panel {
  background-color: #bab3b2;
  border-radius: 5px;
}
</style>
