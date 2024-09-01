<script setup>
import { RouterView, RouterLink } from 'vue-router'
import ListAll from './pages/ListAll.vue'
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const nickname = ref(localStorage.getItem('nickname'))
const todolistData = ref([])
const content = ref('')
const spinner = ref(false)

// 登出
const logout = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const config = {
    method: 'POST',
    url: `${import.meta.env.VITE_APP_BASE_URL}/users/sign_out`,
    headers: {
      Authorization: token
    }
  }

  try {
    axios(config)
      .then((res) => {
        localStorage.clear()

        router.push('/')
      })
      .catch((err) => {
        console.log(err.response)
        alert('登出失敗，請稍後再試')
      })
  } catch {
    alert('登出失敗，請稍後再試')
  }

  router.push('/')
}

// 取得資料
const getTodolistData = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const config = {
    method: 'GET',
    url: `${import.meta.env.VITE_APP_BASE_URL}/todos`,
    headers: {
      Authorization: token
    }
  }

  try {
    axios(config)
      .then((res) => {
        todolistData.value = res.data.data
      })
      .catch((err) => {
        console.log(err.response)
      })
  } catch {
    alert('取得失敗，請稍後再試')
  }
}

// 加入資料
const postTodolistData = () => {
  if (content.value !== '') {
    spinner.value = true
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

    const data = JSON.stringify({
      content: content.value
    })

    const config = {
      method: 'POST',
      url: `${import.meta.env.VITE_APP_BASE_URL}/todos`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      data: data
    }

    try {
      axios(config)
        .then((res) => {
          console.log(res)
        })
        .then(() => {
          content.value = ''
          getTodolistData()

          spinner.value = false
        })
        .catch((err) => {
          console.log(err.response)
        })
    } catch {
      alert('新增失敗，請稍後再試')
    }
  }
}

// 修改資料狀態
const statusTodolistData = (id) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const data = JSON.stringify({
    id: id
  })

  const config = {
    method: 'PATCH',
    url: `${import.meta.env.VITE_APP_BASE_URL}/todos/${id}/toggle`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    data: data
  }

  try {
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        getTodolistData()
      })
      .catch((err) => {
        console.log(err.response)
      })
  } catch {
    alert('新增失敗，請稍後再試')
  }
}

// 修改資料
const putTodolistData = (tmp) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const data = JSON.stringify({
    content: tmp.content
  })

  const config = {
    method: 'PUT',
    url: `${import.meta.env.VITE_APP_BASE_URL}/todos/${tmp.id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    data: data
  }

  try {
    axios(config)
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        getTodolistData()
      })
      .catch((err) => {
        console.log(err.response)
      })
  } catch {
    alert('修改失敗，請稍後再試')
  }
}

// 刪除資料
const delTodolistData = (id) => {
  const checkedDel = confirm('是否確認刪除？')
  if (checkedDel) {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')

    const config = {
      method: 'DELETE',
      url: `${import.meta.env.VITE_APP_BASE_URL}/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }

    try {
      axios(config)
        .then((res) => {
          console.log(res)
        })
        .then(() => {
          getTodolistData()
        })
        .catch((err) => {
          console.log(err.response)
        })
    } catch {
      alert('刪除失敗，請稍後再試')
    }
  }
}

onMounted(() => {
  getTodolistData()
})
</script>

<template>
  <!-- ToDo List -->
  <div id="todoListPage" class="bg-half">
    <nav>
      <h2>ONLINE TODO LIST</h2>
      <!-- <h1>
        <RouterLink to="/todolist">ONLINE TODO LIST</RouterLink>
      </h1> -->
      <ul>
        <li class="todo_sm me-3">
          <RouterLink to="/todolist">
            <span>{{ nickname }}的代辦</span>
          </RouterLink>
        </li>
        <li @click="logout" style="cursor: pointer">登出</li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <div class="inputBox">
          <input type="text" placeholder="請輸入待辦事項" v-model="content" />
          <a
            @click.prevent="postTodolistData"
            class="d-flex align-items-center justify-content-center"
            style="cursor: pointer"
            :style="{
              opacity: content !== '' ? 1 : 0.5,
              cursor: content !== '' ? 'pointer' : 'auto'
            }"
            v-if="!spinner"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="text-white" />
          </a>
          <a
            class="d-flex align-items-center justify-content-center"
            style="cursor: pointer"
            :style="{
              opacity: content !== '' ? 1 : 0.5,
              cursor: content !== '' ? 'pointer' : 'auto'
            }"
            v-if="spinner"
          >
            <font-awesome-icon icon="fa-solid fa-hourglass-start" />
          </a>
        </div>
        <div class="todoList_list">
          <ul class="todoList_tab">
            <li><RouterLink to="/todolist" exact-active-class="active">全部</RouterLink></li>
            <li>
              <RouterLink to="/todolist/undone" exact-active-class="active">待完成</RouterLink>
            </li>
            <li><RouterLink to="/todolist/done" exact-active-class="active">已完成</RouterLink></li>
          </ul>
          <RouterView
            :todolistData="todolistData"
            @delTodolistData="delTodolistData"
            @statusTodolistData="statusTodolistData"
            @putTodolistData="putTodolistData"
          ></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>
