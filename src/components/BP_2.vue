<script>


export default {
  name: 'BP_2',
  data(){
    return{
      valueUser: "",
      dataListUser: [
        {id: 1, name: "Ali"},
        {id: 2, name: "Dani"},
        {id: 3, name: "Sara"},
      ],
      editEnable: false,
      editName: "",
      idEditName: null,
    }
  },
  methods : {
    addUser: function () {
      const newList = [{id: Math.floor(Math.random() * 1000000), name: this.valueUser}, ...this.dataListUser];

      this.dataListUser = newList;
      this.valueUser = "";
    },
    removeUser: function (id) {
      const filtered = this.dataListUser.filter((user) => user.id !== id);

      this.dataListUser = filtered;
    },
    editUser: function (id) {
      this.editEnable = true;

      const findById = this.dataListUser.find((user) => user.id === id);

      this.editName = findById.name;
      this.idEditName = findById.id;
    },
    saveEditName: function () {
      const findIndexById = this.dataListUser.findIndex((user)=> user.id === this.idEditName);

      this.dataListUser[findIndexById].name = this.editName;
      // const index = this.dataListUser.findIndex(user => user.id === this.idEditName);
      // this.$set(this.dataListUser, index, { ...this.dataListUser[index], name: this.editName });

      this.editEnable = false;
      this.editName = "";
      this.idEditName = null;
    },
    cancelEditName: function () {
      this.editEnable = false;
      this.editName = "";
      this.idEditName = null;
    }
  }

}
</script>

<template>
  <div>
    <div>
      <input
          type="text"
          v-model="valueUser"
      />
      <button @click="addUser">اضافه کردن تسک</button>
    </div>

    <div>
      <div v-for="(user) in dataListUser" :key="user.id">
        <p>{{user.name}}</p>
        <button @click="removeUser(user.id)">حذف</button>
        <button @click="editUser(user.id)">ویرایش</button>
      </div>
    </div>

    <div style="margin-top: 10px" v-if="editEnable">
      <input type="text" v-model="editName"/>
      <button @click="saveEditName">ذخیره</button>
      <button @click="cancelEditName">لغو</button>
    </div>
  </div>
</template>

<style >

</style>
