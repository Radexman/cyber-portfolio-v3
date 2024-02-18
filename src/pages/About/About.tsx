import TechStackSection from '../../components/TechStackSection/TechStackSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import QualificationsSection from '../../components/QualificationsSection/QualificationsSection';
import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-6 text-primary-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex h-60 items-center justify-center">
            <div className="avatar w-[50%]">
              <div className="rounded">
                <img src={profilePicture} alt="Front facing young man with brown hair" />
              </div>
            </div>
          </div>
          <div className="col-span-2 h-60 bg-primary p-4">
            <h1 className="text-2xl uppercase">Bio</h1>
            <div>
              <h2>Experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis odio nostrum animi suscipit
                fuga perferendis recusandae iusto sed ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis odio nostrum animi suscipit fuga perferendis recusandae iusto sed ducimus.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-3 lg:p-0">
          <TechStackSection />
          <ExperienceSection />
          <QualificationsSection />
        </div>
      </div>
    </div>
  );
}
export default About;
