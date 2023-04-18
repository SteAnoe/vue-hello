const { createApp } = Vue

createApp({
  data() {
    return {
        message: 'Hello world',
        img: 'https://picsum.photos/id/237/200/300',
    }
  }
}).mount('#app')