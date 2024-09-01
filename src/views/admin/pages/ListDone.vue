<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps(['todolistData'])
const emits = defineEmits(['delTodolistData', 'statusTodolistData', 'putTodolistData'])

const changeStatus = (id) => {
  emits('statusTodolistData', id)
}

const delData = (id) => {
  emits('delTodolistData', id)
}

const putData = (id, content) => {
  tmp.value.id = id
  tmp.value.content = content
}

const confirmPut = () => {
  emits('putTodolistData', tmp.value)
  tmp.value.id = null
  tmp.value.content = ''
}

const tmp = ref({
  id: null,
  content: ''
})
</script>

<template>
  <div class="todoList_items">
    <div
      class="todoList_statistics justify-content-end;"
      v-if="props.todolistData.filter((item) => item.status === true).length !== 0"
    >
      <p>
        {{ props.todolistData.filter((item) => item.status === true).length }}
        個已完成項目
      </p>
    </div>

    <p
      class="text-center"
      v-if="props.todolistData.filter((item) => item.status === true).length === 0"
    >
      目前尚無已完成事項
    </p>

    <ul v-else class="todoList_item">
      <template v-for="item in props.todolistData" :key="item.id">
        <li v-if="item.status === true" class="position-relative">
          <label class="todoList_label">
            <input
              class="todoList_input"
              type="checkbox"
              :checked="item.status"
              @change="changeStatus(item.id)"
            />
            <span v-if="tmp.id !== item.id">{{ item.content }}</span>
            <span v-else>
              <input type="text" class="form-control" v-model="tmp.content" />
            </span>
          </label>

          <div class="position-absolute end-0 cursor-pointer d-flex" style="margin-bottom: 12px">
            <div v-if="tmp.id === item.id" @click="confirmPut(item.id)" class="cursor-pointer me-2">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>

            <div v-else @click="putData(item.id, item.content)" class="cursor-pointer me-2">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </div>

            <div @click="delData(item.id)" class="cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
