import TechStackSection from '../../components/TechStackSection/TechStackSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import QualificationsSection from '../../components/QualificationsSection/QualificationsSection';
import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-6 text-primary-content">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
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
          <QualificationsSection />
          <ExperienceSection />
          <div className="col-span-auto flex flex-col items-center justify-between bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:col-span-2 md:items-start md:p-6 md:text-left">
            <h3 className="text-2xl">Experience</h3>
            <div className="pt-4">
              <p className="text-lg">Commercial Work</p>
              <div className="h-[2px] w-80 bg-primary" />
            </div>
            <p>
              I have worked with both companies and individual clients to deliver their desired products. It&apos;s
              worth mentioning my collaboration with Garten Complex company, for which I refreshed the appearance of
              their WordPress company website and ensured accessibility and consistent branding.
            </p>
            <div className="pt-4">
              <p className="text-lg">Private Projects</p>
              <div className="h-[2px] w-80 bg-primary" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
