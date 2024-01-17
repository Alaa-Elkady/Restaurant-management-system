<template>
  <page-header></page-header>
  <h1 class="text-focus-in">
     Add New Restaurant Page
  </h1>
  <div class="add-container">
    <input class="input" v-model="rest_name" type="text" placeholder="Restaurant Name">
    <input class="input" v-model="rest_loc" type="text" placeholder="Restaurant Location">
    <input class="input" v-model="rest_link" type="text" placeholder="Restaurant Link" >
    <input class="input" v-model="rest_phone" type="text" placeholder="Restaurant Phone" >
    <input class="input" v-model="rest_img" type="text" placeholder="Restaurant Image">
    <button @click="Add">Add New Restaurant</button>
  </div>
</template>
  
<script>
import axios from 'axios';
import PageHeader from '../UI/PageHeader.vue';
export default {
  name:"Add",
  components:{
      PageHeader
    },
  data(){
    return{
        name:"",
        rest_name:"",
        rest_loc:"",
        rest_img:"",
        rest_link:"",
        rest_phone:""
      }
    },
  mounted(){
    // check if he isn't a user guide him to sign up page
    let user=localStorage.getItem("user-info");
    this.name =JSON.parse(user).name;
    if(!user){
      this.$router.push({name:"SignUp"});
    }
  },
  methods:{
    // adds restaurant info
    async Add() {
      let result=await axios.post("http://localhost:3000/Restaurants",{
        rest_name:this.rest_name,
        rest_loc:this.rest_loc,
        rest_phone:this.rest_phone,
        rest_link:this.rest_link,
        rest_img:this.rest_img
      });
    console.log(result);
    if(result.status==201){
      localStorage.setItem('user-info',JSON.stringify(result.data));
      this.$router.push({name:"Home"})
    }
  }
}
}
</script>
  
<style>
</style>