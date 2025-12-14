import { useId } from "react";

const UseID = () => {
  // const usernameid = useId();
  // const emailid = useId();
  // const Passwordid = useId();
  // return (
  //   <form>
  //     <div>
  //       <label htmlFor={usernameid}>Username:</label>
  //       <input type="text" id={usernameid} name="name" />
  //     </div>
  //     <div>
  //       <label htmlFor={Passwordid}>Password:</label>
  //       <input type="password" id={Passwordid} name="password" />
  //     </div>
  //     <div>
  //       <label htmlFor={emailid}>Email:</label>
  //       <input type="text" id={emailid} name="email" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  // This lets  you avoid calling useId for every single element that needs  a unique ID.

  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "usernameid"}>Username:</label>
        <input type="text" id={id + "usernameid"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "Passwordid"}>Password:</label>
        <input type="password" id={id + "Passwordid"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailid"}>Email:</label>
        <input type="text" id={id + "emailid"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseID;
