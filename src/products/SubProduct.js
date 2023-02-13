const SubProduct = ({product})=>{
    return <div className="subproduct">
        <div className='name' >{product.name}</div>
        <div className='type' >{product.type}</div>
        <div className='descr'>{product.descr}</div>
    </div>
}
export default SubProduct