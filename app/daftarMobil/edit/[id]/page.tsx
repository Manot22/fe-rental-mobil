"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditoForm from "./EditoForm";

async function fetchDaftarMobil(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/api/daftar_mobil/${id}`
  );
  const data = await response.json();
  if (data && data.data) {
    return data.data;
  } else {
    return {};
  }
}

const Edit = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [initialData, setInitialData] = useState<{
    nama: string;
    merk: string;
    kursi: number;
    bahan_bakar: string;
    harga: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchDaftarMobil(id)
        .then((data) => {
          setInitialData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      // JIKA TIDAK ADA ID, INI UNTUK cREATE
      setLoading(false);
      setInitialData({
        nama: "",
        merk: "",
        kursi: 0,
        bahan_bakar: "",
        harga: 0,
      });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!initialData) return <p>Data tidak ditemukan</p>;

  return (
    <div className="container mx-auto">
      <div className="p-8 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">
          {id ? "Edit Daftar Mobil" : "tambah daftar mobil"}
        </h1>
        <EditoForm initialData={initialData} id={id} />
      </div>
    </div>
  );
};

export default Edit;
