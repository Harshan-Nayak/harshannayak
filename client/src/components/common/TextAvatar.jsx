import {Avatar} from '@mui/material'
import { textAlign } from '@mui/system';


const TextAvatar = ({text})=>{
    const stringTocolor = (str) =>{
        let hash = 0;
        let i;

        for( i=0;i<str.length;i +=1){
            hash = str.charCodeAt(i) + ((hash<<5)-hash)
        }

        let color = "#"

        for(i =0;i<3;i +=1){
            const value = (hash>>(i*8))&0xff
            color += `00${value.toString(16)}`.slice(-2)
        }
        return color
    }

    return(
        <Avatar
        sx={{
            backgroundColor:stringTocolor(text),
            width:40,
            height:40,
        }}
        children={`${text.split(' ')[0][0]}`}
        
        />
    )
    };

export default TextAvatar