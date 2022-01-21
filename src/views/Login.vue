<template>
  <div class="login" :style="'background-image:url('+ Background +');'">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <h3 class="title">
        USC Covid Admin System
      </h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="Username">
<!--          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />-->
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="Password" @keyup.enter.native="handleLogin">
<!--          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />-->
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" auto-complete="off" placeholder="Verification" style="width: 63%" @keyup.enter.native="handleLogin">
<!--          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />-->
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0 0 25px 0;">
        Remember me
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">Login</span>
          <span v-else>Loading...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  Bottom  -->
<!--    <div v-if="$store.state.settings.showFooter" id="el-login-footer">-->
<!--      <span v-html="$store.state.settings.footerTxt" />-->
<!--      <span> ⋅ </span>-->
<!--      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ $store.state.settings.caseNumber }}</a>-->
<!--    </div>-->
  </div>
</template>

<script>
import Background from "@/assets/images/background.jpg"

export default {
  name: "Login",
  data(){
    return{
      loginForm: {},
      loginRules: {},
      Background: Background,
      codeUrl: ""
    }
  },
  methods:{
    getCode(){

    },
    handleLogin(){

    }
  }
}
</script>

<style scoped>

</style>