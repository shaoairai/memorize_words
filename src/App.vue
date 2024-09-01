<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useFirebaseCrud } from '@/utils/firebaseCrud'
import { onMounted, ref } from 'vue'
const { setData, getData, updateData, deleteData, addData } = useFirebaseCrud()

const newData = ref({
  user1: {
    name: 'Jonny',
    num: 1
  }
})

const handleSetData = async () => {
  // if (user.value) {
  try {
    await setData(newData.value)
    console.log('資料已成功設置！')
  } catch (error) {
    console.error('設定資料時發生錯誤：', error)
    alert('設定資料失敗！')
  }
  // } else {
  //   alert('請先登入！')
  //   router.push('/loginadmin')
  // }
}
onMounted(() => {
  // handleSetData()
})
</script>

<template>
  <RouterView />
</template>
