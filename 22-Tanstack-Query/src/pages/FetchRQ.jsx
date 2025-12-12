import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";
export const FetchRQ = () => {
  // Fetch posts data function

  const { data } = useQuery({
    queryKey: ["posts"], //useState
    queryFn: fetchPosts, //useEffect
  });

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchRQ;
