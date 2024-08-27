import {
   Button,
   Container,
   Grid,
   List,
   ListItem,
   Typography,
} from '@mui/material';

const SideBar = ({ projects, handleAddProject }) => {
   return (
      <Container
         sx={{
            width: '20rem',
            backgroundColor: '#28282B',
            margin: 0,
            borderTopRightRadius: '2rem',
            paddingY: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <Typography
            color='white'
            fontSize={'20px'}
            fontWeight={'bold'}
            textAlign={'center'}
            marginBottom={'1.5rem'}
            textTransform={'uppercase'}
         >
            Your Projects
         </Typography>
         <Button
            color='black'
            variant='outlined'
            sx={{ backgroundColor: '#dbd8e3', textTransform: 'none' }}
            onClick={handleAddProject}
         >
            + Add Project
         </Button>
         <Grid
            container
            sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem',
               marginTop: '2rem',
               alignItems: 'center',
            }}
         >
            {projects.map((project) => (
               <Button
                  key={project.id}
                  sx={{
                     color: 'black',
                     width: 'fit-content',

                     textTransform: 'none',
                     backgroundColor: '#dbd8e3',
                  }}
               >
                  {project.title}
               </Button>
            ))}
         </Grid>
      </Container>
   );
};

export default SideBar;
