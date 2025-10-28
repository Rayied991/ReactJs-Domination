import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex rounded-4xl  flex-nowrap overflow-x-auto gap-10 p-6  w-2/3 "
    >
      {props.users.map((ele, idx) => {
        return (
          <div key={idx}>
            <RightCard id={idx} color={ele.color} img={ele.img} tag={ele.tag} />
          </div>
        );
      })}
    </div>
  );
};

export default RightContent;
