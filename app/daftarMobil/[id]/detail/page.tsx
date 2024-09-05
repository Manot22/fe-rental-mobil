// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface DetailProps {
//   params: {
//     id: number;
//   };
// }

// async function fetchDaftarById(id: number) {
//   const response = await fetch(`http://127.0.0.1:8000/api/daftar_mobil/${id}`);
//   if (response.ok) {
//     const result = await response.json;
//     console.log("Result:", result);
//     if (result.success) {
//       return result.data;
//     } else {
//       throw new Error(result.message || "GAGAL fetch data");
//     }
//   } else {
//     throw new Error("Gagal fatch data");
//   }
// }

// const DetailPage = () => {
//   return <div>detail page</div>;
// };

// export default DetailPage;
