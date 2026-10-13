<template>
    <v-card class="d-flex align-center pa-3 ga-3" title="Filtros" subtitle="Personalize sua busca!">
        <Genders v-model:genderForSearch="props.genderForSearch"
            @update:genderForSearch="emit('update:genderForSearch', $event)" />
        <Nationalities v-model:nationalityForSearch="props.nationalityForSearch"
            @update:nationalityForSearch="emit('update:nationalityForSearch', $event)" />
        <NumberPeople v-model:numberForSearchPeople="props.numberForSearchPeople"
            @update:numberForSearchPeople="emit('update:numberForSearchPeople', $event)" />
    </v-card>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, } from 'vue';
import Genders from './Genders.vue';
import Nationalities from './Nationalities.vue';
import NumberPeople from './NumberPeople.vue';

const props = defineProps<{
    nationalityForSearch: string
    genderForSearch: string
    numberForSearchPeople: number
}>()

const emit = defineEmits<{
    (e: 'update:nationalityForSearch', value: string): void
    (e: 'update:genderForSearch', value: string): void
    (e: 'update:numberForSearchPeople', value: number): void
}>()

</script>