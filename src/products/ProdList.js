import { useEffect } from 'react';
import './Prod.css';
import ProdCard from './PropCard';

const PropList=({data})=>{

    useEffect( ()=>{
        data.loadProductTree()
        .then(root=>{
            console.log('*** DATA ***',root)
        })
        .catch(error=>{
            console.log('*** DATA ERROR ***',error)
        })
    },[])

    return <div className="prod-list">
        <ProdCard title="Product One"/>
        <ProdCard title="Product Two"/>
        <ProdCard title="Product Three"/>
        <ProdCard title="Product Four"/>
        <ProdCard title="Product Five"/>
        <ProdCard title="Product Six"/>
        <ProdCard title="Product Seven"/>

    </div>
}

export default PropList;