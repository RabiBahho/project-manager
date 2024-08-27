import { Box, Button, Container, Typography } from '@mui/material';
import noProject from '../assets/no-projects.png';

const NoSelectedProject = ({ handleAddProject }) => {
   return (
      <Container
         sx={{
            height: '100%',
            margin: 0,
            backgroundColor: '#D3D3D3',
            borderTopLeftRadius: '2rem',
            borderTopRightRadius: '2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingY: '5rem',
            '&.MuiContainer-root': { maxWidth: '100%' },
         }}
      >
         <Box sx={{ width: '5rem', height: '5rem', marginBottom: '2rem' }}>
            <img
               src={noProject}
               alt='noProject'
               width={'100%'}
               height={'100%'}
            />
         </Box>
         <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
            No Project Selected
         </Typography>
         <Typography sx={{ marginBottom: '1rem' }}>
            Select a Project or get Started with a new One!
         </Typography>
         <Button
            sx={{
               color: 'black',
               borderColor: 'transparent',
               backgroundColor: '#888888',
            }}
            onClick={handleAddProject}
         >
            Create new Project
         </Button>
      </Container>
   );
};

export default NoSelectedProject;
