import {Stack, Box, Container, Typography, Input, IconButton, Button} from '@mui/material'
import {Add, Delete} from '@mui/icons-material'
import { useState } from 'react'
import { ListComponent } from './ListComponent'
import { ListComList } from './ListComList'

export const TodoList = () =>{
    const [task,setTask] = useState('')
    const [tasklist, setTasklist] = useState([])
    




    const AddItemToList = (event)=>{
        setTasklist((prevValue)=>{
            return [...prevValue, task]
        })
        console.log(tasklist)
        setTask('')
        
    }

   

    

    return(
                
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Typography sx={{textAlign: 'center', textDecoration:'underline'}} variant='h4' >TODO LIST</Typography>
            <Stack  justifyContent='space-evenly' direction='row'>
            <Input  placeholder='Enter task' value={task} onChange={e=>setTask(e.target.value)}></Input>
            <IconButton onClick={AddItemToList}>
                <Add/>
            </IconButton>
            </Stack>
            <ul>
                {
                tasklist.map((item,index)=>{
                    // return <ListComponent val={item} key={index}/>
                    return <ListComList val={item} key={index}/>
                                })
            }
            </ul>
        </Box>
      </Container>
        
         
    )
}