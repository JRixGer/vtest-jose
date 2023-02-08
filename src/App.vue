<template>
  <div id="messbox" class="absolute h-full right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
    <!-- <div class="messbox p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full" :class="(messType=='success') ? 'bg-green-100 border-green-500':(messType=='error') ? 'bg-red-100 border-red-500':''">{{ message }}</div> -->
  </div>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button @click="triggerToast('info')" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW INFO TOAST
    </button>

    <button @click="triggerToast('success')" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW SUCCESS TOAST
    </button>

    <button @click="triggerToast('error')" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { useToast } from './composables/useToast';
  import { injectionKey } from './constants/injectionKeys';

  let eleId: number = 0;
  let curDiv: string = "";
  let toastData: any = inject(injectionKey);
 
  const triggerToast = (m: string) => {
    eleId = useToast(m, toastData, 700, eleId)
    curDiv = `id${eleId}`;
    const curDivStyle: any = document.getElementById(curDiv);
    if(curDivStyle) {
      let a: number;
      a = window.setTimeout(function() {
        curDivStyle?.setAttribute("style", "position: fixed; left: 1rem; bottom: 1rem; background-color: #222222; min-height: 2.5rem; max-width: 4.5rem; border-radius: 0.25rem; padding: 0.75rem; z-index: 999998; display: flex; justify-content: flex-start; align-items: flex-start; animation: toast-slide-up 0.3s; will-change: transform; display: none;");		
      }, 2500);
    }
    
	}
</script>

<style >
  @keyframes toast-slide-up {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
  }
</style>