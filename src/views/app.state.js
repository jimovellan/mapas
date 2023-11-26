import { reactive } from "vue";
import { getRegionsWithPopulation } from "@/api/regions/map.api";
import { normalizerString } from "@/helpers/string-helper";


export default function(){
    
    const data = reactive({
        isLoading: false,
        regions:[],
        filteredRegions:[]
    });
    
    const loadRegions = async () => {
    
        data.isLoading = true;
        data.regions = await getRegionsWithPopulation();
        data.filteredRegions = data.regions.map(r=>r);
        data.isLoading = false;
    }
    
    const filterRegions = (filter) =>{
    
        const normalizerFilter = normalizerString(filter);
        data.filteredRegions = data.regions
                                         .filter(r => normalizerString(r.name).includes(normalizerFilter));
    }
    
    return {
        data,
        loadRegions,
        filterRegions
    }


}

