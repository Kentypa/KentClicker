import { createPortal } from 'react-dom';
import { ComponentWithChildren } from '../../types/component-with-children';

type ModalProps = {
  visible: boolean;
  setIsVisable: (newValue: boolean) => void;
  backgroundClassName: string;
};

export const Modal: ComponentWithChildren<ModalProps> = ({
  visible,
  backgroundClassName,
  children,
  setIsVisable,
}) => {
  return (
    <>
      {visible &&
        createPortal(
          <div
            className={backgroundClassName}
            onClick={() => {
              setIsVisable(false);
            }}
          >
            <div
              className='contents'
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
