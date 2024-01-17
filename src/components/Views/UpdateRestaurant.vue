<template>
  <page-header></page-header>
  <h1 class="text-focus-in">
    Update Restaurant Page
  </h1>
  <div class="update-container">
    <input class="input" v-model="restaurant.rest_name" type="text" placeholder="Restaurant Name">
    <input class="input" v-model="restaurant.rest_loc" type="text" placeholder="Restaurant Location">
    <input class="input" v-model="restaurant.rest_link" type="text" placeholder="Restaurant Link" >
    <input class="input" v-model="restaurant.rest_phone" type="text" placeholder="Restaurant Phone" >
    <input class="input" v-model="restaurant.rest_img" type="text" placeholder="Restaurant Image">
    <button @click="Update">Update Restaurant</button>
  </div>
</template>
  
<script>
import axios from 'axios';
import PageHeader from '../UI/PageHeader.vue';
export default {
  name:"Update",
  components:{
    PageHeader
  }, 
  data(){
    return{
      restaurant:{
      rest_name:"",
      rest_loc:"",
      rest_img:"",
      rest_link:"",
      rest_phone:""
    }
  }
},
  methods:{
    // update restaurant info and returns to home page
    async Update(){
      let result=await axios.put("http://localhost:3000/Restaurants/"+ this.$route.params.id,{
        rest_name:this.restaurant.rest_name,
        rest_loc:this.restaurant.rest_loc,
        rest_phone:this.restaurant.rest_phone,
        rest_link:this.restaurant.rest_link,
        rest_img:this.restaurant.rest_img
      });
      if(result.status==200){
        localStorage.setItem('user-info',JSON.stringify(result.data));
        this.$router.push({name:"Home"});
      }
    }
  },
  async mounted(){
    // pass info to inputs of specific id
    const result =await axios.get("http://localhost:3000/Restaurants/"+ this.$route.params.id);
    this.restaurant=result.data;
  }
}
</script>
  
<style>
</style>