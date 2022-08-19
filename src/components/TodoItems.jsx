import { Delete } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"

export const TodoItem = (props) =>{

    return (
        <Stack alignItems='center' justifyContent='flex-start' direction='row'>
            <Button onClick={()=>{
                props.onDeleteItemClick(props.id)
            }} sx={{marginLeft:0}}> 
                <Delete/> 
            </Button>
            <li key={props.index}> {props.val}</li>
        </Stack>
        )
} 