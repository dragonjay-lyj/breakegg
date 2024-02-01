import {Link, User} from "@nextui-org/react";

export const X = ({ xsrc, xusername, xlink, xname }) => {
  
    return (

<User
            isExternal
            as={Link}
            avatarProps={{
              className: "w-9 h-9 text-large",
              src: xsrc,
            }}
            className="hover:opacity-100"
            classNames={{
              base: "-ml-2 px-2 py-1.5 hover:bg-default-100 dark:hover:bg-default-50 cursor-pointer transition-colors",
              name: "text-foreground",
            }}
            description={xusername}
            href={xlink}
            name={xname}
            />
            );
        };
        
        export default X;