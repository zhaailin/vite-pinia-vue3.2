import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: ()=>{
        return {
          helloWorld: 'Hello Pinia!'
        }
    },
    getters: {},
    actions: {}
})