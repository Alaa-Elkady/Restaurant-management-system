<template>
  <div class="container-list">
    <img class="logo" src='/src/assets/2d5e822701a245a792460d7725b6862a.png'>
    <router-link  to="/" class="link">
      Home
    </router-link>
    <router-link to="/Add" class="link">
      Add Restaurant
    </router-link>
    <a href="" class="link" @click="logout">
      Log Out
    </a> 
  </div>
</template>

<script >
export default {
  name:"Header",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:"LogIn"});
    }
  }

}
</script>

<style scoped>
.container-list
{
  display: flex;
  margin: 0;
  font-family: sans-serif;
  padding: 10px ;
  align-items: center;
}
.link
{
  color: green;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
}
.link:hover
{
  color: darkred;

}
.logo
{
  margin-right: 20px;
  width: 50px;
}
</style>