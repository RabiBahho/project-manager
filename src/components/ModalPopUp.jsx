import { forwardRef, useImperativeHandle, useRef } from 'react';

const ModalPopUp = forwardRef(({ children }, ref) => {
   const dialog = useRef();
   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal();
         },
      };
   });
   return (
      <dialog ref={dialog}>
         {children}
         {/* <form method='dialog'>
            <button>okay</button>
         </form> */}
      </dialog>
   );
});

export default ModalPopUp;
