<script>
import eventBus from "@/services/eventBus";
import ChildEventBus from "@/components/ChildEventBus.vue";
export default {
  name : 'EventBusBp',
  components: {ChildEventBus},
  data(){
    return {
      users : [
        {id : 1,name : 'dani'},
        {id : 2,name : 'akbar'},
        {id : 3,name : 'sara'},
        {id : 4,name : 'naser'},
      ]
    }
  },
  created() {
    eventBus.$on('remove_user',(data)=>{
      console.log('user id :',data)
    })
  }
}
</script>

<template>
  <div>
    <h1>users list</h1>
    <ChildEventBus :users-list="users"></ChildEventBus>
  </div>
</template>

<style>

</style>
