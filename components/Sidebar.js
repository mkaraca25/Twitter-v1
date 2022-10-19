import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon ,  HashtagIcon} from "@heroicons/react/24/solid"
import {BookmarkIcon, BellIcon, InboxIcon, ClipboardIcon, UserIcon, EllipsisHorizontalIcon, EllipsisHorizontalCircleIcon} from "@heroicons/react/24/outline"


export default function Sidebar() {
  return (
    <div>
        {/* Twitter logo */}
        <div className="">
            <Image height="50" width="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}
        <SidebarMenuItem text="Home" Icon={HomeIcon}/>
                    <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
                    <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
                    <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
                    <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
                    <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
                    <SidebarMenuItem text="Profile" Icon={UserIcon}/>
                    <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}/>
        {/* Button */}

        {/* Mini-Profile */}
    </div>
  )
}
