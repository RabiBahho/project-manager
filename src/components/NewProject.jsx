import { Box, Button, Container, TextField } from '@mui/material';

const NewProject = ({ handleAddProject }) => {
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
            <Button sx={{ ...buttonStyles }} variant='outlined'>
               Save
            </Button>
            <Button
               sx={{ ...buttonStyles }}
               variant='outlined'
               onClick={handleAddProject}
            >
               Cancel
            </Button>
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextField
               sx={{
                  ...textFieldStyles,
               }}
               label='Title'
               variant='outlined'
            />
            <TextField
               sx={{
                  ...textFieldStyles,
               }}
               label='Description'
               variant='outlined'
            />
            <TextField
               sx={{
                  ...textFieldStyles,
               }}
               label='Due Date'
               variant='outlined'
            />
         </Box>
      </Container>
   );
};
export default NewProject;
