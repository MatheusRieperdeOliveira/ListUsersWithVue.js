<template>
    <v-card variant="flat" rounded="xl" class="pa-4">
        <div class="d-flex align-center ga-3 mb-4">
            <v-avatar color="primary" variant="tonal" rounded="lg" size="44">
                <v-icon icon="mdi-gender-male-female" size="24" />
            </v-avatar>

            <div class="d-flex flex-column">
                <span class="text-subtitle-2 font-weight-semibold">
                    Gênero
                </span>

                <span class="text-caption text-medium-emphasis">
                    Filtre os resultados por gênero
                </span>
            </div>
        </div>

        <v-select :model-value="props.genderForSearch" @update:model-value="
            emits('update:genderForSearch', $event)
            " :items="genders" item-title="title" item-value="value" placeholder="Todos os gêneros" clearable
            density="comfortable" variant="outlined" rounded="lg" hide-details prepend-inner-icon="mdi-filter-variant"
            aria-label="Filtrar por gênero" />
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