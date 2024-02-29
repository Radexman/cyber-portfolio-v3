function ExperienceSection() {
  return (
    <div className="row-span-1 flex flex-col items-center justify-between bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left lg:row-span-2">
      <h3 className="text-2xl">Experience</h3>
      <div className="pt-4">
        <p className="text-lg">Commercial Work</p>
        <div className="h-[2px] w-80 bg-secondary" />
      </div>
      <p>
        I have worked with both companies and individual clients to deliver their desired products. It&apos;s worth
        mentioning my collaboration with Garten Complex company, for which I refreshed the appearance of their WordPress
        company website and ensured accessibility and consistent branding.
      </p>
      <div className="pt-4">
        <p className="text-lg">Private Projects</p>
        <div className="h-[2px] w-80 bg-secondary" />
      </div>
      <p>
        Aside from my commercial freelance work and studying computer science and deepenning my knowledge in frontend
        technologies in my free time I work on my private projects and solve coding challanges eg. Frontend Mentor
        challanges. I also sometimes give code review to other users in order for them to get upper hand in making their
        projesct even better.
      </p>
    </div>
  );
}
export default ExperienceSection;
