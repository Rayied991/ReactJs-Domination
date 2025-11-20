const Card = (props) => {
  return (
    <div>
      <a href={props.user.url} target="_blank">
        <div className="h-40 w-44 overflow-hidden  rounded-xl">
          <img
            className="h-full object-cover"
            src={props.user.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-lg">{props.user.author}</h2>
      </a>
    </div>
  );
};

export default Card;
