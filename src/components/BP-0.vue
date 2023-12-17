<script>


export default {
  name: 'BP_0',
  data(){
    return{
      counter : 0,
      name : '',
      typePass : 'password',
      testElement : "<h1>hello world</h1>",
      hrefGoogle : "google.com",
      family : "sadeghvand"
    }
  },
  methods : {
    plusCounter : function (){
      this.counter++
    },
    minusCounter : function (){
      this.counter--
    },
    changeName : function (e){
      this.name = e.target.value
    },
    showPass: function (){
      this.typePass = 'text'
    },
    unShowPass : function (){
      this.typePass = 'password'
    }
  }

}
</script>

<template>
  <div>
    <input :type="typePass"/>
    <button @click="showPass">show</button>
    <button @click="unShowPass">unShow</button>

    <div v-html="testElement"></div>

    <a :href="hrefGoogle">google</a>
  </div>
</template>

<style >

</style>
