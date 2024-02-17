import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto text-primary-content">
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div className="w-full bg-primary md:w-1/3">
            <div className="avatar w-[50%]">
              <div className="rounded">
                <img src={profilePicture} alt="Front facing young man with brown hair" />
              </div>
            </div>
          </div>
          <div className="w-full bg-primary p-4 md:w-2/3">
            <h1 className="text-2xl uppercase">Bio</h1>
            <div>
              <h2>Experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis odio nostrum animi suscipit
                fuga perferendis recusandae iusto sed ducimus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex min-h-[50vh] flex-col items-center justify-center space-x-0 space-y-10 md:flex-row md:space-x-8 md:space-y-0">
          <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
            <h3 className="text-xl text-secondary-content">Tech Stack</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
          <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
            <h3 className="text-xl">Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
          <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
            <h3 className="text-xl text-secondary-content">Qualifications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
          {/* <div className="w-1/3 bg-primary p-4">
            <h3 className="text-xl text-secondary-content">Tech Stack</h3>
          </div>
          <div className="w-1/3 bg-secondary p-4">
            <h3 className="text-xl">Experience</h3>
          </div>
          <div className="w-1/3 bg-primary p-4">
            <h3 className="text-xl text-secondary-content">Qualifications</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default About;
