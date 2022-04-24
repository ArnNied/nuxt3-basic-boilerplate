<template>
  <NuxtWelcome />
</template>

<script lang="ts" setup>
import { myStore } from "~~/store/myStore"

const my = myStore()

console.log(my.msg)
</script>