import Heading from "@/components/heading"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import CallButton from "@/components/call-button"
import { Check } from "lucide-react"
import MockDiscordUI from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"

export default function page() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text ">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-400 max-w-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly ro your discord
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item) => (
                <li key={item} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <CallButton className="h-14 w-full">
                Start For Free Today
              </CallButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand- pb-4">
        <div className="absolute inset-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.webp"
                    avatarAlt="PingPanada Avatar"
                    username="PingPanda"
                    timestamp="today at 12:35PM"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 New User Signed up"
                    content={{
                      name: "Abbas Khalil",
                      email: "A.Khalil27@gmail.com",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}
