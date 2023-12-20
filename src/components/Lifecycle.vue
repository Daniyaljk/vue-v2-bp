<script>


export default {
  name: 'Lifecycle_all',
  data(){
    return{
      counter : 0,
    }
  },
  beforeCreate() {
    console.log("قبل از ایجاد شدن")
  },
  created() {
    console.log('ایجاد شد')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('قبل از آپدیت')
  },
  updated() {
    console.log('آپدیت شد')
  },
  beforeDestroy() {
    console.log('قبل از نابودی')
  },
  destroyed() {
    console.log('نابود شد')
  },

  methods:{
    destroyHandler(){
      this.$destroy()
    },
    counterPlus(){
      this.counter++
    }
  }
}
</script>

<template>
<div>
  <h1>lifecycle</h1>

  <button @click="destroyHandler">destroyHandler</button>
  <button @click="counterPlus">{{counter}}</button>
</div>
</template>

<style scoped>

</style>
