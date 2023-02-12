// THE DATA CLASS
export default class Data{
    constructor(api){
        this.api = api
    }

    async loadProductTree(){
        const data = await this.api.fetchProductList()

        // Verify data
        if(!Array.isArray(data)) throw "wrong source data format, must be an array"
        data.forEach(item=>{
            if(!item.ProductID)           throw "wrong data item format, ProductID is not set"
            if(item.ParentID===undefined) throw "wrong data item format, ParentID is undefined"
        })

        // Parse data
        const root = {
            ProductID : null
        }
        fillChildren(root, data)

        // Return root
        return root
    }
}

// Reccurent list parcer
const fillChildren=(parent,data)=>{
    parent.children = data.filter(item=>item.ParentID===parent.ProductID)
    parent.children.forEach(item => fillChildren(item, data));
}
