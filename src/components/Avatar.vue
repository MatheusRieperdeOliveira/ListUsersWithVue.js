<template>
    <v-avatar :image="props.image"></v-avatar>
</template>

<script setup lang="ts">
const props = defineProps<{
    image: string
}>()
</script>