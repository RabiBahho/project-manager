import { Button, Container, Grid, Typography } from '@mui/material';

const SideBar = ({
   projects,
   handleAddProject,
   handleSelectProject,
   selectedProjectId,
}) => {
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
            sx={{
               backgroundColor: '#dbd8e3',
               textTransform: 'none',
               ':hover': {
                  backgroundColor: '#A9A9A9',
               },
            }}
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
                     ':hover': {
                        backgroundColor: '#A9A9A9',
                     },
                     textTransform: 'none',
                     backgroundColor:
                        selectedProjectId === project.id
                           ? 'rgb(168 162 158)'
                           : '#dbd8e3',
                  }}
                  onClick={() => handleSelectProject(project.id)}
               >
                  {project.title}
               </Button>
            ))}
         </Grid>
      </Container>
   );
};

export default SideBar;
