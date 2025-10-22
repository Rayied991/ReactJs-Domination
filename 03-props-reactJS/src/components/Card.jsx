const Card = (props) => {
  console.log(props);
  console.log(props.user);
  console.log(props.age);
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>
        {props.user}:{props.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
