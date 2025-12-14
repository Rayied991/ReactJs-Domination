import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Button variant={"destructive"}>Click me</Button> */}
      {/* <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl m-5">
        Learn to integrate Tailwind
      </h1> */}

      <div className="flex gap-4 ">
        {/* card-1 */}
        <Card
          image={
            "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          title="Underwater"
          buttonText="Join Now"
        />

        {/* card-2 */}
        <Card
          image={
            "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          title={"SeaShore"}
          buttonText="Show More"
        />
        {/* card-3 */}
        <Card
          image={
            "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
          }
          title="Cute Girl"
          buttonText="Read More"
        />
      </div>
    </>
  );
}

export default App;
