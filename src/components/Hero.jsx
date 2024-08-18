const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Embark on an extraordinary fitness journey with tailored workouts,
        detailed progress tracking, and relentless motivation. Revolutionize
        your approach to fitness with a dynamic platform designed to propel you
        toward peak performance. From personalized routines to insightful
        analytics, redefine your fitness routine and surpass every milestone
        with confidence.
      </p>
      <button className="px-8 py-4 rounded-md bg-slate-950 border-2 border-blue-400 border-solid blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
};

export default Hero;
