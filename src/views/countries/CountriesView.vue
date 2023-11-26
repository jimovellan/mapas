<template>
    <div class="app-header">
        <div class="app-header__title">{{ props$$.region }}</div>
        <div class="app-header__filters app-header__filters--left">
            <div class="app-header__filters-group">
                <label>Name:</label>
                <InputText v-model="regionNameRef" @change="changeFilter"/>
            </div>
            <div class="app-header__filters-group">
                <label>Min. population:</label>
                <InputNumber v-model="minPoblationRef" />
            </div>
            
    
        </div>
        
      
        
    </div>

    <div class="app-chart__container">
            <BarChart :data="dataChart"/>
        </div>
  
</template>
<script setup>


import BarChart from '@/components/BarChart.vue';
import { defineProps,watchEffect ,ref, computed,watch} from 'vue';
import useStateCountriesView from './countries-view.state';
import  InputNumber from 'primevue/inputnumber';
import  InputText from 'primevue/inputtext';


const state$$ = useStateCountriesView();
const props$$ = defineProps({
    region :{
        type:String,
        required:true
    }
});
const regionNameRef = ref(null);
const minPoblationRef = ref(0);

const dataChart = computed(()=>{
    const labels =  state$$.data.countriesFiltered.map(m=>m.name);
    const datasets = [{label:'regions', backgroundColor: '#42b983',data:state$$.data.countriesFiltered.map(m=>m.population)}];

   return {
    labels,
    datasets};
})

function changeFilter(){
    
    state$$.filterCountries({
        countryName:regionNameRef.value,
        minPopulation: minPoblationRef.value
    }) ; 
}

watch(()=>[minPoblationRef.value],
()=>{

    changeFilter();
})

watchEffect(async ()=>{
    await state$$.loadCountries(props$$.region);

})




</script>

<style scoped lang="scss">



</style>