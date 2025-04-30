import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const appConfig = {
    data(){
        return {
            title: 'Vue Demp App',
            users: [
                { name: 'Jhon', city: 'London'},
                { name: 'Bill', city: 'New-York'},
                { name: 'Maria', city: 'Paris'},
                { name: 'Helga', city: 'Stockholm'},
            ]
        }
    }
};

const app = createApp(appConfig);

const vm = app.mount('#app');
