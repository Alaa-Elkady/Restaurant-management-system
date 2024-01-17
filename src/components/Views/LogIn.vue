<template>
    <h1 class="text-focus-in">
        RESTAURANTS MANAGEMENT SYSTEM 
    </h1>
    <div class="container">
        <img class="logo" src='/src/assets/2d5e822701a245a792460d7725b6862a.png'>
        <div class="login">
            <h1>Login</h1>
            <input type="email" v-model="email" placeholder="Enter Email" class="input"/>
            <input type="password" v-model="password" placeholder="Enter Password" class="input"/>
            <button  @click="LogIn">Login</button>
            <router-link to="/SignUp"><button>Sign Up</button></router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"LogIn",
    data()
    {
        return{
            email:"",
            password:""
        }
    },
    methods:
    {
        async LogIn(){
            // retrive data from db and set it in local storage
            let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result)
            if(result.status==200 && result.data.length>0){
                localStorage.setItem('user-info',JSON.stringify(result.data[0]));
                this.$router.push({name:"Home"})
            }
        }

    },


}
</script>

<style>
</style>