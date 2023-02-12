const SubProduct = ({product})=>{
    return <div className="subproduct">
        <div className='name' >{product.Name}</div>
        <div className='type' >{product.Type}</div>
        <div className='descr'>{product.descriptionen}</div>
    </div>
}
export default SubProduct