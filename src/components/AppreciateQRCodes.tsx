import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import {Image} from "@nextui-org/react";

const AppreciateQRCodes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <Button onPress={onOpen} startContent={<FontAwesomeIcon icon={faQrcode} />}>赞赏</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>觉得可以的话可以赞赏我哦~ღ( ´･ᴗ･` )</ModalHeader>
          <ModalBody>
            
            <div className="grid gap-2 grid-cols-2">
          <div className=''>微信
          <Image
          loading="lazy"
          isBlurred
      width={300}
      alt="微信"
      src="https://i1.wp.com/i.ibb.co/gPYDVZC/wxpf2f0-A3-Od-YPia-HEFVtuk-UAXWeru-XC50p0c-Sk-L6-N8o-LV5-DZio.png"
    />
    </div>
    <div className=''>支付宝
    <Image
    loading="lazy"
    isBlurred
      width={300}
      alt="支付宝"
      src="https://i1.wp.com/i.ibb.co/Jxks1z6/httpsqr-alipay-comfkx10123ym1kfeinpuekk36.png"
    />
    </div>
    </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              \(^o^)/~
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppreciateQRCodes;
