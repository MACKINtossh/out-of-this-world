import { Hero } from "@components";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12" id="discover">
        <div>
          <h1>Choose Your Ride</h1>
          <p>Then choose your new home</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
