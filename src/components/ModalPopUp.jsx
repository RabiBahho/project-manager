import { Button } from '@mui/material';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalPopUp = forwardRef(({ children }, ref) => {
   const dialog = useRef();
   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal();
         },
      };
   });
   return createPortal(
      <dialog
         ref={dialog}
         style={{
            backdropFilter: 'blur(40px)',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: 'rgb(120 113 108)',
         }}
      >
         {children}
         <form method='dialog'>
            <Button
               type='submit'
               sx={{
                  width: 'fit-content',
                  minWidth: 'fit-content',
                  color: 'black',
                  '&.MuiButton-root': { padding: '0' },
                  ':hover': { backgroundColor: 'rgb(168 162 158)' },
               }}
               disableRipple
            >
               okay
            </Button>
         </form>
      </dialog>,
      document.getElementById('modal-root')
   );
});

export default ModalPopUp;
