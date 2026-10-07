<template>
  <v-app>
    <v-main>
      <div class="d-flex justify-center align-center ma-5 ga-3">
        <Button prepend-icon="mdi-list-box" :onClick="() => { modeList = true; modeCard = false }" text="List" />
        <Button prepend-icon="mdi-card-account-details" :onClick="() => { modeCard = true; modeList = false }"
          text="Card" />
      </div>

      <UserList :users="users" v-if="modeList" />
      <UserCard :users="users" v-if="modeCard" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import UserCard from '@/components/UserCard.vue'
import UserList from '@/components/UserList.vue'
import { onMounted, ref } from 'vue'

import { getUsers } from '@/composables/users'

const users = ref<any[]>([])

const modeList = ref<boolean>(false)
const modeCard = ref<boolean>(true)

onMounted(async () => {
  users.value = await getUsers()
})

</script>
