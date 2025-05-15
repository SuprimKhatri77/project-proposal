import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[794px] min-h-[1123px] w-full h-full mx-auto bg-white flex flex-col  items-center justify-center gap-1 shadow">
      <h1 className="font-extrabold my-[2px] text-[20px]">POKHARA UNIVERSITY</h1>
      <p className="font-light text-[18px]">Faculty of Science and Technology</p>
      <Image src="/logo.jpg" alt="" width={140} height={140} className="shadow rounded-full object-cover object-center" />
      <p className="font-bold text-[22px] mt-5 ">Bachelor in Computer Application (BCA)</p>
      <p className="font-bold text-[18px] ">Crimson College of Technologoy, Butwal</p>
      <div className="flex flex-col items-center !mt-5">

        <p className="mt-3 text-lg">Project Proposal Defense on</p>
        <p className="text-xl font-bold !mt-3">"Point of Sale (POS)"</p>

        <div className="flex flex-col items-center gap-3 mt-5">
          <p className="font-bold text-xl">Submitted By:</p>
          <div className="flex flex-col items-center gap-[3px]">
            <p>Suprim Khatri</p>
            <p>Reg.No-2024-1-53-0146 Roll No.-[24530431]</p>
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <p>Bhupendra Thapa Magar</p>
            <p>Reg.No-2024-1-53-0113 Roll No.-[24530399]</p>
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <p>Arun Bhusal</p>
            <p>Reg.No-2024-1-53-0112 Roll No.-[24530398]</p>
          </div>
          <div className="flex flex-col items-center gap-[3px]">
            <p>Yogendra Thapa</p>
            <p>Reg.No-2024-1-53-0156 Roll No.-[24530451]</p>
          </div>
        </div>
      </div>

    </div>
  );
}
