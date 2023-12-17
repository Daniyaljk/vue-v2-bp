<script>


export default {
  name: 'BP_5',
  data(){
    return{
      GB : 0,
      MB : 10
    }
  },
  methods : {

  },
  watch : {
    GB : function (){
      console.log("GB change")
      this.MB = this.GB * 1024
    },
    MB : function (){
      console.log("MB change")
    }
  }

}
</script>

<template>
  <div>
    <label>
      <input v-model="GB" />
    </label>

    <p>{{MB}}</p>
  </div>
</template>

<style >

</style>
