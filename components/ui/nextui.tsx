// app/providers.tsx
"use client";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./nav";
import CoralIsland_4 from "../../public/images/CoralIsland_4.webp";
import Image from "next/image";
import AudioPlayer from "./audioPlayer";
import { useAudioState } from "../../store";
export function NextUI({ children }: { children: React.ReactNode }) {
  const audioState = useAudioState();
  return (
    <NextUIProvider
      onClick={() => {
        audioState.openPlayer(false);
      }}
      className="max-h-[100dvh] h-screen w-full  text-foreground light overflow-auto"
    >
      <Nav />
      {children}
      <AudioPlayer />
      <Image
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] brightness-50 "
        src={CoralIsland_4}
        alt="CoralIsland"
        fill
      />
    </NextUIProvider>
  );
}
