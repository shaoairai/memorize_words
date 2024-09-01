<script setup>
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo.png'

const loginData = ref({
  name: '',
  pw: ''
})
const errLogin = ref(false)

// 登入
const submitForm = () => {
  const nameLowerCase = loginData.value.name.toLowerCase()
  const pwLowerCase = loginData.value.pw.toLowerCase()

  if (
    (nameLowerCase === import.meta.env.VITE_APP_NAME1 ||
      nameLowerCase === import.meta.env.VITE_APP_NAME2) &&
    pwLowerCase === import.meta.env.VITE_APP_PW
  ) {
    localStorage.setItem('memorize_name', loginData.value.name)
    localStorage.setItem('memorize_pw', loginData.value.pw)
    router.push('/')
  } else {
    errLogin.value = true
  }
}
</script>

<template>
  <div
    class="bg-warning vh-100 d-flex justify-content-center align-items-center"
    style="overflow: auto"
  >
    <div class="container w-50">
      <div>
        <div
          class="bg-white rounded-circle mx-auto p-3 mb-3"
          style="box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.5); max-width: 150px"
        >
          <img :src="logo" alt="WordMate" class="w-100" />
        </div>
      </div>
      <h1 class="text-center mb-3">WordMate</h1>
      <hr class="mb-3" style="width: 80%; margin: auto" />
      <label>請輸入暱稱</label>
      <input type="text" class="form-control" v-model="loginData.name" @keyup.enter="submitForm" />
      <label class="mt-3">請輸入密碼</label>
      <input
        type="password"
        class="form-control"
        v-model="loginData.pw"
        @keyup.enter="submitForm"
      />
      <div v-if="errLogin" class="text-danger mt-1 text-end">暱稱或密碼錯誤，請詢問管理員</div>
      <button type="button" class="btn btn-primary mt-3 w-100" @click="submitForm">登入</button>
    </div>
  </div>
  <!-- login_page -->
  <!-- <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="loginData.email"
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="loginData.pw"
          />
          <button type="button" class="formControls_btnSubmit" @click="submitForm">登入</button>
          <RouterLink to="signin" class="formControls_btnLink">註冊帳號</RouterLink>
        </form>
      </div>
    </div>
  </div> -->
</template>
