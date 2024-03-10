import TechStackSection from '../../components/TechStackSection/TechStackSection';
import PrivateProjectsSection from '../../components/PrivateProjectsSection/PrivateProjectsSection';
import QualificationsSection from '../../components/QualificationsSection/QualificationsSection';
import profilePicture from '../../assets/profile-picture.png';
import ClientProjectsSecrion from '../../components/ClientProjectsSection/ClientProjectsSecrion';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container  mx-auto space-y-6 text-primary-content">
        <div className="mb-14 flex flex-col items-center gap-4 bg-primary p-4 md:flex-row">
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
                Since embarking on my coding journey, I&apos;ve discovered a profound love for the craft—a passion that
                transcends all others, defining the very essence of my existence. As a dedicated and passionate young
                frontend developer, science student, and freelance enthusiast, I thrive on crafting bespoke web
                applications and websites. Engaged in daily coding, I actively pursue junior roles in my field while
                immersing myself in challenges like Frontend Mentor, offering valuable feedback and contributing to code
                reviews. Balancing my studies in computer science part-time, I&apos;m committed to continuous learning
                and growth in the dynamic world of technology.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-cols grid place-content-center gap-10 p-6 lg:grid-cols-3 lg:gap-6 lg:p-0">
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
