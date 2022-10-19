import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
export default function SidebarMenuItem({text,Icon}) {
  return (
    <div >
        <Icon className="h-7"/>
        <span>{text}</span>
    </div>
  )
}
