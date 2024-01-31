// Import React for handling dynamic content
import { CalendarDays } from "lucide-react"
 
import {Avatar} from "@nextui-org/react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Link} from "@nextui-org/react";

// Define the HoverCard component
export const HoverCardD = ({ src, username, des, pubDate, link }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={link} color="foreground">{username}</Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar isBordered src={src} />
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">{username}</h4>
        <p className="text-sm">{des}</p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground"> {pubDate} </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardD;