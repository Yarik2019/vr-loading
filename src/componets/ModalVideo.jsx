import React, { useRef } from 'react'
import {CSSTransition} from 'react-transition-group';
const ModalVideo = ({ isOpen, setOpen, children }) => {
  const modalRef = useRef();


  function CloseModal() {
    if (!modalRef.outerWidth) {
      setOpen(false);
    }
  }
    return (
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
        classNames={`${isOpen ? 'opacity-100 translate-y-[0px]':'opacity-0 -translate-y-[-200px]'} transition ease-in-out duration-500`}
      >
        <div className="fixed inset-0 z-10 bg-[#0a0a0acc] cursor-pointer" ref={modalRef} onClick={() => CloseModal()}>
          <div className=' w-full h-screen flex justify-center items-center '>
            <div className="max-w-[600px] max-h-[360px] w-full h-full m-[20px] bg-[black]" >
              <div className="w-full h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )

}

export default ModalVideo;