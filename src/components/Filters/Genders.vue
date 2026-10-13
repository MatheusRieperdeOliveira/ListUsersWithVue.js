<template>
    <v-card variant="outlined" rounded="lg" class="filter-card d-flex align-center justify-space-between ga-4 pa-3">
        <div class="d-flex align-center ga-3">
            <v-icon icon="mdi-gender-male-female" size="24" color="primary" />

            <div class="d-flex flex-column">
                <span class="text-body-2 font-weight-medium">
                    Gênero
                </span>

                <span class="text-caption text-medium-emphasis">
                    Filtrar pessoas por gênero
                </span>
            </div>
        </div>

        <v-select :model-value="props.genderForSearch" @update:model-value="emits('update:genderForSearch', $event)"
            :items="genders" item-title="title" item-value="value" placeholder="Qualquer" clearable density="compact"
            variant="outlined" hide-details :min-width="140" aria-label="Filtrar por gênero" />
    </v-card>
</template>
<script setup lang="ts">
import genders from '@/composables/genders.json';
import { defineEmits, defineProps } from 'vue';

const props = defineProps<{
    genderForSearch: string
}>()

const emits = defineEmits<{
    'update:genderForSearch': [value: string]
}>()
</script>