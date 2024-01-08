function Stats() {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col items-center justify-center space-y-7 p-2 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-[90%] flex-col items-center justify-center text-center md:w-1/3">
          <p className="text-8xl text-secondary-content">2+</p>
          <p className="text-2xl">Years Experience</p>
        </div>
        <div className="flex w-[90%] flex-col space-y-8 md:w-1/3">
          <div className="flex h-32 flex-col items-center justify-center space-y-2 bg-primary">
            <p className="text-4xl text-secondary-content">2062+</p>
            <p>Project Hours</p>
          </div>
          <div className="flex h-32 flex-col items-center justify-center space-y-2 bg-primary">
            <p className="text-4xl text-secondary-content">3</p>
            <p>Clients</p>
          </div>
        </div>
        <div className="w-[90%] flex-col space-y-8 md:w-1/3">
          <div className="flex h-32 flex-col items-center justify-center space-y-2 bg-primary">
            <p className="text-4xl  text-secondary-content">2</p>
            <p>Certificates</p>
          </div>
          <div className="flex h-32 flex-col items-center justify-center space-y-2 bg-primary">
            <p className="text-4xl text-secondary-content">66+</p>
            <p>Projects Deployed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
