import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Prod.css';
import Product from './Product';

const ProdList=({data})=>{
    const [products, setProducts] = useState(null)
    const [error,    setError]    = useState(null)

    useEffect( ()=>{
        data.loadProductTree()
        .then(root=>{
            console.log('*** DATA ***',root)
            setProducts(root.children)
        })
        .catch(error=>{
            console.log('*** DATA ERROR ***',error)
            setError(error)
        })
    },[])

    //----- RENDER -----
    return <div className="prod-list">
        {products && 
            <>{products.map(prod=><Product key={prod.ProductID} product={prod}/>)}</>
        }


        {(!products&&!error)&& 
            createPortal(
                <div className='fog'>
                    <div className="message">Loading data...</div>
                </div>,
                document.body
            )
        }

    </div>
}

export default ProdList;