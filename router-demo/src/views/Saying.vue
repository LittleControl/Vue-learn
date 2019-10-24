<template>
  <ul>
    <li v-for="item in sayings" :key="item.id">
      <span>{{ item.content }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      sayings: [
        {
          id: 0,
          content: "Nothing To Do But Love"
        },
        {
          id: 1,
          content: "Find What You Love And Let It Kill You"
        },
        {
          id: 2,
          content: "The days are long but the decades are short"
        }
      ]
    };
  }
};
</script>

<style>
</style>