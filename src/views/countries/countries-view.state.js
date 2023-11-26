import { reactive } from "vue";
import { getCountriesByRegionWithPopulation } from "@/api/regions/map.api";
import { cloneDeep } from "lodash";
import { normalizerString } from "@/helpers/string-helper";


export default function (){
    const data = reactive({
        isloading:false,
        countries: [],
        countriesFiltered: [],

    })

    function filterCountries({countryName,minPopulation = 0}){
        debugger;
        let filteredCountries = cloneDeep(data.countries);

        if(minPopulation){
            filteredCountries = filteredCountries.filter(f => f.population > minPopulation);
        }

        if(countryName)
        {
            const countryNameNormalizer = normalizerString(countryName);
            filteredCountries = filteredCountries.filter(r => normalizerString(r.name)
                                                    .includes(countryNameNormalizer));
        }

        data.countriesFiltered = filteredCountries;
    }

    async function loadCountries(region){
        data.countries = await getCountriesByRegionWithPopulation(region);
        data.countriesFiltered = cloneDeep(data.countries); 
    }
    return {
        data,
        loadCountries,
        filterCountries
    }
}