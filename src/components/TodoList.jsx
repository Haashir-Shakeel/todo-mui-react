import {Stack, Box, Container, Typography, Input, IconButton} from '@mui/material'
import {Add} from '@mui/icons-material'
import { useState } from 'react'

export const TodoList = () =>{
    const [task,setTask] = useState('')
    const [tasklist, setTasklist] = useState([])




    const handleClick = (event)=>{
        setTasklist((prevValue)=>{
            return [task, ...prevValue]
        })
        console.log(tasklist)
        setTask('')
        
    }
    return(
                
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Typography sx={{textAlign: 'center', textDecoration:'underline'}} variant='h4' >TODO LIST</Typography>
            <Stack justifyContent='space-evenly' direction='row'>
            <Input  placeholder='Enter task' value={task} onChange={e=>setTask(e.target.value)}></Input>
            <IconButton onClick={handleClick}>
                <Add/>
            </IconButton>
            </Stack>
            <ul>
                {
                tasklist.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
            </ul>
        </Box>
      </Container>
        
         
    )
}