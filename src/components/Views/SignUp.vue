<template>
  <h1 class="text-focus-in">
    RESTAURANTS MANAGEMENT SYSTEM 
  </h1>
  <div class="container">
    <img class="logo" src='/src/assets/2d5e822701a245a792460d7725b6862a.png'>
    <div class="register">
      <h1>SignUp</h1>
      <input type="text" v-model="name" placeholder="Enter Name" class="input"/>
      <input type="email" v-model="email" placeholder="Enter Email" class="input"/>
      <input type="password" v-model="password" placeholder="Enter Password" class="input"/>
      <button  @click="SignUp">Sign Up</button>
      <router-link to="/LogIn" ><button >Login</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default{
  name: "SignUp",
  data()
  {
    return {
      name: "",
      email: "",
      password: ""
    }
    },
  methods:{
    // set new email ,password and name
    async SignUp() {
     let result=await axios.post("http://localhost:3000/users",{
      name:this.name,
      email:this.email,
      password:this.password
    });
    console.log(result);
    if(result.status==201){
      // save data at local storage
      localStorage.setItem('user-info',JSON.stringify(result.data));
      this.$router.push({name:"Home"})
    }
    }
  },
  mounted(){
    // check if he is a user guide him to home page
    let user=localStorage.getItem("user-info");
    if(user){
      this.$router.push({name:"Home"})
    }
  }
}
</script>

<style scoped>


</style>