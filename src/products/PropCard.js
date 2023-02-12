import React,{useState, useRef} from 'react';

const ProdCard=({title})=>{
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
     
    
    // RENDER
    console.log(`=> ProdCard, expanded:${expanded} transitioning:${transitioning} height:${height}`);
    return <div className="prod-card"><div className='card-body'>
        
        <div>{title}</div>

        <div className='actions-area'><span 
            className='expand-button'
            onClick={handleExpandButton}>
            {expanded?'collapse':'expand'}
        </span></div>

        <div className = {`details ${expanded?'expanded':'collapsed'}`} 
        style={expanded?{height:height+'px'}:null} 
        onTransitionEnd={handleTransitionEnd}>
            <div ref={content}>
                The details field long content
            </div>
        </div>
        
    </div></div>

}
export default ProdCard;