<template>
    <v-card width="25%" variant="flat" rounded="xl" class="filter-card px-4 py-2">
        <v-card-title class="d-flex justify-space-between align-center px-0">
            <span class="text-h6">Ações</span>

            <v-btn :icon="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" variant="text" color="primary"
                density="comfortable" size="small" :aria-label="isExpanded ? 'Recolher ações' : 'Expandir ações'"
                :aria-expanded="isExpanded" @click="toggleFilters" />
        </v-card-title>
        <v-expand-transition>
            <div v-show="isExpanded">
                <Button prepend-icon="mdi-list-box" :onClick="() => { modeList = true; modeCard = false }"
                    text="List" />
                <Button prepend-icon="mdi-card-account-details" :onClick="() => { modeCard = true; modeList = false }"
                    text="Card" />
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import { ref } from 'vue';
const isExpanded = ref(true)

const toggleFilters = () => {
    isExpanded.value = !isExpanded.value
}
</script>