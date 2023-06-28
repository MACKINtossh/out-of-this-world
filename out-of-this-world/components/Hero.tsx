"use client";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../public/ships/ship-4.png')]" />
      
      
    </div>
  );
};

export default Hero;
