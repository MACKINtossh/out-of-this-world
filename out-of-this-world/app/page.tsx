import { Discover, Hero } from "@components";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <div
        className="bg-black flex items-center justify-center min-h-screen"
        id="discover"
      >
        <Discover />
      </div>
      
    </main>
  );
};

export default Home;
