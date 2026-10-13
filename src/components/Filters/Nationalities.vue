<template>
    <v-card variant="flat" rounded="xl" class="pa-4">
        <div class="d-flex align-center ga-3 mb-4">
            <v-avatar color="primary" variant="tonal" rounded="lg" size="44">
                <v-icon icon="mdi-earth" size="24" />
            </v-avatar>

            <div class="d-flex flex-column">
                <span class="text-subtitle-2 font-weight-semibold">
                    Nacionalidade
                </span>

                <span class="text-caption text-medium-emphasis">
                    Filtre os resultados por nacionalidade
                </span>
            </div>
        </div>

        <v-select :model-value="props.nationalityForSearch" @update:model-value="
            emits('update:nationalityForSearch', $event)
            " :items="nationalities" item-title="title" item-value="value" placeholder="Todas as nacionalidades" clearable
            density="comfortable" variant="outlined" rounded="lg" hide-details prepend-inner-icon="mdi-filter-variant"
            aria-label="Filtrar por nacionalidade" />
    </v-card>
</template>
<script setup lang="ts">
import nationalities from '@/composables/nationalities.json';
import { defineEmits, defineProps, } from 'vue';

const props = defineProps<{
    nationalityForSearch: string
}>()

const emits = defineEmits<{
    'update:nationalityForSearch': [value: string]
}>()

</script>