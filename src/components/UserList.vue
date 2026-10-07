<template>
  <v-container fluid>
    <v-list class="pa-5 overflow-y-auto" lines="two" style="max-height: calc(90vh - 43px);">
      <v-list-item v-for="(user, index) in users" :key="index" :subtitle="formatAt(user.email)"
        :title="`${user.name?.first} ${user.name?.last}`" class="mb-3 pa-4 border rounded">

        <template #prepend>
          <Avatar :image="user.picture?.thumbnail" class="mr-3" />
        </template>

        <template #append>
          <div class="d-flex ga-2">
            <Button prependIcon="mdi-trash-can" :onClick="() => { console.log('deleted') }" color="red" />
            <Button prependIcon="mdi-pencil" :onClick="() => { console.log('updated') }" color="blue" />
            <Button prependIcon="mdi-check" :onClick="() => { console.log('verify') }" color="green" />
          </div>
        </template>

      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import { formatAt } from '@/composables/users';
import { defineProps } from 'vue';

const props = defineProps<{
  users: any[]
}>();
</script>