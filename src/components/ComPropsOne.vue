<script>


export default {
  name : 'ComPropsOne',
  props : {
    name : String,
    changeHandler : Function,
  }
}
</script>

<template>
<div>
  <h1>com props one</h1>

  <p>{{name}}</p>
  <button @click="changeHandler">change name</button>
</div>
</template>

<style>

</style>
