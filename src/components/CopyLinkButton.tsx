import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const CopyLinkButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    onOpen(); // 打开模态窗口
  };

  return (
    <>
      <Button onPress={handleCopy} startContent={<FontAwesomeIcon icon={faShare} />}>分享</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>复制结果</ModalHeader>
          <ModalBody>
            <p>链接已复制!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              关闭
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CopyLinkButton;
