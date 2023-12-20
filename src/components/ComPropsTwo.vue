<script>


export default {
  name : 'ComPropsTwo',
  props : {
    name : String,
  },
  methods:{
    changeName(){
      this.$emit('changeName','new data')
    }
  }
}
</script>

<template>
<div>
  <h1>{{name}}</h1>
  <button @click="changeName">change</button>
</div>
</template>

<style>

</style>
