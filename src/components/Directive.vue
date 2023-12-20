<script>

// bind(el, binding, vnode) {
//   // اجرا می‌شود هنگام اتصال دایرکتیو به المان DOM
// },
// inserted(el, binding, vnode) {
//   // اجرا می‌شود هنگامی که المان DOM وارد DOM اصلی می‌شود
// },
// update(el, binding, vnode, oldVnode) {
//   // اجرا می‌شود هنگامی که المان DOM به‌روزرسانی می‌شود
// },
// componentUpdated(el, binding, vnode, oldVnode) {
//   // اجرا می‌شود بعد از اینکه کل مؤلفه ویرایش شده است
// },
// unbind(el, binding, vnode) {
//   // اجرا می‌شود هنگامی که دایرکتیو از المان DOM حذف می‌شود
// }

export default {
  name : 'CustomDirective',
  directives : {
    testRed :{
      bind(el){
        console.log("el",el)
      }
    }
  }
}
</script>

<template>
<div>
  <h1 v-test-red>custom directive</h1>
</div>
</template>

<style>

</style>
