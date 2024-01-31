// Import React for handling dynamic content
import { CalendarDays } from "lucide-react"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Link, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faPixiv } from '@fortawesome/free-brands-svg-icons'

// Define the HoverCard component
const HoverCardD = ({ tsrc, username, tdes, thref, tpubDate, pixiv }) => {

  return (
    <HoverCard>
  <HoverCardTrigger asChild>
    <div className="grid grid-cols-2" data-aos="fade-up">
      <div className="aspect-square h-full w-full overflow-hidden rounded-2xl bg-blue-50 shadow-md duration-300 hover:scale-[1.05] hover:shadow-lg md:h-56 md:shadow-none">
        <div className="dark:bg-gray-800 flex h-2/3 flex-row justify-center gap-4 bg-white md:h-3/5 md:justify-evenly">
          <div className="flex w-20 items-center justify-center md:w-1/5">
            <Avatar>
              <AvatarImage src={tsrc} />
              <AvatarFallback>Ava</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex w-2/5 flex-col items-center justify-center md:items-start">
            <h4 className="text-sm font-semibold text-black dark:text-white">{username}</h4>
            <div className="hidden md:block md:text-4xl"></div>
          </div>
        </div>
        <div className="dark:bg-gray-800 flex h-1/3 flex-row items-center justify-evenly bg-gray-50 md:h-2/5">
          <Button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" href={thref} as={Link}><FontAwesomeIcon icon={faXTwitter} /> Twitter</Button>
          <Button
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            href={pixiv}
            as={Link}
            style={{ backgroundColor: '#0096fa', color: 'white' }}
          >
            <FontAwesomeIcon icon={faPixiv} />
            Pixiv
          </Button>
        </div>
      </div>
    </div>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src={tsrc} />
        <AvatarFallback>Ava</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">{username}</h4>
        <p className="text-sm">{tdes}</p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground"> {tpubDate} </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
  );
};

export default HoverCardD;