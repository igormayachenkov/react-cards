import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Product from './Product';
import { Box } from "@mui/material"

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
    return <Box sx={{
        display:'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(15em,1fr))',
        gridGap:'0.2em'}}>
        
        {products && 
            <>{products.map(prod=><Product key={prod.id} product={prod}/>)}</>
        }

        {(!products&&!error)&& 
            createPortal(
                <div className='fog'>
                    <div className="message">Loading data...</div>
                </div>,
                document.body
            )
        }

        {error!=null && 
            createPortal(
                <div className='fog'>
                    <div className="message">{error.toString()}</div>
                </div>,
                document.body
            )
        }

    </Box>
}

export default ProdList;