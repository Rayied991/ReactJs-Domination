import { use } from "react";
import { BioContext } from "../context";

export const About = () => {
  //   const { myName, myAge } = useBioContext();
  //   const { myName, myAge } = useContext(BioContext);
  // const { myName, myAge } = use(BioContext);
  const newHook = true;
  let myName, myAge;
  if (newHook) {
    // const { myName, myAge } = useContext(BioContext); //cannot do this
    ({ myName, myAge } = use(BioContext));
  }

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}
    >
      <h1>
        Hello Context Api(About) . My name is {myName} . I am {myAge} years old.
      </h1>
    </section>
  );
};

export default About;
