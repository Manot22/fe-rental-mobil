import { FaAddressCard, FaRegClock } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

const Why = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Harga */}
        <div className="flex flex-col justify-center items-center capitalize">
          <IoIosPricetags className="text-3xl mb-0 md:mb-4 text-blue-500" />
          <h2 className="font-semibold">harga bersaing</h2>
          <p className="text-sm text-justify">
            Kami menawarkan harga rental yang bersaing dengan berbagai paket
            yang sesuai dengan budget anda{" "}
          </p>
        </div>
        {/* Dirver */}
        <div className="flex flex-col justify-center items-center capitalize">
          <FaAddressCard className="text-3xl mb-0 md:mb-4 text-blue-500" />
          <h2 className="font-semibold">driver berpengalaman</h2>
          <p className="text-sm text-justify">
            Jika pelanggan memerlukan driver, kami memiliki tim driver
            berpengalaman yang siap memberikan layanan yang aman dan profesional
          </p>
        </div>
        {/* layanan */}
        <div className="flex flex-col justify-center items-center capitalize">
          <FaRegClock className="text-3xl mb-0 md:mb-4 text-blue-500" />
          <h2 className="font-semibold">layanan 24/7</h2>
          <p className="text-sm text-justify">
            Kami melayani pelanggan sepanjang waktu sehingga pelanggan dapat
            menghubungikami kapan saja ada masalah
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
