import { PropsWithChildren } from "react"
import { Icons } from "./icon"
import {
  Cog,
  Headphones,
  Inbox,
  Mic,
  PlusCircle,
  UserCircleIcon,
} from "lucide-react"
import Image from "next/image"

function MockDiscordUI({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-gray text-white rounded-lg overflow-hidden shadow-xl">
      {/* Server List */}
      <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>
        <div className="w-8 h-[2px] bg-discord-gray my-2 rounded-full" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}
        <div className="group size-12 bg-discord-gray rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3ba55c] mt-auto">
          <PlusCircle className="text-[#3ba55c] group-hover:text-white" />
        </div>
      </div>

      {/* DM List */}
      <div className="hidden md:flex w-60 flex-col bg-[#2f3136]">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500">
            Find or start a conversation
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1 rounded hover:bg-[#393c43] text-[#dcddde]">
              <UserCircleIcon className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1 rounded hover:bg-[#393c43] text-[#dcddde]">
              <Inbox className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>
          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>

            <div className="flex items-center px-2 py-1.5 rounded bg-[#3934c3] text-white cursor-pointer">
              <Image
                src="/brand-asset-profile-picture.webp"
                alt="PingPanda Avatar"
                width={32}
                height={32}
                className="object-cover rounded-full mr-3"
              />
              <span className="font-medium">PingPanda</span>
            </div>
            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div
                  className="flex items-center px-2 py-1.5 rounded text-gray-600"
                  key={i}
                >
                  <div className="size-8 rounded-full bg-discord-gray mr-3" />
                  <span className="font-medium">User {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xm text-[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Mic className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Headphones className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Cog className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockDiscordUI
