import base from './caller.base';
import {RegionsWithPopulationResponseApiModel,CountriesByRegionWithPopulationResponseModel} from './models';



async function getRegionsWithPopulation(){
    
    const url = `/all?fields=region,population`;
    const {data} = await base.get(url,{timeout:500});
    
    const acumulate = {};

    data.forEach(el => {
        if(acumulate[el.region]){
            acumulate[el.region] += el.population;
        }else{
            acumulate[el.region] = el.population;
        }
    })
    
    return Object.keys(acumulate)
                 .map(key=>new RegionsWithPopulationResponseApiModel({name:key, population:acumulate[key]}));


}

async function getCountriesByRegionWithPopulation(region){
    
    const url = `/region/${region}?fields=name,population`;
 
    const {data} = await base.get(url,{timeout:50000});
    
    const acumulate = {};

    data.forEach(el => {
        if(acumulate[el.name.common]){
            acumulate[el.name.common] += el.population;
        }else{
            acumulate[el.name.common] = el.population;
        }
    })
    
    return Object.keys(acumulate)
                 .map(key=>new CountriesByRegionWithPopulationResponseModel({name:key, population:acumulate[key]}));


}

export {getRegionsWithPopulation, 
        getCountriesByRegionWithPopulation};
