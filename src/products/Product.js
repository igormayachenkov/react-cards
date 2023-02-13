import React,{useState, useRef} from 'react';
import SubProduct from './SubProduct';
import {Card,CardHeader,CardContent,CardActions,Collapse,Button} from '@mui/material';


const Product=({product})=>{
    const [expanded,      setExpanded]      = useState(false) 

    const handleExpandButton=()=>{
        console.log('handleExpandButton')
        setExpanded(!expanded)
    }
    
    // ----- RENDER -----
    console.log(`=> Product, expanded:${expanded}`);
    return <Card variant="outlined" 
        sx={{
            backgroundColor:'lightgray',
            color:'#000'
        }}>
        <CardHeader 
            title={product.name}
            sx={{paddingBottom:0}}/>
        <CardContent
            sx={{paddingTop:0,paddingBottom:0}}>
            {product.descr}
        </CardContent>

        <CardActions disableSpacing>
            {product.children.length>0 &&
                <Button sx={{color:'darkblue'}}
                    onClick={handleExpandButton}>
                    {expanded?'collapse':`${product.children.length} subproducts`}
                </Button>
            }
        </CardActions>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit
            sx={{ backgroundColor: '#00000020'}}>
            {product.children.map(item=><SubProduct key={item.id} product={item}/>)}
        </Collapse>



    </Card>

}
export default Product;