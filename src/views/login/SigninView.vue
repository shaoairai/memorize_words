<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const signinData = ref({
  email: '',
  pw: '',
  nickname: ''
})

// 註冊
const submitForm = () => {
  if (signinData.value.email && signinData.value.pw && signinData.value.nickname) {
    const data = JSON.stringify({
      email: signinData.value.email,
      password: signinData.value.pw,
      nickname: signinData.value.nickname
    })

    const config = {
      method: 'POST',
      url: `${import.meta.env.VITE_APP_BASE_URL}/users/sign_up`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    try {
      axios(config)
        .then((res) => {
          alert('註冊成功')
          router.push('/')
        })
        .catch((err) => {
          console.log(err.response)
          alert('帳號已經存在！')
          router.push('/')
        })
    } catch {
      alert('註冊失敗！')
      router.push('/')
    }
  } else {
    alert('欄位請填寫完整')
  }
}
</script>

<template>
  <!-- sign up -->
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
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
        <form class="formControls">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="signinData.email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="signinData.nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="signinData.pw"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
          />
          <button type="button" class="formControls_btnSubmit" @click="submitForm">註冊帳號</button>

          <RouterLink to="/" class="formControls_btnLink">登入</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>
