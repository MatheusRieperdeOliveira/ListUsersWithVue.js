<template>
    <v-card variant="outlined" rounded="lg" class="filter-card d-flex align-center justify-space-between ga-4 pa-3">
        <div class="d-flex align-center ga-3">
            <v-icon icon="mdi-account-group-outline" size="24" color="primary" />

            <div class="d-flex flex-column">
                <span class="text-body-2 font-weight-medium">
                    Pessoas
                </span>

                <span class="text-caption text-medium-emphasis">
                    Número de pessoas para buscar
                </span>
            </div>
        </div>

        <v-number-input :model-value="props.numberForSearchPeople"
            @update:model-value="emits('update:numberForSearchPeople', $event)" :min="1" :max="999" :step="1"
            control-variant="split" density="compact" variant="outlined" hide-details :min-width="140"
            aria-label="Número de pessoas" />
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    numberForSearchPeople: number
}>()

const emits = defineEmits<{
    'update:numberForSearchPeople': [value: number]
}>()
</script>
