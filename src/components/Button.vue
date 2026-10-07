<template>
    <v-btn elevation="0" :prepend-icon="hasContent ? prependIcon : undefined" @click="$emit('click')">
        <v-icon v-if="!hasContent && prependIcon" :icon="prependIcon" />

        <span v-if="hasContent" class="text-none text-capitalize">
            <slot>{{ text }}</slot>
        </span>
    </v-btn>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, useSlots } from 'vue';

const props = defineProps<{
    prependIcon?: string
    text?: string
}>()

defineEmits<{
    (e: 'click'): void
}>()

const slots = useSlots()

const hasContent = computed(() => !!props.text || !!slots.default)
</script>