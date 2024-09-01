<script setup>
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'
import { onMounted, ref } from 'vue'

import { useFirebaseCrud } from '@/utils/firebaseCrud'
const { updateData } = useFirebaseCrud()
import { ref as firebaseRef, onValue } from 'firebase/database'
import { db } from '@/utils/firebase.js'

// 首字大寫
const capitalizeFirstLetter = (string) => {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const name = ref(capitalizeFirstLetter(localStorage.getItem('memorize_name')))
const status = ref(null)
const wordList = ref([])
const createWord = ref({
  enWord: '',
  cnWord: '',
  partOfSpeech: ''
})
const tmp = ref({
  id: null,
  en: '',
  cn: '',
  pos: ''
})

// 新增資料
const addWord = () => {
  if (createWord.value.enWord && createWord.value.cnWord && createWord.value.partOfSpeech) {
    wordList.value.push({
      id: `${createWord.value.enWord}_${new Date().getTime()}`,
      en: createWord.value.enWord,
      cn: createWord.value.cnWord,
      pos: createWord.value.partOfSpeech,
      errCnt: 0
    })
    createWord.value.enWord = ''
    createWord.value.cnWord = ''
    createWord.value.partOfSpeech = ''

    saveList()
  } else {
    alert('請填寫所有欄位')
  }
}

// 暫存修改資料
const editWord = (word) => {
  tmp.value.id = word.id
  tmp.value.en = word.en
  tmp.value.cn = word.cn
  tmp.value.pos = word.pos
  status.value = 'edit'
}

// 修改資料
const confirmEditWord = () => {
  if (tmp.value.en && tmp.value.cn && tmp.value.pos) {
    wordList.value.forEach((item) => {
      if (item.id === tmp.value.id) {
        item.en = tmp.value.en
        item.cn = tmp.value.cn
        item.pos = tmp.value.pos
      }
    })

    // 清空
    tmp.value.id = null
    tmp.value.en = ''
    tmp.value.cn = ''
    tmp.value.pos = ''
    status.value = 'add'
    saveList()
  } else {
    alert('請填寫所有欄位')
  }
}

// 刪除資料
const delWord = (id) => {
  let delItem = ''
  wordList.value.forEach((item) => {
    if (item.id === id) {
      delItem = `${item.en} / ${item.cn}`
    }
  })

  const delChecked = confirm(`是否確定要刪除 ${delItem} ？`)

  if (delChecked) {
    const index = wordList.value.findIndex((item) => item.id === id)
    if (index !== -1) {
      wordList.value.splice(index, 1)
      saveList()
    }
  }
}

// 儲存
const saveList = async () => {
  const saveName = localStorage.getItem('memorize_name')
  const newData = {
    [saveName]: {
      wordList: wordList.value
    }
  }

  try {
    await updateData(newData, '/')
    console.log('資料已成功設置！')
  } catch (error) {
    console.error('設定資料時發生錯誤：', error)
    alert('設定資料失敗！')
  }
}

// 取得資料
const onReadData = () => {
  const saveName = localStorage.getItem('memorize_name')
  onValue(firebaseRef(db), (snapshot) => {
    const data = snapshot.val()
    console.log(data)

    wordList.value = data?.[saveName]?.wordList || []
  })
}

const logout = () => {
  localStorage.clear()
  router.push('/login')
}

onMounted(() => {
  const nameLowerCase = localStorage.getItem('memorize_name')?.toLowerCase()
  const pwLowerCase = localStorage.getItem('memorize_pw')?.toLowerCase()

  const hasName =
    nameLowerCase === import.meta.env.VITE_APP_NAME1 ||
    nameLowerCase === import.meta.env.VITE_APP_NAME2
  const hasPw = pwLowerCase === import.meta.env.VITE_APP_PW

  if (hasName && hasPw) {
    onReadData()
  } else {
    router.push('/login')
  }
})
</script>

<template>
  <!-- ToDo List -->
  <div id="todoListPage" class="bg-warning">
    <nav class="d-flex flex-column flex-sm-row">
      <h2 class="text-center">WordMate</h2>
      <ul class="d-flex justify-content-end">
        <li class="me-3">
          <RouterLink to="/">
            <span>{{ name }} 的英文單字列表</span>
          </RouterLink>
        </li>
        <li @click="logout" style="cursor: pointer">登出</li>
      </ul>
    </nav>

    <div class="container">
      <div class="text-end">
        <RouterLink to="/quizmode">
          <button class="btn btn-primary me-2">Quiz Mode</button>
        </RouterLink>
        <button @click="status = 'add'" class="btn btn-primary">新增</button>
      </div>

      <div
        v-if="status === 'add'"
        class="row align-items-end mt-3 pt-3 rounded-3"
        style="border: 2px solid rgba(0, 0, 0, 0.2)"
      >
        <div class="text-end cursor-pointer" @click="status = null">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
        <div class="col-md-3 mb-3">
          <label for="englishWord" class="form-label">英文</label>
          <input
            type="text"
            id="englishWord"
            class="form-control"
            placeholder="英文"
            v-model="createWord.enWord"
          />
        </div>

        <div class="col-md-3 mb-3">
          <label for="chineseWord" class="form-label">中文</label>
          <input
            type="text"
            id="chineseWord"
            class="form-control"
            placeholder="中文"
            v-model="createWord.cnWord"
          />
        </div>

        <div class="col-md-3 mb-3">
          <label for="partOfSpeech" class="form-label">詞性</label>
          <select id="partOfSpeech" v-model="createWord.partOfSpeech" class="form-select">
            <option disabled value="">請選擇</option>
            <option value="n">名詞</option>
            <option value="v">動詞</option>
            <option value="adj">形容詞</option>
            <option value="adv">副詞</option>
            <option value="prep">介係詞</option>
            <option value="phrase">片語</option>
            <option value="others">其他</option>
          </select>
        </div>

        <div class="col-md-3 mb-3">
          <button @click="addWord" class="btn btn-primary w-100">新增</button>
        </div>
      </div>

      <div
        v-else-if="status === 'edit'"
        class="row align-items-end mt-3 pt-3 rounded-3"
        style="border: 2px solid rgba(0, 0, 0, 0.2)"
      >
        <div class="text-end cursor-pointer" @click="status = null">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
        <div class="col-md-3 mb-3">
          <label for="englishWord" class="form-label">英文</label>
          <input
            type="text"
            id="englishWord"
            class="form-control"
            placeholder="英文"
            v-model="tmp.en"
          />
        </div>

        <div class="col-md-3 mb-3">
          <label for="chineseWord" class="form-label">中文</label>
          <input
            type="text"
            id="chineseWord"
            class="form-control"
            placeholder="中文"
            v-model="tmp.cn"
          />
        </div>

        <div class="col-md-3 mb-3">
          <label for="partOfSpeech" class="form-label">詞性</label>
          <select id="partOfSpeech" v-model="tmp.pos" class="form-select">
            <option disabled value="">請選擇</option>
            <option value="n">名詞</option>
            <option value="v">動詞</option>
            <option value="adj">形容詞</option>
            <option value="adv">副詞</option>
            <option value="prep">介係詞</option>
            <option value="phrase">片語</option>
            <option value="others">其他</option>
          </select>
        </div>

        <div class="col-md-3 mb-3">
          <button @click="confirmEditWord" class="btn btn-primary w-100">修改</button>
        </div>
      </div>
    </div>

    <div class="container vhContainer">
      <div class="">
        <div class="mt-4">
          <h4>單字列表</h4>
          <div>
            <div
              class="position-relative"
              style="overflow: auto"
              :style="[
                status === null ? 'height: calc(100vh - 300px)' : 'height: calc(100vh - 600px)'
              ]"
            >
              <table
                class="table table-hover table-striped rounded"
                style="overflow: auto !important"
              >
                <thead class="position-sticky top-0 start-0" style="z-index: 1">
                  <tr>
                    <th scope="col">序號</th>
                    <th scope="col">英文</th>
                    <th scope="col">中文</th>
                    <th scope="col">詞性</th>
                    <th scope="col">錯誤次數</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(word, index) in wordList" :key="index">
                    <td>{{ (index += 1) }}</td>
                    <td>{{ word.en }}</td>
                    <td>{{ word.cn }}</td>
                    <td>{{ word.pos }}</td>
                    <td>{{ word.errCnt }}</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div @click="editWord(word)" class="text-primary me-2 cursor-pointer">
                          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </div>
                        <div @click="delWord(word.id)" class="text-danger fs-5 cursor-pointer">
                          <font-awesome-icon icon="fa-solid fa-xmark" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  border-collapse: separate; /* 保留單元格間距，以顯示圓角效果 */
  border-spacing: 0; /* 讓表格無內建間距 */
  border-radius: 0.5rem; /* 設定整個表格的圓角 */
  overflow: hidden; /* 確保圓角顯示效果 */
}

.table th,
.table td {
  border-top: none; /* 移除垂直分隔線 */
}

.table th:first-child {
  border-top-left-radius: 0.5rem; /* 左上角圓角 */
}

.table th:last-child {
  border-top-right-radius: 0.5rem; /* 右上角圓角 */
}

.table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 0.5rem; /* 左下角圓角 */
}

.table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 0.5rem; /* 右下角圓角 */
}

.table th {
  background-color: #f8f9fa; /* 表頭背景色 */
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1; /* 滑鼠懸停行的背景色 */
}
</style>
