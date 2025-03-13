import { FC, useState } from 'react';
import { Button } from '../Button';
import { CreateOfferModal } from '../CreateOfferModal';
import { Modal } from '../Modal';

export const CreateOfferContent: FC = () => {
  const [visable, setIsVisable] = useState(false);

  function handleOpenModal() {
    setIsVisable(true);
  }

  return (
    <>
      <Button
        handleClick={handleOpenModal}
        className='text-label-large text-white bg-primary rounded-2xl px-5 py-3 max-w-[384px] w-full'
      >
        Create offer
      </Button>
      <Modal
        visible={visable}
        setIsVisable={setIsVisable}
        backgroundClassName='z-10 bg-[#12121280] fixed inset-0 flex justify-center items-center'
      >
        <CreateOfferModal setVisable={setIsVisable} />
      </Modal>
    </>
  );
};
