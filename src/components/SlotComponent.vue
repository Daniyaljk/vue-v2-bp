<script>


export default {
  name : 'SlotComponent',
}
</script>

<template>
<div>
  <h1>slot component</h1>

  <slot></slot>
  <slot name="att"></slot>
</div>
</template>

<style scoped>

</style>
