import { useTranslations } from "next-intl";
import Image from "next/image";


export default function CarInfo({
  make,
  model,
  year,
  horsepower,
  torque,
  transmission,
  paintCode,
  drivetrain,
  forzaClass
}) {
  return (
    <div className="flex flex-col justify-between w-full sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-[5rem] font-medium tracking-tighter uppercase leading-[0.9]">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <h1>{`${horsepower}bhp`}</h1>
        <h1>{`${torque}nm`}</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <h1>{transmission.toLowerCase().includes("mt") ? "manual" : "auto"}</h1>
        <h1>{drivetrain}</h1>
      </div>
    </div>
  );
}
