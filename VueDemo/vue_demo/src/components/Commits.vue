<template>
  <ul>
      <li v-for="item in dock" :key="item">
          <p>{{ item }}</p>
      </li>
  </ul>
</template>

<script>
export default {
    props: {
        dock: Array
    },
}
</script>

<style>

</style>