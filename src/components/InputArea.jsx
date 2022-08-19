import { Add } from "@mui/icons-material"
import { IconButton, Input, Stack } from "@mui/material"
import { useState } from "react"

export const InputArea = (props) => {
    const [newTask,setNewTask] = useState('')

    return(  
    <Stack  justifyContent='space-evenly' direction='row'>
    <Input  placeholder='Enter task' value={newTask} onChange={e=>setNewTask(e.target.value)}></Input>
    <IconButton onClick={()=>{
        props.onAdd(newTask)
        setNewTask('')
        }}>
        <Add/>
    </IconButton>
    </Stack>
    
    )
}