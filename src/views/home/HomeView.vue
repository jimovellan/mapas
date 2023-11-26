<template>

<div class="app-header">
    <div class="app-header__title">
      All Regions
    </div>
    <div class="app-header__filters app-header__filters--left">
      <div class="app-header__filters-group">

        <label>
          Region Name:
        </label>
        <InputText 
          v-model="searchDivRef"  
          @change="onChangeSearch"/>
      </div>

    </div>
</div>
<div class="app-chart__container">
  <BarChart
      :data="dataChart"
     
    />

</div>

  

</template>

<script setup>
// @ is an alias to /src
import { ref, computed ,inject} from 'vue';
import BarChart from '@/components/BarChart.vue';
import InputText from 'primevue/inputtext';

const appState$$ = inject('app-state');
const searchDivRef = ref(null);
const dataChart = computed(()=>{
   const labels =  appState$$.data.filteredRegions.map(m=>m.name);
   const datasets = [{label:'regions', backgroundColor: '#42b983',data:appState$$.data.filteredRegions.map(m=>m.population)}];

   return {
    labels,
    datasets};
   
})

function onChangeSearch(){
  
  appState$$.filterRegions(searchDivRef.value);
}






</script>

<style scoped lang="scss">

</style>
