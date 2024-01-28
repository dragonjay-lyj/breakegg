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
import {X, Visibility} from '@mui/icons-material/';

// Define the HoverCard component
const HoverCardD = ({ tsrc, username, tdes, thref, tpubDate }) => {

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
      <Button
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            href={thref}
            as={Link}
          >
            <X className="mr-1.5 h-5 w-5 fill-current" /> Twitter
          </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={tsrc} />
            <AvatarFallback>Ava</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{username}</h4>
            <p className="text-sm">
              {tdes}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {tpubDate}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardD;