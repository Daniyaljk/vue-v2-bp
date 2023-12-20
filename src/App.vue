<template>
  <div>
<!--    <BP_0></BP_0>-->
<!--    <BP_1></BP_1>-->
<!--    <BP_2></BP_2>-->
<!--    <BP_3></BP_3>-->
<!--    <BP_4></BP_4>-->
<!--    <BP_5></BP_5>-->
<!--    <BP_6></BP_6>-->
<!--    <BP_7></BP_7>-->
<!--    <Lifecycle_all></Lifecycle_all>-->
<!--    <ComPropsOne :name="name" :changeHandler="changeName"></ComPropsOne>-->
<!--    <ComPropsTwo :name="name" @changeName="changeWithParent($event)"></ComPropsTwo>-->
<!--    <BootstrapFormBP1></BootstrapFormBP1>-->
<!--    <EventBusBP></EventBusBP>-->
<!--    <MyMixin></MyMixin>-->
<!--    <CustomDirective></CustomDirective>-->
    <SlotComponent>
      <h1>all slot</h1>

      <h3 slot="att">attractive component</h3>
    </SlotComponent>
    <TodoListVuex></TodoListVuex>
  </div>
</template>


<script>
// import BP_0 from './components/BP-0.vue';
// import BP_1 from "@/components/BP_1.vue";
// import BP_2 from "@/components/BP_2.vue";
// import BP_3 from "@/components/BP_3.vue";
// import BP_4 from "@/components/BP_4.vue";
// import BP_5 from "@/components/BP_5.vue";
// import BP_6 from "@/components/BP_6.vue";
// import BP_7 from "@/components/BP_7.vue";
// import Lifecycle_all from '@/components/Lifecycle.vue'
// import ComPropsOne from "@/components/ComPropsOne.vue";
// import ComPropsTwo from "@/components/ComPropsTwo.vue";
// import BootstrapFormBP1 from '@/components/bootstrap/FormBP.vue';
// import EventBusBP from "@/components/EventBusBP.vue";
// import MyMixin from "@/components/MyMixin.vue";
// import CustomDirective from '@/components/Directive.vue'
import SlotComponent from "@/components/SlotComponent.vue";
import TodoListVuex from "@/components/TodoListVuex.vue";

export default {
  name: 'App',
  data(){
    return {
      name : 'akbar'
    }
  },
  components: {
    // BP_0,
    // BP_1,
    // BP_2,
    // BP_3,
    // BP_4,
    // BP_5,
    // BP_6,
    // BP_7,
    // Lifecycle_all,
    // ComPropsOne,
    // ComPropsTwo,
    // BootstrapFormBP1
    // EventBusBP,
    // MyMixin,
    // CustomDirective
    SlotComponent,
    TodoListVuex
  },
  methods:{
    changeName(){
      this.name = "dani"
    },
    changeWithParent(data){
      this.name = data;
    }
  }
}
</script>

<style>

</style>
