<script>
import logMixin from "@/services/mixin";

export default {
  name : 'MyMixin',
  mixins : [logMixin],
  created() {
    this.logMessage("hello world")
  }
}
</script>

<template>
<div>
  <h1>my mix in</h1>
</div>
</template>

<style>

</style>
