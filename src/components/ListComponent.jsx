import { Delete } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import { useState } from "react"

export const ListComponent = (props) =>{
    const [line,setLine] = useState(false)

    const deleteFromList = ()=>{
        console.log('delete from list working')
        setLine(prevValue=>{
            console.log(prevValue)
            return !prevValue
        })
    }
    return (
        <Stack alignItems='center' justifyContent='flex-start' direction='row'>
            <Button onClick={deleteFromList} sx={{marginLeft:0}}> <Delete/> </Button>
            <li style={{textDecoration: line ? "line-through" : "none"}} key={props.index}> {props.val}</li>
        </Stack>
        )
} 