import React from 'react';
import { Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Footer from './components/footer';
import AboutMe from './components/about-me';
import Stack from '@mui/material/Stack';
import Skills from './components/skills';
import WorkExperience from './components/work-experience';

const App= () =>  {
  return (
      <Route>
        <Stack
          spacing={4}
          sx={{
          }}
          height={'100%'}
          >
            <AboutMe/>
            <Skills />
            <WorkExperience />
            <Footer/>
        </Stack>
      </Route>
  );
}

export default App;
