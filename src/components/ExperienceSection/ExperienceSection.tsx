function ExperienceSection() {
  return (
    <div className="flex flex-col items-center justify-between bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl">Experience</h3>
      <div className="pt-4">
        <p className="text-lg">Commercial Work</p>
        <div className="h-[2px] w-80 bg-primary" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. </p>
      <div className="pt-4">
        <p className="text-lg">Private Projects</p>
        <div className="h-[2px] w-80 bg-primary" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. </p>
    </div>
  );
}
export default ExperienceSection;
