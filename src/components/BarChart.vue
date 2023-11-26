<template>
    <Bar
      :options="props$$.options"
      :data="props$$.data"
    />
  </template>
  
  <script setup>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { defineProps } from 'vue';
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const props$$ = defineProps({
    data:{
        type: Object,
        required:true,
    },
    options:{
        type: Object,
        required:false,
        maintainAspectRatio: true,
        default:()=> {
            
        return {
            responsive: true,
            maintainAspectRatio:false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Filters'
                }
            }
        }}
        
    }
    });
  </script>