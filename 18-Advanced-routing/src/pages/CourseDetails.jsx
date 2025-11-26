import { useParams } from "react-router-dom";

const CourseDetails = () => {
  // used useParams to fetch the url data [for dynamic routing]
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>{params.CourseId} CourseDetails Page</h1>
    </div>
  );
};

export default CourseDetails;
