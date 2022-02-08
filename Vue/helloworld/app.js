const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: "Blablabla",
            author: '?',
        }
    },
    methods: {
        toggle() {
            this.show = false
        }
    }
})

app.mount('#app')