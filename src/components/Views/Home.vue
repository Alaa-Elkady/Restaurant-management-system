<template>
  <page-header></page-header>
  <h1 class="text-focus-in">
  Hello {{ this.name }} On Home Page
  </h1>
  <div class="card-container">
    <div v-for="res in restaurant" :key="res.id" class="card shadow-drop-2-center">
      <img :src="res.rest_img">
      <h3> {{ res.rest_name }}</h3>
      {{ res.rest_loc }}
      <br> 
      Contact : {{ res.rest_phone }} / <a :href="res.rest_link ">Website</a>
      <div class="actions">
        <router-link :to="'/Update/'+res.id">Update</router-link>
        <a href="" style="color:red;margin: 10px;" @click="Delete(res.id)">Delete</a>
     </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../UI/PageHeader.vue';
import axios from 'axios';
export default {
    name:"Home",
    components:{
      PageHeader
    },
    data(){
      return{
        name:"",
        restaurant:[]
      }
    },
    methods:{
      // delete restaurant using id
      async Delete(id){
        let result=await axios.delete("http://localhost:3000/Restaurants/"+ id)
        if(result.status==200){
          this.loadData()
      } 
    },
    async loadData(){

     // check if he isn't a user guide him to sign up page and pass user name
     let user=localStorage.getItem("user-info");
     this.name =JSON.parse(user).name;
     if(!user){
      this.$router.push({name:"SignUp"})
    }
    // load data in home page
    let result= await axios.get('http://localhost:3000/Restaurants')
    this.restaurant=result.data;
    }
  },
  async mounted(){
    this.loadData();
  }
}
</script>

<style>
.action
{
  display: inline;
}
</style>