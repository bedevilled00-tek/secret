import React from 'react'

import { Colors, ZIndex, Radius, Responsive } from 'ui/theme'

import { ModalProps } from './modal.types'

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-backdrop" onClick={onClose} />
          <div className="dialog">{children}</div>

          <style jsx>{`
            .modal-backdrop {
              content: ’’;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: ${Colors.Black};
              opacity: 0.5;
              z-index: ${ZIndex.Backdrop};
            }

            .dialog {
              z-index: ${ZIndex.Dialog};
              background-color: ${Colors.White};
              border-radius: ${Radius.Large};
              width: 100%;
              box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
              position: absolute;
              top: 100px;
              width: 550px;
              max-width: 90%;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
            }

            @media ${Responsive.Small} {
              .dialog {
                top: calc(100vh - 70%);
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}

Modal.defaultProps = {
  isOpen: false
}
