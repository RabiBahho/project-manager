import { Box, Button, Container, FormControl, TextField } from '@mui/material';
import { useRef } from 'react';

const NewProject = ({ handleStartNewProject, handleAddProject }) => {
   const title = useRef();
   const description = useRef();
   const dueDate = useRef();
   const buttonRef = useRef();

   function handleSave(e) {
      e.preventDefault();
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDueDAte = dueDate.current.value;

      handleAddProject({
         title: enteredTitle,
         description: enteredDescription,
         dueDAte: enteredDueDAte,
      });
   }

   const buttonStyles = {
      color: 'black',
      borderColor: 'transparent',
      backgroundColor: '#888888',
   };
   const textFieldStyles = {
      '.MuiInputLabel-outlined.Mui-focused': {
         color: 'black',
      },
      '& .MuiOutlinedInput-root': {
         '&.Mui-focused fieldset': {
            borderColor: 'black',
         },
      },
   };
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
         }}
      >
         <Box
            sx={{
               marginY: '2rem',
               alignSelf: 'end',
               display: 'flex',
               gap: '1rem',
            }}
         >
            <Button
               sx={{ ...buttonStyles }}
               variant='outlined'
               onClick={(e) => {
                  handleSave(e);
               }}
               type='submit'
               form='submit'
            >
               Save
            </Button>
            <Button sx={{ ...buttonStyles }} variant='outlined'>
               Cancel
            </Button>
         </Box>
         <form id='submit'>
            <FormControl sx={{ width: '100%' }}>
               <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
               >
                  <TextField
                     sx={{
                        ...textFieldStyles,
                     }}
                     label='Title'
                     variant='outlined'
                     inputRef={title}
                     name='title'
                     type='text'
                     required
                  />
                  <TextField
                     sx={{
                        ...textFieldStyles,
                     }}
                     label='Description'
                     variant='outlined'
                     inputRef={description}
                     type='text'
                     required={true}
                     multiline
                     rows={4}
                  />
                  <TextField
                     sx={{
                        ...textFieldStyles,
                     }}
                     label='Due Date'
                     variant='outlined'
                     InputLabelProps={{ shrink: true }}
                     inputRef={dueDate}
                     type='date'
                     required={true}
                  />
               </Box>
            </FormControl>
         </form>
      </Container>
   );
};
export default NewProject;
