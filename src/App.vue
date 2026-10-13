<template>
  <v-app>
    <v-main>
      <div class="d-flex justify-space-between align-center ma-5 ga-3">
        <Filters v-model:numberForSearchPeople="numberForSearchPeople" v-model:genderForSearch="genderForSearch"
          v-model:nationalityForSearch="nationalityForSearch" />

        <div id="ultis">
          <Button prepend-icon="mdi-list-box" :onClick="() => { modeList = true; modeCard = false }" text="List" />
          <Button prepend-icon="mdi-card-account-details" :onClick="() => { modeCard = true; modeList = false }"
            text="Card" />
        </div>

      </div>
      <UserCard :users="users" v-if="modeCard" />
      <UserList :users="users" v-if="modeList" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Filters from '@/components/Filters/index.vue'
import UserCard from '@/components/UserCard.vue'
import UserList from '@/components/UserList.vue'

import { onMounted, ref, watch } from 'vue'

import { getUsers } from '@/composables/users'

const users = ref<any[]>([])
const numberForSearchPeople = ref<number>(1)
const genderForSearch = ref<string>(null)
const nationalityForSearch = ref<string>(null)

const modeList = ref<boolean>(true)
const modeCard = ref<boolean>(false)

onMounted(async () => {
  users.value = await getUsers(numberForSearchPeople.value, genderForSearch.value, nationalityForSearch.value)
})

watch([numberForSearchPeople, genderForSearch, nationalityForSearch], async () => {
  users.value = await getUsers(numberForSearchPeople.value, genderForSearch.value, nationalityForSearch.value)
})

</script>
