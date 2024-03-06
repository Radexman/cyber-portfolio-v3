function ExperienceSection() {
  return (
    <div className="flex flex-col items-center justify-between bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left lg:col-span-2">
      <h3 className="text-2xl">Private Projects</h3>
      <div className="h-[2px] w-80 bg-secondary" />
      <p className="text-justify lg:text-left">
        I have worked with both companies and individual clients to deliver their desired products. It&apos;s worth
        mentioning my collaboration with Garten Complex company, for which I refreshed the appearance of their WordPress
        company website and ensured accessibility and consistent branding.
      </p>
      <p className="text-justify lg:text-left">
        Aside from my commercial freelance work and studying computer science and deepenning my knowledge in frontend
        technologies in my free time I work on my private projects and solve coding challanges eg. Frontend Mentor
        challanges. I also sometimes give code review to other users in order for them to get upper hand in making their
        projesct even better.
      </p>
    </div>
  );
}

export default ExperienceSection;
