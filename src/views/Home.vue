<template>
  <div>
    <h2>HOME</h2>
    <el-button @click.native.prevent="logout">Log out</el-button>
    <h6>Make main area and sidebar in this page</h6>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods:{
    logout(){
      this.$store.dispatch('LogOut').then(() =>{
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style scoped>

</style>
