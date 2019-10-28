<template>
  <div>
    <ul>
      <button @click="$router.back()">Back</button>
      <li v-for="item in sayings" :key="item.id">
        <!-- <p>ID: {{`/header/saying/details/${item.id}`}}</p> -->
        <router-link :to="`/header/saying/details/${item.id}`">{{ item.content }}</router-link>
        <button @click="pushShow(item.id)">Push</button>
        <button @click="replaceShow(item.id)">Replace</button>
      </li>
    </ul>
    <router-view></router-view>
    <br />
  </div>
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
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/header/saying/details/${id}`);
    },
    replaceShow(id) {
      this.$router.replace(`/header/saying/details/${id}`);
    }
  }
};
</script>

<style>
</style>