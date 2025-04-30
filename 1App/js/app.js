import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const appConfig = {
    data() {
        return {
            title: 'Магазин по продаже молотков',
            about: 'Skok Vam Nada',
            count: 0,
            price: 100,
            taxRate: 6,
        }
    },
    methods: {
        incCount() {
            this.count++;
        },
        decCount() {
            if(this.count > 1){
            this.count--;
            }
        }   
    },
    computed: {
        cost(){
            let result = this.price * this.count;
            return +result.toFixed(2);
        },
        totalCost(){
            let result = this.cost + (this.cost * this.taxRate / 100);
            return +result.toFixed(2);
        }
    }
};

// Создаем приложение Vue и монтируем его в #app
const app = createApp(appConfig);

const vm = app.mount('#app');


