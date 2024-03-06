import TechStackSection from '../../components/TechStackSection/TechStackSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import QualificationsSection from '../../components/QualificationsSection/QualificationsSection';
import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-6 text-primary-content">
        <div className="mb-14 flex flex-col items-center gap-4 bg-primary p-4 md:flex-row">
          <div>
            <div className="avatar w-40">
              <div className="rounded">
                <img src={profilePicture} alt="Front facing young man with brown hair" />
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
        <div className="grid-cols grid place-content-center gap-6 p-6 lg:grid-cols-3 lg:p-0">
          <TechStackSection />
          <QualificationsSection />
          <div className="row-span-2 flex flex-col items-center bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
            <div className="mb-4">
              <h3 className="text-2xl">Client Projects</h3>
              <div className="h-[2px] w-80 bg-primary" />
            </div>
            <div className="space-y-4">
              <p className="text-justify lg:text-left">
                I have worked with both companies and individual clients to deliver their desired products. It&apos;s
                worth mentioning my collaboration with Garten Complex, for which I refreshed the appearance of their
                WordPress company website and ensured accessibility and consistent branding.
              </p>
              <p className="text-justify lg:text-left">
                Additionally, I have been collaborating closely with a language tutor to develop a captivating web
                portfolio, offering her an additional avenue for recognition and visibility in her field. Together,
                we&apos;ve meticulously crafted a platform that not only showcases her expertise but also amplifies her
                unique approach to language teaching, providing students with a compelling introduction to her services
                and methodologies. Through this partnership, we aim to elevate her online presence, empowering her to
                connect with a broader audience and make a lasting impact in the realm of language education.
              </p>
            </div>
          </div>
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}
export default About;
