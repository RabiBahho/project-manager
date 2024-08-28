import {
   Box,
   Button,
   Container,
   TextField,
   Typography,
   useMediaQuery,
} from '@mui/material';
import { useRef } from 'react';
import ModalPopUp from './ModalPopUp';

const NewProject = ({
   handleStartNewProject,
   handleAddProject,
   handleCancel,
}) => {
   const title = useRef();
   const description = useRef();
   const dueDate = useRef();
   const modal = useRef();

   function handleSave(e) {
      //   e.preventDefault();
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDueDate = dueDate.current.value;

      if (
         enteredTitle.trim() === '' ||
         enteredDescription.trim() === '' ||
         enteredDueDate.trim() === ''
      ) {
         modal.current?.open();
         return;
      }

      handleAddProject({
         title: enteredTitle,
         description: enteredDescription,
         dueDate: enteredDueDate,
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
   const md = useMediaQuery('(min-width: 700px)');
   return (
      <>
         <ModalPopUp ref={modal}>
            <Typography
               fontSize={'20px'}
               fontWeight={'bold'}
               marginBottom={'1rem'}
            >
               Invalid Input
            </Typography>
            <Typography marginBottom={'1rem'}>
               Please fill every Input field with some Text !
            </Typography>
         </ModalPopUp>
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
               <Button
                  sx={{ ...buttonStyles }}
                  variant='outlined'
                  onClick={handleCancel}
               >
                  Cancel
               </Button>
            </Box>

            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
               }}
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
         </Container>
      </>
   );
};
export default NewProject;
