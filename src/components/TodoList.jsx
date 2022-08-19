import {Stack, Box, Container, Typography, Input, IconButton, Button} from '@mui/material'
import {Add} from '@mui/icons-material'
import { useState } from 'react'
import { ListComponent } from './ListComponent'
import { ListComList } from './ListComList'
import { TodoItem } from './TodoItems'
import { InputArea } from './InputArea'

export const TodoList = () =>{
    
    const [tasklist, setTasklist] = useState([])
    
    const AddItemToList = (newTask)=>{
        setTasklist((prevValue)=>{
            return [...prevValue, newTask]
        })
        console.log(tasklist)    
    }

    const DeleteItem = (id) => {
        console.log('inside Delete item')
        setTasklist((prevItems) => {
            return prevItems.filter((item,index)=>{ 
                return index !== id
            })
        })
    }

    return(
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Typography sx={{textAlign: 'center', textDecoration:'underline'}} variant='h4' >TODO LIST</Typography>
            {/* <Stack  justifyContent='space-evenly' direction='row'>
            <Input  placeholder='Enter task' value={task} onChange={e=>setTask(e.target.value)}></Input>
            <IconButton onClick={AddItemToList}>
                <Add/>
            </IconButton>
            </Stack> */}
            <InputArea onAdd = {AddItemToList}/>

            <ul>
                {
                tasklist.map((item,index)=>{
                    // it would even work if you not put return
                    // return <ListComponent val={item} key={index}/>
                    // return <ListComList val={item} key={index}/>
                    return <TodoItem 
                    val={item} key={index} id={index}
                    onDeleteItemClick={DeleteItem}
                    />
                    
                })
                }
            </ul>
        </Box>
      </Container>
        
         
    )
}