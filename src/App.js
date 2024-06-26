import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';

import {Feed, ChannelDetail, VideoDetail, SearchFeed, Navbar} from './Components';

const App = () => (
  <BrowserRouter>
  <Box sx={{background: 'red'}}>
    <Navbar />
    <Routes>
        <Route path ="/" exact element ={<Feed />} />
        <Route path ="/video/:id" exact element ={<VideoDetail />} />
        <Route path ="/Channel/:id" exact element ={<ChannelDetail />} />
        <Route path ="/search/: searchTerm" exact element ={<SearchFeed />} />
    </Routes>

  </Box>
  </BrowserRouter>
)

export default App