function Stats() {
  return (
    <div className="relative min-h-screen">
      <div className="flex">
        <div className="min-h-screen w-1/2 bg-accent" />
        <div className="min-h-screen w-1/2" />
      </div>
      <div className="container mx-auto">
        <div className="container absolute top-0 text-base-100">
          <div className="flex min-h-[50vh] flex-col items-center justify-center space-x-0 space-y-7 md:flex-row md:space-x-7 md:space-y-0">
            <div className="flex w-[90%] flex-col justify-between bg-primary p-10 md:w-1/3">
              <h2>Category</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <p className="text-primary-content">Know More</p>
            </div>
            <div className="flex w-[90%] flex-col justify-between bg-primary p-10 md:w-1/3">
              <h2>Category</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <p className="text-primary-content">Know More</p>
            </div>
            <div className="flex w-[90%] flex-col justify-between bg-primary p-10 md:w-1/3">
              <h2>Category</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <p className="text-primary-content">Know More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
