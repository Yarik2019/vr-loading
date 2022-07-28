import React, { useRef } from 'react'

const ModalVideo = ({ isOpen, setOpen, children }) => {
const modalRef = useRef();


  function CloseModal() {
    if (!modalRef.outerWidth) {
      setOpen(false);
    }
  }

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-10 bg-[#0a0a0acc] cursor-pointer" ref={modalRef} onClick={() => CloseModal()}>
        <div className=' w-full h-screen flex justify-center items-center '>
          <div className="max-w-[600px] max-h-[360px] w-full h-full m-[20px] bg-[black]" >
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ModalVideo;