import React,{useState, useRef} from 'react';
import SubProduct from './SubProduct';

const Product=({product})=>{
    const [expanded,      setExpanded]      = useState(false) 
    const [transitioning, setTransitioning] = useState(false) 
    const [height,        setHeight]        = useState(0) 
    const content = useRef()

    const handleExpandButton=()=>{
        console.log('handleExpandButton',content.current?.clientHeight)
        if(content.current)
          setHeight(content.current.clientHeight)
        setExpanded(!expanded)
        setTransitioning(true)
    }
    const handleTransitionEnd = (event) => {
        console.log('transition end');
        setTransitioning(false)
    }
     
    
    // ----- RENDER -----
    console.log(`=> Product, expanded:${expanded} transitioning:${transitioning} height:${height}`);
    return <div className="product"><div className='card-body'>
        
        <div className='name' >{product.Name}</div>
        <div className='descr'>{product.descriptionen}</div>

        <div className='actions-area'>
            {product.children.length>0 &&
                <span className='expand-button'
                    onClick={handleExpandButton}>
                    {expanded?'collapse':`${product.children.length} subproducts`}
                </span>
            }
        </div>

        <div className = {`details ${expanded?'expanded':'collapsed'}`} 
            style={expanded?{height:height+'px'}:null} 
            onTransitionEnd={handleTransitionEnd}>
            <div ref={content}>
                {product.children.map(item=><SubProduct key={item.ProductID} product={item}/>)}
            </div>
        </div>
        
    </div></div>

}
export default Product;