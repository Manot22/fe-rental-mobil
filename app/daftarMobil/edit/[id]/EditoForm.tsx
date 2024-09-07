import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface EditMobilProps {
  initialData: {
    nama: string;
    merk: string;
    kursi: number;
    bahan_bakar: string;
    harga: number;
  };
  id: string;
  isNew?: boolean;
}

const EditForm = ({ initialData, id, isNew = false }: EditMobilProps) => {
  const [nama, setNama] = useState(initialData.nama || "");
  const [merk, setMerk] = useState(initialData.merk || "");
  const [kursi, setKursi] = useState(initialData.kursi || "");
  const [bahan_bakar, setBahanBakar] = useState(initialData.bahan_bakar || "");
  const [harga, setHarga] = useState(initialData.harga || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const endpoint = isNew
        ? `${process.env.NEXT_PUBLIC_API_BACKEND}/api/daftar_mobil`
        : `${process.env.NEXT_PUBLIC_API_BACKEND}/api/daftar_mobil/${id}`;
      const method = isNew ? "POST" : "PUT";

      const response = await axios({
        method,
        url: endpoint,
        data: { nama, merk, kursi, bahan_bakar, harga },
      });

      if (response.status === 200 || response.status === 201) {
        router.push("/daftarMobil");
      } else {
        throw new Error("Gagal Menyimpan data mobil");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        // Tangani kasus ketika err bukan Error
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isNew) {
      setNama(initialData.nama || "");
      setMerk(initialData.merk || "");
      setKursi(initialData.kursi || 0);
      setBahanBakar(initialData.bahan_bakar || "");
      setHarga(initialData.harga || 0);
    }
  }, [initialData, isNew]);

  return (
    <div className="mx-auto max-w-screen-xl mt-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-white text-sm font-bold mb-2"
            >
              Nama Mobil
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="form-input w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="merk"
              className="block text-white text-sm font-bold mb-2"
            >
              Merk Mobil
            </label>
            <input
              id="merk"
              type="text"
              value={merk}
              onChange={(e) => setMerk(e.target.value)}
              className="form-input w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kursi"
              className="block text-white text-sm font-bold mb-2"
            >
              Kursi
            </label>
            <input
              id="kursi"
              type="number"
              value={kursi}
              onChange={(e) => setKursi(e.target.value)}
              className="form-input w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bahan_bakar"
              className="block text-white text-sm font-bold mb-2"
            >
              Bahan Bakar
            </label>
            <input
              id="bahan_bakar"
              type="text"
              value={bahan_bakar}
              onChange={(e) => setBahanBakar(e.target.value)}
              className="form-input w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="harga"
              className="block text-white text-sm font-bold mb-2"
            >
              Harga
            </label>
            <input
              id="harga"
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="form-input w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : isNew ? "Create" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
