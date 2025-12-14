import Button from "./Button";

const Card = ({ image, title, buttonText }) => {
  return (
    <div className=" max-w-sm bg-amber-500 border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      {/* image */}
      <div>
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt="sample image"
        />
      </div>
      {/* text */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title} </h2>
        <p className="mt-2 text-sm font-medium text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          placeat repellendus, eum fugiat et ipsa!
        </p>
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
};

export default Card;
