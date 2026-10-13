<template>
    <v-card variant="outlined" rounded="lg" class="filter-card d-flex align-center justify-space-between ga-4 pa-3">
        <div class="d-flex align-center ga-3">
            <v-icon icon="mdi-earth" size="24" color="primary" />

            <div class="d-flex flex-column">
                <span class="text-body-2 font-weight-medium">
                    Nacionalidade
                </span>

                <span class="text-caption text-medium-emphasis">
                    Filtrar pessoas por nacionalidade
                </span>
            </div>
        </div>

        <v-select :model-value="props.nationalityForSearch"
            @update:model-value="emits('update:nationalityForSearch', $event)" :items="nationalities" item-title="title"
            item-value="value" placeholder="Qualquer" clearable density="compact" variant="outlined" hide-details
            :min-width="140" aria-label="Filtrar por nacionalidade" />
    </v-card>
</template>
<script setup lang="ts">
import nationalities from '@/composables/nationalities.json';

const props = defineProps<{
    nationalityForSearch: string
}>()

const emits = defineEmits<{
    'update:nationalityForSearch': [value: string]
}>()

</script>