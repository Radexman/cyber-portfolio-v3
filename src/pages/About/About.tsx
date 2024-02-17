import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-2 text-primary-content md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="avatar">
              <div className="w-[50%] rounded">
                <img src={profilePicture} alt="Front facing young man with brown hair" />
              </div>
            </div>
          </div>
          <div className="w-full bg-primary p-4 md:w-2/3">
            <h1 className="text-2xl uppercase">Bio</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
