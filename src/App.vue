<template>
  
  <LoadingComponent v-if="state$$.isLoading"/>
  <NavList></NavList>
  <router-view/>
</template>

<script setup>

import { onBeforeMount,provide } from 'vue';
import useAppState from './views/app.state';
import NavList from './components/NavList.vue';
import LoadingComponent from './components/LoadingComponent.vue';

const state$$ = useAppState();


onBeforeMount( async()=>{
  await state$$.loadRegions();
})

provide('app-state',state$$);

</script>

<style lang="scss">



</style>
