<template>
    <v-container>
        <v-row>
            <v-col v-for="(user, index) in usersWithColors" :key="user.id?.value || index" cols="12" sm="6" md="4">
                <v-card class="mx-auto pb-4" max-width="400">
                    <div class="d-flex justify-center position-relative" :class="user.bannerColor"
                        style="height: 60px; width: 100%;">
                        <v-avatar color="surface-variant" size="70" class="position-absolute"
                            :image="user.picture.large" style="top: 100%; transform: translateY(-50%);" />
                    </div>

                    <v-card-title class="text-center pt-10 text-h6 font-weight-semibold">
                        {{ user.name.first }} {{ user.name.last }}
                    </v-card-title>

                    <v-card-subtitle class="text-center text-body-2 mb-2">
                        {{ formatAt(user.email) }}
                    </v-card-subtitle>

                    <v-card-actions class="d-flex justify-center ga-2">
                        <Button color="error" prepend-icon="mdi-trash-can" @click="onDelete(user)" />
                        <Button color="primary" prepend-icon="mdi-pencil" @click="onEdit(user)" />
                        <Button color="success" prepend-icon="mdi-check" @click="onVerify(user)" />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Button from '@/components/Button.vue';
import { formatAt } from '@/composables/users';

const props = defineProps<{
    users: any[]
}>();

const bannerColors = [
    'bg-red',
    'bg-pink',
    'bg-purple',
    'bg-deep-purple',
    'bg-indigo',
    'bg-blue',
    'bg-teal',
    'bg-green',
    'bg-orange',
    'bg-blue-grey'
];

const usersWithColors = computed(() => {
    return props.users.map((user) => ({
        ...user,
        bannerColor: bannerColors[Math.floor(Math.random() * bannerColors.length)]
    }));
});

const onDelete = (user: any) => {
    console.log('deleted user:', user);
};

const onEdit = (user: any) => {
    console.log('updated user:', user);
};

const onVerify = (user: any) => {
    console.log('verify user:', user);
};
</script>