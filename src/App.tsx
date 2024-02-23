import { BrowserRouter} from 'react-router-dom';
import Footer from './components/footer';
import AboutMe from './components/about-me';
import Stack from '@mui/material/Stack';
import Skills from './components/skills';
import WorkExperience from './components/work-experience';

const App= () =>  {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}

export default App;
