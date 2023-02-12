import data from './products.json'

async function fetchProductList(){

    // Emulate data loading
    await new Promise(resolve=>setTimeout(()=>resolve(),2000))

    return data;
}


export default {fetchProductList}