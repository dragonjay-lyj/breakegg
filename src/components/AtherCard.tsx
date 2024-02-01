import { Link, Button } from "@nextui-org/react";

export const AtherCard = ({ title, link, icon }) => {
    return (
<Button
      href={link}
      as={Link}
      showAnchorIcon
      radius="md"
      variant="solid"
      startContent={icon}
      isExternal
      isBlock
    >
      {title}
    </Button>


);
};

export default AtherCard;