"use client";
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { useRef, useEffect, useState } from "react";
import {
  MdOutlinePlayArrow,
  MdMusicNote,
  MdPlayArrow,
  MdSkipPrevious,
  MdPause,
  MdSkipNext,
  MdStop,
} from "react-icons/md";
import { AnimatePresence, motion as m } from "framer-motion";
import { useAudioState } from "../../store";
import Marquee from "react-fast-marquee";
export default function AudioPlayer() {
  const audioState = useAudioState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isStopped) audio.current!.currentTime = audio.current!.duration;
  }, [isPlaying, isStopped]);

  return (
    <div>
      <audio
        hidden
        onPlay={() => {
          setIsPlaying(true);
          setIsStopped(false);
        }}
        onPause={() => {
          setIsPlaying(false);
          setIsStopped(false);
        }}
        controls
        ref={audio}
        src="../audios/general.mp3"
        autoPlay
      />
      <AnimatePresence initial={false} mode="sync">
        {!audioState.isOpen ? (
          <m.div
            key={"audioBtn"}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Tooltip
              showArrow
              defaultOpen
              placement="top-start"
              content="click to enable music"
              size="sm"
            >
              <Button
                onClick={() => {
                  audioState.openPlayer(true);
                  audio.current?.play();
                }}
                isIconOnly
                radius="full"
                className="text-2xl absolute text-white bottom-4 left-4"
                color="secondary"
                variant="shadow"
              >
                <MdMusicNote />
              </Button>
            </Tooltip>
          </m.div>
        ) : (
          <m.div
            key={"audioPlayer"}
            initial={{ skewX: "20deg", opacity: 0, translateX: "-20px" }}
            animate={{ skewX: "0deg", opacity: 1, translateX: "0px" }}
            exit={{ skewX: "20deg", opacity: 0, translateX: "-20px" }}
            className="z-50 fixed bottom-0 left-0"
            onClick={() => audioState.openPlayer(false)}
          >
            <div className=" mb-4 ml-4 max-w-[150px] w-screen">
              <Marquee className="text-xs text-white">General Theme</Marquee>
              <ButtonGroup
                isIconOnly
                size="sm"
                color="secondary"
                variant="shadow"
                className="text-white w-full min-w-0 max-w-full"
              >
                <Button className="text-xl" radius="full">
                  <MdSkipPrevious />
                </Button>
                {!isPlaying ? (
                  <Button
                    onClick={() => audio.current?.play()}
                    className="text-xl"
                    radius="full"
                  >
                    <MdPlayArrow />
                  </Button>
                ) : (
                  <Button
                    onClick={() => audio.current?.pause()}
                    className="text-xl"
                    radius="full"
                  >
                    <MdPause />
                  </Button>
                )}
                {!isStopped && (
                  <Button
                    onClick={() => {
                      setIsPlaying(false);
                      setIsStopped(true);
                    }}
                    className="text-xl"
                    radius="full"
                  >
                    <MdStop />
                  </Button>
                )}
                <Button className="text-xl" radius="full">
                  <MdSkipNext />
                </Button>
              </ButtonGroup>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
