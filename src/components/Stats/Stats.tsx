function Stats() {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col items-center justify-center space-y-7 p-2 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-[90%] flex-col items-center justify-center text-center md:w-1/3">
          <p className="text-8xl text-secondary-content">2+</p>
          <p className="text-2xl">Years Experience</p>
        </div>
        <div className="flex w-[90%] flex-col space-y-8 md:w-1/3">
          <div className="flex flex-col items-center justify-center space-y-2 bg-primary p-4 py-6">
            <p className="text-3xl text-secondary-content">2061+</p>
            <p>Project Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 bg-primary p-4 py-6">
            <p className="text-3xl text-secondary-content">3</p>
            <p>Clients</p>
          </div>
        </div>
        <div className="w-[90%] flex-col space-y-8 md:w-1/3">
          <div className="flex flex-col items-center justify-center bg-primary p-4 py-6">
            <p>Section 3</p>
            <p>Content 3</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary p-4 py-6">
            <p>Section 4</p>
            <p>Content 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
