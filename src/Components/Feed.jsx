import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import SideBar from './SideBar';
import { fectFromAPI } from '../utils/fetchFromApI';


const Feed = () => {
useState(() => {
   
})


useEffect(() => {
 fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[]);
  return (
    <Stack sx={{flexDirection:{ sx: "column", md:"row"}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, 
      borderRight: '1px solid #3d3d3d',
      px:{sx:0, md:2}}}> 
      <SideBar />
      <Typography className="copyright" 
      variant="body2"
      sx={{mt:1.5, color: '#fff'}}>
          Copyright 2024 Youtube Media
      </Typography>
      </Box>
     <Box>
      <Typography variant='h4'
      fontweigth = "bold" mb={2} sx={{
        color:'white'
      }}>
              NEW <span style={{color:'#F31903'}}>videos</span>
      </Typography>
      
     </Box>
    </Stack>
  )
}

export default Feed