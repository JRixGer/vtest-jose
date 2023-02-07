<template>
  <ToastProvider>
    <App />
  </ToastProvider>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import App from './App.vue';
import ToastProvider from './components/ToastProvider.vue';
import { injectionKey  } from './constants/injectionKeys';

const data = {
  "info": "SHOW INFO TOAST", 
  "success": "SHOW SUCCESS TOAST",
  "error": "SHOW ERROR TOAST",
};

provide(injectionKey, data);
</script>
