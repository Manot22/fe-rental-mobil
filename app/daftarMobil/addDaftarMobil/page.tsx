"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const Tambah = () => {
  const [image, setImage] = useState<File | null>(null);
  const [nama, setNama] = useState("");
  const [merk, setMerk] = useState("");
  const [kursi, setKursi] = useState("");
  const [bahan_bakar, setBahanBakar] = useState("");
  const [harga, setHarga] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Pastikan file gambar sudah dipilih
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      // Buat FormData untuk mengirim file dan data lainnya
      const formData = new FormData();
      formData.append("image", image); // append gambar
      formData.append("nama", nama); // append nama
      formData.append("merk", merk); // append merk
      formData.append("kursi", kursi); // append kursi
      formData.append("bahan_bakar", bahan_bakar); // append bahan bakar
      formData.append("harga", harga); // append harga

      // Kirim request dengan axios
      await axios.post("http://localhost:8000/api/daftar_mobil", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Pastikan header ini diset
        },
      });

      // Redirect setelah berhasil
      router.push("/daftarMobil");
    } catch (error) {
      console.error("gagal nambah data mobil:", error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl mt-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <form
        action="#"
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div className="relative">
          <input
            id="image"
            type="file"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            accept=".jpeg,.jpg,.png,.gif"
            placeholder="Masukkan Foto"
          />
        </div>
        <div className="relative">
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nama"
          />
        </div>

        <div className="relative">
          <input
            id="merk"
            type="text"
            value={merk}
            onChange={(e) => setMerk(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Merk"
          />
        </div>

        <div className="relative">
          <input
            id="kursi"
            type="text"
            value={kursi}
            onChange={(e) => setKursi(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Kursi"
          />
        </div>

        <div className="relative">
          <input
            id="bahan_bakar"
            type="text"
            value={bahan_bakar}
            onChange={(e) => setBahanBakar(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Bahan Bakar"
          />
        </div>

        <div className="relative">
          <input
            id="harga"
            type="text"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Harga"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Tambah Mobil
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tambah;
