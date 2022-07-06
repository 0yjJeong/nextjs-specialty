import React, { FC, ReactElement } from "react";

type SpecialtyCardListProps = {
  children: ReactElement[];
};

const SpecialtyCardList: FC<SpecialtyCardListProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center gap-[10px]">
      {children}
      {/* {children
        .reduce((prev, cur, index) => {
          if (index % 3 === 0) {
            prev[prev.length] = [cur];
          } else {
            prev[prev.length - 1].push(cur);
          }
          return prev;
        }, [] as ReactElement[][])
        .map((element, index) => (
          <tr key={index}>{element}</tr>
        ))} */}
    </div>
  );
};

export default SpecialtyCardList;
