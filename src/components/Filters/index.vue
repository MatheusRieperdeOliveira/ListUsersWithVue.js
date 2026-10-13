<template>
    <v-card width="25%" variant="flat" rounded="xl" class="filter-card px-4 py-2">
        <v-card-title class="d-flex justify-space-between align-center px-0">
            <span class="text-h6">Filtros</span>

            <v-btn :icon="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" variant="text" color="primary"
                density="comfortable" size="small" :aria-label="isExpanded ? 'Recolher filtros' : 'Expandir filtros'"
                :aria-expanded="isExpanded" @click="toggleFilters" />
        </v-card-title>

        <v-expand-transition>
            <div v-show="isExpanded">
                <v-card-subtitle class="px-0 mb-4">
                    Personalize sua busca!
                </v-card-subtitle>

                <div class="d-flex flex-column ga-3 pb-3">
                    <Genders :gender-for-search="props.genderForSearch"
                        @update:gender-for-search="emit('update:genderForSearch', $event)" />

                    <Nationalities :nationality-for-search="props.nationalityForSearch"
                        @update:nationality-for-search="emit('update:nationalityForSearch', $event)" />

                    <NumberPeople :number-for-search-people="props.numberForSearchPeople"
                        @update:number-for-search-people="emit('update:numberForSearchPeople', $event)" />
                </div>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    'update:nationalityForSearch': [value: string]
    'update:genderForSearch': [value: string]
    'update:numberForSearchPeople': [value: number]
}>()

const isExpanded = ref(true)

const toggleFilters = () => {
    isExpanded.value = !isExpanded.value
}
</script>
