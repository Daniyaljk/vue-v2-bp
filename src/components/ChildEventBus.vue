<script>
import eventBus from "@/services/eventBus";

export default {
  name : 'ChildEventBus',
  props : {
    usersList : Array,
  },
  methods : {
    removeHandler (userId){
      eventBus.$emit('remove_user',userId)
    }
  }
}
</script>

<template>
<ul>
  <li v-for="user in usersList" :key="user.id">
    {{user.name}}
    <button @click="removeHandler(user.id)">click</button>
  </li>
</ul>
</template>

<style>
li {
  list-style: none;
}
</style>
