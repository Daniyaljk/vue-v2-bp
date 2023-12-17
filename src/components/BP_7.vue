<script>


export default {
  name: 'BP_7',
  data(){
    return{

    }
  },
  methods:{
    formHandler : function (){
      console.log("form submitted.")
    },
    clickHandler : function (text){
      console.log(text)
    },
    inputHandler: function (){
      console.log("clicked...")
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="formHandler">
      <label>
        اسم:
        <input type="text">
      </label>
    </form>

    <a href="https://google.com" target="_blank" @click.stop.prevent="formHandler">hello</a>

    <div style="width: 200px;height: 200px;background-color: red;" @click.self="clickHandler(`grand-father`)">
      <div style="width: 100px;height: 100px;background-color: purple;" @click.self="clickHandler(`father`)">
        <div style="width: 50px;height: 50px;background-color: yellow;" @click.self="clickHandler(`child`)"></div>
      </div>
    </div>

    <label>
      <input type="text" @keyup.enter="inputHandler"/>
    </label>

    <label>
      <input type="text" @keyup.ctrl.space="inputHandler"/>
    </label>
  </div>
</template>

<style >

</style>
