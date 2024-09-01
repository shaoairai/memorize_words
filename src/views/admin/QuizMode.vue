<script setup>
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'
import { onMounted, onUnmounted, ref, watch } from 'vue'

import { useFirebaseCrud } from '@/utils/firebaseCrud'
const { updateData } = useFirebaseCrud()
import { ref as firebaseRef, onValue } from 'firebase/database'
import { db } from '@/utils/firebase.js'
import { computed } from 'vue'

const nickname = ref(localStorage.getItem('nickname'))
const todolistData = ref([])
const content = ref('')
const spinner = ref(false)

const status = ref(null)

const wordList = ref([])
const wordListOri = ref([])

const drawnWords = ref([])
const currentWord = ref('')
const started = ref(false)
const showEnglish = ref(true)
const showChinese = ref(true)
// 錯幾次的才放入
const howmanyErrStart = ref(0)

const isListComplete = computed(() => drawnWords.value.length === wordList.value.length)

const starting = () => {
  drawNextWord()
}

// 監聽 howmanyErrStart 的變動
watch(howmanyErrStart, (newValue) => {
  if (newValue === '') {
    howmanyErrStart.value = 0
  }

  wordList.value = JSON.parse(JSON.stringify(wordListOri.value)).filter(
    (item) => item.errCnt >= newValue
  )
})

// 不重複
const drawNextWord = () => {
  if (isListComplete.value) return

  if (!started.value) {
    started.value = true
  }

  const remainingWords = wordList.value.filter(
    (word) => drawnWords.value.findIndex((drawnWord) => drawnWord.id === word.id) === -1
  )

  const randomIndex = Math.floor(Math.random() * remainingWords.length)
  currentWord.value = remainingWords[randomIndex]
  drawnWords.value.push(currentWord.value)
}

const resetList = () => {
  drawnWords.value = []
  currentWord.value = {}
  started.value = false
}

const knowWord = () => {
  // 若全部完成則重設
  if (isListComplete.value) {
    resetList()
  } else {
    drawNextWord()
  }
}

const dontKnowWord = () => {
  wordListOri.value.forEach((item) => {
    if (item.id === currentWord.value.id) {
      item.errCnt += 1
    }
  })
  saveList()
  // 若全部完成則重設
  if (isListComplete.value) {
    resetList()
  } else {
    drawNextWord()
  }
}

const toggleShowEnglish = () => {
  showEnglish.value = !showEnglish.value
}

const toggleShowChinese = () => {
  showChinese.value = !showChinese.value
}

// 儲存
const saveList = async () => {
  const saveName = localStorage.getItem('memorize_name')
  const newData = {
    [saveName]: {
      wordList: wordListOri.value
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

    wordListOri.value = JSON.parse(JSON.stringify(data?.[saveName]?.wordList || []))
    wordList.value = JSON.parse(JSON.stringify(wordListOri.value)).filter(
      (item) => item.errCnt >= howmanyErrStart.value
    )
  })
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

// 手機版
const isMobile = ref(window.innerWidth < 992)
const containerHeight = ref('100vh')

const updateDimensions = () => {
  isMobile.value = window.innerWidth < 992
  containerHeight.value = `${window.innerHeight}px` // 直接設置高度
}

onMounted(() => {
  window.addEventListener('resize', updateDimensions)
  updateDimensions() // 初始化時調用，確保在組件掛載時立即檢查視窗大小
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
})
</script>

<template>
  <div
    class="bg-warning d-flex flex-column align-items-center justify-content-between"
    :style="{ height: containerHeight }"
  >
    <!-- 上半部分，顯示中文 -->
    <div
      class="position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-up"
    >
      <div v-if="!started" class="text-center" style="font-size: 36px">準備開始</div>
      <div v-else class="text-center" style="font-size: 36px">
        <div>{{ showChinese ? currentWord.cn : '---' }}</div>
        <div class="position-absolute top-0 start-0">
          <font-awesome-icon @click="toggleShowChinese" v-if="showChinese" icon="fa-solid fa-eye" />
          <font-awesome-icon @click="toggleShowChinese" v-else icon="fa-solid fa-eye-slash" />
        </div>
      </div>
    </div>

    <!-- 下半部分，顯示英文 -->
    <div
      class="position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-dwn"
    >
      <div v-if="!started" class="text-center" style="font-size: 36px">Ready</div>
      <div v-else class="text-center" style="font-size: 36px">
        <div class="w-100" style="overflow: auto; word-break: break-all">
          {{ showEnglish ? currentWord.en : '---' }}
        </div>

        <div class="position-absolute top-0 start-0">
          <font-awesome-icon @click="toggleShowEnglish" v-if="showEnglish" icon="fa-solid fa-eye" />
          <font-awesome-icon @click="toggleShowEnglish" v-else icon="fa-solid fa-eye-slash" />
        </div>
      </div>
    </div>

    <!-- 底部按鈕和進度 -->
    <div class="text-center mb-5">
      <div class="mt-4" style="font-size: 20px">
        {{ drawnWords.length }} / {{ wordList.length }}
      </div>
      <div class="d-flex justify-content-center" v-if="!started">
        <RouterLink to="/" class="me-1">
          <button class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-house" />
          </button>
        </RouterLink>
        <input type="number" class="form-control me-1 w-50" v-model="howmanyErrStart" />
        <button @click="starting" class="btn btn-primary btn-lg">
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
      </div>
      <button v-if="started" @click="resetList" class="btn btn-secondary btn-lg">Reset</button>
    </div>

    <!-- 錯誤次數 -->
    <div
      v-if="started"
      class="position-absolute end-0 top-0 d-flex justify-content-center align-items-center m-2 fs-4"
    >
      <font-awesome-icon icon="fa-solid fa-xmark" />：{{ currentWord.errCnt }}
    </div>

    <!-- 側邊按鈕 -->
    <div class="position-absolute end-0 bottom-0 d-flex flex-column">
      <button v-if="started" @click="knowWord" class="btn btn-primary btn-lg mb-2 me-3">
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-white" />
      </button>
      <button v-if="started" @click="knowWord" class="btn btn-success btn-lg mb-2 me-3">
        <font-awesome-icon icon="fa-solid fa-check" class="text-white" />
      </button>
      <button v-if="started" @click="dontKnowWord" class="btn btn-danger btn-lg mb-3 me-3">
        <font-awesome-icon icon="fa-solid fa-xmark" class="text-white" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.fa-eye,
.fa-eye-slash {
  margin: 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
}
</style>
