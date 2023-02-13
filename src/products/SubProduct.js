import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';

const Name = styled('div')`font-weight: bold;`
const Type = styled('div')`font-family: monospace;`
const Descr= styled('div')`font-style: italic;`

const SubProduct = ({product})=>{
    return (
    <Box sx={{ 
        padding: '0em 0.5em 0.2em 0.5em',
        borderBottom: '1px solid #444',
        '&:last-child': {borderBottom: 'none'}
    }}>
        <Name >{product.name} </Name>
        <Type >{product.type} </Type>
        <Descr>{product.descr}</Descr>
    </Box>)
}
export default SubProduct