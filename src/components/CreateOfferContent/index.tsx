import { FC, useState } from 'react';
import { Button } from '../Button';
import { CreateOfferModal } from '../CreateOfferModal';
import { Modal } from '../ui/Modal';

export const CreateOfferContent: FC = () => {
  const [visable, setIsVisable] = useState(false);

  function toggleModal() {
    setIsVisable((prev) => !prev);
  }

  return (
    <>
      <Button
        handleClick={toggleModal}
        className='text-label-large text-white bg-primary rounded-2xl px-5 py-3 max-w-[384px] w-full'>
        Create offer
      </Button>
      <Modal
        visible={visable}
        toggleModal={toggleModal}
        backgroundClassName='z-10 bg-[#12121280] fixed inset-0 flex justify-center items-center'>
        <CreateOfferModal toggleModal={toggleModal} />
      </Modal>
    </>
  );
};
