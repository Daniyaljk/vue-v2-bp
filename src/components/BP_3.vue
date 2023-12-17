<script>


export default {
  name: 'BP_3',
  data(){
    return{
      test : 'سلام',
      yellowBg : 'yellow',
      cssCollection : {
        backgroundColor : 'purple',
        fontSize : '30px'
      },
      cssCollection2 : {
        color : 'white'
      },
      isRed : false,
      listColor : [
        {color : "red"},
        {color : "purple"},
        {color : "yellow"},
        {color : "blue"},
      ],
      headerColor : "black"
    }
  },
  methods : {
    changeColorHeader : function (color){
      // console.log(color)
      this.headerColor = color
    }
  }

}
</script>

<template>
  <div>
    <div>
      <p :style="{backgroundColor : 'red'}">{{test}}</p>
      <p :style="{backgroundColor : yellowBg}">{{test}}</p>
      <p :style="cssCollection">{{test}}</p>
      <p :style="[cssCollection,cssCollection2]">{{test}}</p>

      <p class="redBox">hello</p>
      <p :class="{redBox : isRed,purpleBox : !isRed}">hello</p>
    </div>

    <div style="margin: 30px;font-size: 25px;font-weight: bold">
      <p :style="{color : headerColor}">کفش مورد نظر شما</p>

      <div>
        <div
            v-for="({color,i}) in listColor"
            style="width: 20px;height: 20px;margin: 5px"
            :style="{backgroundColor : color}"
            @mouseenter="changeColorHeader(color)"
            :key="i"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<style >

</style>
