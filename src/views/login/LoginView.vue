<script setup>
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const loginData = ref({
  email: '',
  pw: ''
})

// 登入
const submitForm = () => {
  const data = JSON.stringify({
    email: loginData.value.email,
    password: loginData.value.pw
  })

  const config = {
    method: 'POST',
    url: `${import.meta.env.VITE_APP_BASE_URL}/users/sign_in`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }

  try {
    axios(config)
      .then((res) => {
        // 存 token
        document.cookie = `token=${res.data.token}; path=/` // 將 token 存入 cookie
        localStorage.setItem('nickname', res.data.nickname)

        router.push('/todolist')
      })
      .catch((err) => {
        console.log(err.response)
        alert('登入失敗，請確認帳號密碼是否正確')
      })
  } catch {
    alert('登入失敗，請稍後再試')
  }
}

// 自動登入
const autoLogin = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const config = {
    method: 'GET',
    url: `${import.meta.env.VITE_APP_BASE_URL}/users/checkout`,
    headers: {
      Authorization: token
    }
  }

  try {
    axios(config)
      .then((res) => {
        router.push('/todolist')
      })
      .catch((err) => {
        console.log(err.response)
        console.log('自動登入失敗')
      })
  } catch {
    console.log('自動登入失敗，請稍後再試')
  }
}

onMounted(() => {
  autoLogin()
})
</script>

<template>
  <!-- login_page -->
  <div id="loginPage" class="bg-yellow">
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
  </div>
</template>
