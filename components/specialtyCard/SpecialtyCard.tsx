import Link from "next/link";
import React, { FC } from "react";
import { Specialty } from "../../pages";

type SpecialtyCardProps = Omit<Specialty, "id">;
type ClickFunciton = {
  onclickFcuntion: () => void;
};
type Params = SpecialtyCardProps & ClickFunciton;
const SpecialtyCard: FC<Params> = ({ name, serviceCount, onclickFcuntion }) => {
  return (
    <div onClick={onclickFcuntion}>
      <div
        className={`w-[416px] h-[234px] flex flex-col justify-end  bg-[url('https://postfiles.pstatic.net/MjAyMjA3MDVfMTgy/MDAxNjU3MDE5MDMxNDY3.T0DxLor_5FA4E_KHE1-K3b5kCSM4MLZBU2iXn4XnUyQg.m7_CywPp-R_N8qhbEaJ0uMVIMdPKBPxts2r33xYpsaog.JPEG.yang1481170/88-16.jpg?type=w773')]`}
      >
        <a className="h-[100px] p-[10px] w-full flex flex-wrap items-end bg-gradient-to-t from-black pt-[30px]">
          <p className=" w-full text-[22px] font-bold leading-[26.82px] text-white">
            {name}
          </p>
          <p className=" w-full text-[16px] font-normal leading-[19.5px] text-white">
            {serviceCount} Service Offerings
          </p>
        </a>
      </div>
    </div>
  );
};

export default SpecialtyCard;
