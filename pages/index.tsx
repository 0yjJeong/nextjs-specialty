import type { NextPage } from "next";
import { SpecialtyCard, SpecialtyCardList } from "../components";

export type Specialty = {
  id: string;
  name: string;
  serviceCount: number;
};

const onclickFcuntion = () => {
  console.log("log");
};
const specialtyMocks: Specialty[] = [
  {
    id: "1",
    name: "First Item",
    serviceCount: 5,
  },
  {
    id: "2",
    name: "Second Item",
    serviceCount: 2,
  },
  {
    id: "3",
    name: "Third Item",
    serviceCount: 10,
  },
  {
    id: "4",
    name: "Fourth Item",
    serviceCount: 21,
  },
  {
    id: "5",
    name: "Fifth Item",
    serviceCount: 3,
  },
  {
    id: "6",
    name: "Sixth Item",
    serviceCount: 11,
  },
];

const Home: NextPage = () => {
  return (
    <SpecialtyCardList>
      {specialtyMocks.map(({ id, ...rest }) => (
        <SpecialtyCard key={id} {...rest} onclickFcuntion={onclickFcuntion} />
      ))}
    </SpecialtyCardList>
  );
};

export default Home;
