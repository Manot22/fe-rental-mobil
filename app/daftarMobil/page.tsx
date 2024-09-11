"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { BsFuelPumpDieselFill } from "react-icons/bs";
import { FaRupiahSign } from "react-icons/fa6";
import { PiOfficeChairFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";

// Dropdown
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface daftar_mobil {
  id: number;
  image: string;
  nama: string;
  merk: string;
  kursi: number;
  bahan_bakar: string;
  harga: number;
}

const DaftarMobil = () => {
  const [daftar_mobil, setDaftar_mobil] = useState<daftar_mobil[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/daftar_mobil")
      .then((response) => setDaftar_mobil(response.data.data));
  }, []);

  const deleteMobil = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/daftar_mobil/${id}`)
      .then(() =>
        setDaftar_mobil(
          daftar_mobil.filter((daftar_mobil) => daftar_mobil.id !== id)
        )
      );
  };

  const handleEdit = (id: number) => {
    router.push(`daftarMobil/edit/${id}`);
  };

  return (
    <section className="container mx-auto mb-8">
      <div className="flex justify-center items-center m-3">
        <h1 className="font-bold text-2xl text-indigo-500">Daftar Mobil</h1>
      </div>
      <Link href="/daftarMobil/addDaftarMobil">
        <button
          type="submit"
          className="border-2 border-white rounded-xl m-4 px-8 bg-indigo-500 text-white hover:bg-white hover:text-black hover:border-2 hover:border-indigo-500"
        >
          Tambah
        </button>
      </Link>
      {/* Mobil 1 */}

      <ul className="grid md:grid-cols-3 grid-cols-2 gap-8 box-border w-auto h-auto">
        {daftar_mobil.map((daftar_mobil) => (
          // eslint-disable-next-line react/jsx-key
          <li
            key={daftar_mobil.id}
            className="border-2 border-blue-500 rounded-2xl p-4 shadow-xl"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/images/${daftar_mobil.image}`}
              width={350}
              height={350}
              className="w-full max-h-64 object-cover rounded-lg"
              alt="..."
            />

            <div className="flex justify-between items-center">
              <h1 className="whitespace-nowrap text-blue-600 font-bold rounded-lg px-3 py-1.5 text-md">
                {daftar_mobil.merk}
              </h1>

              {/* DROPDOWN */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="" variant="outline">
                    <CiMenuKebab />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    onClick={() => handleEdit(daftar_mobil.id)}
                  >
                    Edit
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => deleteMobil(daftar_mobil.id)}
                  >
                    Hapus
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <h3 className="text-lg font-medium text-gray-900">
              {daftar_mobil.nama}
            </h3>
            <div className="grid grid-cols-2 ">
              <p className="mt-1.5 text-sm text-gray-700 flex items-center gap-2">
                <FaRupiahSign /> {daftar_mobil.harga}
              </p>
              <p className="mt-1.5 text-sm text-gray-700 flex justify-end items-center gap-2">
                <PiOfficeChairFill /> {daftar_mobil.kursi}
              </p>
              <p className="mt-1.5 text-sm text-gray-700 flex items-center gap-2">
                <BsFuelPumpDieselFill /> {daftar_mobil.bahan_bakar}
              </p>
            </div>
            <form className="mt-4">
              <button
                type="submit"
                className="block w-full rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-4 text-sm font-medium transition hover:scale-105"
              >
                Sewa Mobil
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DaftarMobil;
