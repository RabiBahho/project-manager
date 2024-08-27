import { Button, Container, Typography } from '@mui/material';

const NoSelectedProject = ({ handleAddProject }) => {
   return (
      <Container
         sx={{
            height: '100%',
            margin: 0,
            backgroundColor: '#D3D3D3',
            borderTopLeftRadius: '2rem',
            borderTopRightRadius: '2rem',
            width: '35rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingY: '2rem',
         }}
      >
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
