import TechStackSection from '../../components/TechStackSection/TechStackSection';
import PrivateProjectsSection from '../../components/PrivateProjectsSection/PrivateProjectsSection';
import QualificationsSection from '../../components/QualificationsSection/QualificationsSection';
import profilePicture from '../../assets/profile-picture.png';
import ClientProjectsSecrion from '../../components/ClientProjectsSection/ClientProjectsSecrion';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-6 text-primary-content">
        <div className="mx-4 mb-14 mt-4 flex flex-col items-center gap-4 bg-primary p-4 md:flex-row">
          <div>
            <div className="avatar w-40">
              <div className="rounded">
                <img src={profilePicture} className="brightness-75" alt="Front facing young man with brown hair" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl uppercase">Bio</h1>
              <p className="text-justify lg:text-left">
                Since embarking on my coding journey, I have developed a deep passion for frontend development, which
                drives my commitment to crafting bespoke web applications and websites. As a dedicated frontend
                developer and programming coach at Coding Giants, I specialize in creating scalable, responsive web
                solutions while teaching children and teens web development, programming, and AI. I am actively engaged
                in daily coding and seek junior roles to further refine my skills. Additionally, I participate in
                challenges like Frontend Mentor, where I provide valuable feedback and contribute to code reviews. My
                focus is on continuous learning and growth in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-cols mx-0 grid place-content-center gap-10 p-6 md:mx-4 lg:grid-cols-2 lg:gap-6 lg:p-0 xl:grid-cols-3">
          <TechStackSection />
          <QualificationsSection />
          <ClientProjectsSecrion />
          <PrivateProjectsSection />
        </div>
      </div>
    </div>
  );
}
export default About;
