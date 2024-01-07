function Featured() {
  return (
    <div className="container mx-auto mt-4 min-h-screen bg-neutral">
      <div className="mx-5 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col space-y-2 text-base-100">
          <h2 className="text-3xl">Featured Projcts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ipsa!</p>
        </div>
        <div>
          <button type="button" className="cyber-button-small bg-red fg-white z-30 mt-4">
            All Projects
            <span className="glitchtext">See</span>
            <span className="tag">PR4</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured;
