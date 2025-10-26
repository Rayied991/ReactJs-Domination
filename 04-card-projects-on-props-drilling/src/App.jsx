import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: 65,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "Software Engineer (Backend)",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 80,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Infrastructure Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: 70,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: 55,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Data Scientist",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 95,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: 75,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "10 weeks ago",
      post: "Embedded Systems Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 85,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: 90,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "UX Designer",
      tag1: "Part-time",
      tag2: "Mid-level",
      pay: 60,
      location: "Dhaka, Bangladesh",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: 65,
      location: "Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((ele, idx) => {
        return (
          <div key={idx}>
            <Card
              company={ele.companyName}
              post={ele.post}
              pay={ele.pay}
              datePosted={ele.datePosted}
              brandLogo={ele.brandLogo}
              tag1={ele.tag1}
              tag2={ele.tag2}
              location={ele.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
