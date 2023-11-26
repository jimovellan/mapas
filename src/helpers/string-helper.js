import lodash from 'lodash';


function normalizerString(value){
    return lodash.deburr(value).toLowerCase()
}

export {
    normalizerString,
}