import { defineStore } from 'pinia'

export const usebackgroundStore = defineStore("backgroundStore", {
    state: () => ({
        bgColor: 0
    }),
    actions: {
        setBgColor(x) {
            this.bgColor = x;
        }
    }
})