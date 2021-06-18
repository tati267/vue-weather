<template>
  <main class="saved">
    <Search />
    <CardList />
  </main>
</template>

<script>
import Search from "@/components/Search.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "Favourite",
  components: {
    Search,
    CardList,
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;
}
</style>
