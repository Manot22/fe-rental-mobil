"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Why from "@/components/Why";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleMobil = () => {
    router.push("/daftarMobil");
  };
  return (
    <section className="h-full ">
      <div>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="text-start">
                <span className="text-3xl capitalize">
                  Cari <span className="text-indigo-500">mobil</span> untuk{" "}
                  <span className="text-indigo-500">kenyamanan</span> perjalanan
                  anda.
                </span>
              </h1>
              <p className="max-w-[580px] mb-9 text-xl text-start">
                Kemudahan dalam melakukan rental mobil yang aman dan terpercaya,
                tentunya dengan harga murah.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  onClick={handleMobil}
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center bg-transparent gap-2"
                >
                  <span>Lihat mobil</span>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6 "
                    iconStyles="w-9 h-9 border-2 border-blue-500 rounded-full flex justify-center
                items-center 500 text-base hover:bg-accent hover:text-primary
                hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
          <h1 className="font-bold text-md flex justify-center items-center mb-2">
            Kenapa Harus Memilih Renbi.com ?
          </h1>
          <Why />
        </div>
      </div>
    </section>
  );
};

export default Home;
