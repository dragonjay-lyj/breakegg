import {Card, CardFooter, Button} from "@nextui-org/react";
import { useState } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

export const PostImage = ({ src1, src2, text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [copyResult, setCopyResult] = useState('');
  const copyText = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyResult('文本已复制到剪贴板');
      onOpen(); // 显示模态框
    } catch (err) {
      setCopyResult('无法复制文本: ' + err.message);
      onOpen(); // 显示模态框
    }
  };

  return (
    <>
    <Card isFooterBlurred isBlurred className="border-none" fullWidth>
    <ImgComparisonSlider className="transition-shadow duration-200 ease-[ease-in-out] focus:shadow-[0px_0px_15px_5px_#0c5d10]">
    <figure slot="first" className="m-0">
      <picture>
      <img className="object-cover" src={src1} />
      </picture>
      <figcaption className="left-3 right-3 text-[#111827] opacity-80 absolute -translate-y-2/4 leading-[100%] p-3 border-solid top-2/4">Before</figcaption>
    </figure>
    <figure slot="second" className="m-0">
      <picture>
      <img className="object-cover" src={src2} />
      </picture>
      <figcaption className="left-3 right-3 text-[#111827] opacity-80 absolute -translate-y-2/4 leading-[100%] p-3 border-solid top-2/4">After</figcaption>
    </figure>
  </ImgComparisonSlider>
  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    <p className="text-tiny text-white/80">点击旁边的复制按钮试一下</p>
    <Button className="text-tiny bg-black/20 text-white" variant="flat" color="default" radius="lg" size="sm" onClick={() => copyText(text)} onPress={onOpen}>复制</Button>
  </CardFooter>
</Card>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>复制结果</ModalHeader>
          <ModalBody>
            <p>{copyResult}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onPress={onClose}>
              关闭
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostImage;