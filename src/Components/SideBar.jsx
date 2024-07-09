import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'


const selectedCategory = 'New';

const SideBar = () =>  (
    <Stack direction="row"
    sx={{overflowY:'auto',
    height:{sx:'auto',md:'95%'},
    flexDirection: {md:'column'}
}}>
      { categories.map((Category) =>  (
        <button 
        className = "category-btn"
        style={{background:Category.name === selectedCategory && '#FC1503',color:'white'

        }} key={Category.name}>
            <span>{Category.icon}</span>
            <span>{Category.name}</span>
        </button>
      ))}
    </Stack>
  )


export default SideBar