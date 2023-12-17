<script>


export default {
  name: 'BP_6',
  data(){
    return{
      val: ''
    }
  },
  methods : {
    changeName : function (){
      this.val = this.$refs.nameInput.value
    }
  }
}
</script>

<template>
  <div>
    <label>
      <input type="text" ref="nameInput" @keyup="changeName">
    </label>

    <p>{{val}}</p>
  </div>
</template>

<style >

</style>
