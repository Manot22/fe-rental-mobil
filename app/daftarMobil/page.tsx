"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface daftar_mobil {
  id: number;
  nama: string;
  merk: string;
  kursi: number;
  bahan_bakar: string;
  harga: number;
}

const DaftarMobil = () => {
  const [daftar_mobils, setDaftar_mobils] = useState<daftar_mobil[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/daftar_mobil")
      .then((response) => setDaftar_mobils(response.data.data));
  }, []);

  const deleteMobil = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/daftar_mobil/${id}`)
      .then(() =>
        setDaftar_mobils(
          daftar_mobils.filter((daftar_mobils) => daftar_mobils.id !== id)
        )
      );
  };

  return (
    <section className="container mx-auto">
      <div className="flex justify-center items-center py-8">
        <h1 className="font-bold text-2xl">Daftar Mobil</h1>
      </div>
      {/* Mobil 1 */}
      <div className=" border border-indigo-600 p-6">
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-8">
          {daftar_mobils.map((daftar_mobil) => (
            // eslint-disable-next-line react/jsx-key
            <li className="">
              <div className="flex justify-between">
                <span className="whitespace-nowrap bg-black text-white rounded-lg px-3 py-1.5 text-xs font-medium">
                  {" "}
                  {daftar_mobil.merk}{" "}
                </span>
                <button
                  onClick={() => deleteMobil(daftar_mobil.id)}
                  className="rounded-md bg-red-600 p-1 w-[75px] text-sm font-medium transition hover:scale-105"
                >
                  Hapus
                </button>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {daftar_mobil.nama}
              </h3>
              <p className="mt-1.5 text-sm text-gray-700">
                Harga: {daftar_mobil.harga}
              </p>
              <p className="mt-1.5 text-sm text-gray-700">
                Kursi: {daftar_mobil.kursi}
              </p>
              <p className="mt-1.5 text-sm text-gray-700">
                Bahan Bakar: {daftar_mobil.bahan_bakar}
              </p>
              <form className="mt-4">
                <button className="block w-full rounded bg-indigo-400 p-4 text-sm font-medium transition hover:scale-105">
                  Sewa Mobil
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DaftarMobil;
