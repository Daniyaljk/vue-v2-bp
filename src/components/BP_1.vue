<script>


export default {
  name: 'BP_1',
  data(){
    return{
      showEle : true,
      dataList : [
        {id : 1 , name : "dani"},
        {id : 2 , name : "ali"},
        {id : 3 , name : "akbar"},
        {id : 4 , name : "hossein"},
      ]
    }
  },
  methods : {

  }

}
</script>

<template>
  <div>
    <div>
      <button @click="showEle = !showEle">chane</button>
      <p v-if="showEle">start</p>
      <p v-else>finish</p>
    </div>
    <div>
      <button @click="showEle = !showEle">chane</button>
      <p v-show="showEle">start</p>
    </div>

    <div>
      <ul>
        <li v-for="(data,i) in dataList" :key="data.id">{{i}} : {{data.name}}</li>
      </ul>
    </div>
  </div>
</template>

<style >

</style>
