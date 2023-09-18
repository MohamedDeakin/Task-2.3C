import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { ref } from 'vue'

const count = ref(0)

const posts = ref([
    /* ... */
  ])
  
  const postFontSize = ref(1)

  


createApp(App).mount('#app')
