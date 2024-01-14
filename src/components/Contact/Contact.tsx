function Contact() {
  return (
    <div className="container mx-auto text-base-100">
      <div className="container mt-16 flex flex-col items-center justify-center bg-primary px-4 py-8 md:flex-row md:justify-between md:px-20">
        <div className="mb-4 max-w-2xl space-y-6 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl">Let&apos;s work together on your next project</h2>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia nesciunt reprehenderit dicta?
            Incidunt corporis autem obcaecati in dolore exercitationem.
          </p>
        </div>
        <button type="button" className="cyber-button bg-red fg-white z-30">
          Contact
          <span className="glitchtext">Webrunner</span>
          <span className="tag">RS9</span>
        </button>
      </div>
    </div>
  );
}
export default Contact;
