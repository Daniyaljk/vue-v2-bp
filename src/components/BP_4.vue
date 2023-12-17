<script>


export default {
  name: 'BP_4',
  data(){
    return{
      a : 0,
      b : 0,
      main : 10,
    }
  },
  methods : {

  },
  computed : {
    mainA : function (){
      console.log("a change")
      return this.main + this.a;
    },
    mainB : function (){
      console.log("b change")
      return this.main + this.b;
    }
  }

}
</script>

<template>
  <div>
    <button @click="a++">{{a}}</button>
    <button @click="b++">{{b}}</button>

    <p>a+main =>{{mainA}}</p>
    <p>b+main =>{{mainB}}</p>
  </div>
</template>

<style >

</style>
