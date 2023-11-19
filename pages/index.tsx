import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Colosseum_2 from "../public/images/Colosseum_2.webp";
import Crackshooter_F from "../public/images/Crackshooter_F.webp";
import Magician_F_3 from "../public/images/Magician_F_3.webp";
import CoralIsland_4 from "../public/images/CoralIsland_4.webp";
import Flyff_2 from "../public/images/Flyff_2.png";
import { Button } from "@nextui-org/button";
export default function Home() {
  return (
    <>
      <div className="w-full max-h-[100dvh] h-screen flex flex-col">
        <div className="relative w-full flex-1 overflow-clip">
          <Image
            id="Colosseum_2"
            src={Colosseum_2}
            alt="Colosseum"
            fill
            className="object-cover "
          />
          <div className="absolute top-0 left-0 flex flex-row justify-center items-end w-full h-full ">
            <Image
              id="Magician_F_3"
              src={Magician_F_3}
              alt="Magician"
              className="w-full max-w-[300px] h-auto hidden md:block"
            />

            <Image
              id="Flyff_2"
              src={Flyff_2}
              alt="Flyff"
              className="w-full max-w-[400px] h-auto my-auto"
            />
            <Image
              id="Crackshooter_F"
              src={Crackshooter_F}
              alt="Crackshooter"
              className="w-full max-w-[300px] h-auto hidden md:block"
            />
          </div>
        </div>
        <div className="relative overflow-clip flex w-full justify-center gap-2 p-4 bg-secondary/20">
          <Button
            size="lg"
            color="primary"
            variant="shadow"
            className="flex-1 font-bold text-white max-w-[200px] z-10"
          >
            MINT
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            className="flex-1 font-bold text-white max-w-[200px] z-10"
          >
            REGISTER
          </Button>
        </div>
      </div>
      <div className="h-full w-full p-4"></div>
    </>
  );
}
