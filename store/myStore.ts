import { defineStore } from "pinia"

export const myStore = defineStore("myStore", {
  state: () => ({
    msg: "This is myStore.msg"
  })
})