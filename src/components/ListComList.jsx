//using List from MUI instead of li
import { Delete } from "@mui/icons-material"
import { Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"
import { useState } from "react"

export const ListComList = (props) =>{
    const [line,setLine] = useState(false)

    const deleteFromList = ()=>{
        console.log('delete from list working')
        setLine(true)
    }
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon onClick={deleteFromList}>
                        <Delete/>                      
                    </ListItemIcon>
                    <ListItemText style={{textDecoration: line ? "line-through" : "none"}} primary={props.val}/>
                </ListItemButton>
            </ListItem>
            <Divider></Divider>
        </List>
        )
} 