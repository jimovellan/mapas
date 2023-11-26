<template>
    
    <nav v-if="!appState$$.data.isLoading">
    <router-link :to="{name:'home'}" class="nav-list__item">Home</router-link>
    <router-link
     v-for="(region,idx) in appState$$.data.regions"
     class="nav-list__item"
     :key="idx"
     :to="{name:'countries',params:{region:region.name} }">{{region.name}}</router-link> 
  </nav>
</template>

<script setup>
    import { inject } from 'vue';
    const appState$$ = inject('app-state');
</script>

<style lang="scss" scoped>


nav {
  padding: 30px;
  display: flex;
  gap: 1rem;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
