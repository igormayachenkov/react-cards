// THE DATA CLASS
export default class Data{
    constructor(api){
        this.api = api
    }

    async loadProductTree(){
        // Load server data
        const rawList = await this.api.fetchProductList()

        // Verify the raw data
        if(!Array.isArray(rawList)) throw "wrong source data format, must be an array"

        // Convert to the internal data format
        const list = rawList
        .filter(raw=>!raw.isDeleted)
        .map(raw=>{
            // Verify the raw item
            if(!raw.ProductID)            throw "wrong data item format, ProductID is not set"
            if( raw.ParentID===undefined) throw "wrong data item format, ParentID is undefined"
            // Convert
            return {
                id      : raw.ProductID,
                parentId: raw.ParentID,
                name    : raw.Name,
                type    : raw.Type,
                descr   : raw.descriptionen,
                children: []
            }
        })

        // Parse data
        const root = {
            id      : null,
            children: []
        }
        fillChildren(root, list)

        // Return root
        return root
    }
}

// Reccurent list parcer
const fillChildren=(node, list)=>{
    node.children = list.filter(item=>item.parentId===node.id)
    node.children.forEach(item => fillChildren(item, list));
}
