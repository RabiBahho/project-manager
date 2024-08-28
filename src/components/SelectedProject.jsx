import {
   Box,
   Button,
   Container,
   TextField,
   Typography,
   useMediaQuery,
} from '@mui/material';
import { useState } from 'react';

const SelectedProject = ({
   selectedProject,
   handleDeleteProject,
   handleAddTask,
   tasks,
   handleClearTask,
}) => {
   console.log(tasks);

   var formattedDate = new Date(selectedProject.dueDate)
      .toLocaleString('en-EN', {
         day: 'numeric',
         month: 'short',
         year: 'numeric',
      })
      .split(' ')
      .join(' ');

   const [enteredTask, setEnteredTask] = useState();
   function AddTask() {
      setEnteredTask('');
      handleAddTask(enteredTask);
   }
   const md = useMediaQuery('(min-width: 700px)');
   return (
      <>
         <Container
            sx={{
               height: '100%',
               margin: 0,
               backgroundColor: '#D3D3D3',
               borderTopLeftRadius: '2rem',
               borderTopRightRadius: '2rem',
               width: !md ? '100%' : '35rem',
               display: 'flex',
               flexDirection: 'column',
               paddingY: '2rem',
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
               }}
            >
               <Typography
                  fontSize={'20px'}
                  fontWeight={'bold'}
                  marginBottom={'1rem'}
               >
                  {selectedProject.title}
               </Typography>
               <Button
                  color='#808080'
                  sx={{
                     textTransform: 'none',
                     ':hover': { backgroundColor: 'rgb(168 162 158)' },
                  }}
                  onClick={() => handleDeleteProject(selectedProject.id)}
               >
                  Delete
               </Button>
            </Box>

            <Typography color='#808080' marginBottom={'1rem'}>
               {formattedDate}
            </Typography>
            <Typography marginBottom={'1rem'}>
               {selectedProject.description}{' '}
            </Typography>
            <Box
               height={'2px'}
               sx={{ backgroundColor: '#808080' }}
               marginBottom={'1rem'}
            ></Box>
            <Typography
               fontSize={'20px'}
               fontWeight={'bold'}
               marginBottom={'2rem'}
            >
               Tasks
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: '1rem',
                     marginBottom: '1rem',
                  }}
               >
                  <TextField
                     onChange={(e) => setEnteredTask(e.target.value)}
                     type='text'
                     value={enteredTask}
                     sx={{
                        width: '20rem',
                        '.MuiInputLabel-outlined.Mui-focused': {
                           color: 'black',
                        },
                        '& .MuiOutlinedInput-root': {
                           '&.Mui-focused fieldset': {
                              borderColor: 'rgb(168 162 158)',
                           },
                        },
                     }}
                  />
                  <Button
                     color='#808080'
                     sx={{
                        textTransform: 'none',
                        ':hover': { backgroundColor: 'rgb(168 162 158)' },
                     }}
                     onClick={() => AddTask()}
                  >
                     Add Task
                  </Button>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     width: '100%',
                     gap: '1rem',
                  }}
               >
                  {tasks.map((task) => (
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: 'row',

                           backgroundColor: '#A9A9A9',
                           height: '3rem',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           padding: '10px',
                        }}
                     >
                        <Typography key={task.id}>{task.text}</Typography>
                        <Button onClick={() => handleClearTask(task.id)}>
                           Clear
                        </Button>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Container>
      </>
   );
};

export default SelectedProject;
