function Contact() {
  return (
    <div className="container mx-auto text-base-100">
      <div className="container mt-16 flex flex-col items-center justify-center bg-primary px-4 py-8 md:flex-row md:justify-between md:px-20">
        <div className="mb-4 max-w-2xl space-y-6 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl">Let&apos;s create something together!</h2>
          <p className="text-lg">
            Your inquiry is important to me, and I am enthusiastic about the opportunity to explore potential
            collaborations or employment prospects. Feel free to send a message – I am eager to engage in meaningful
            discussions and discover how we can achieve shared goals together.
          </p>
        </div>
        <a href="mailto:radoslaw.siek-web.dev@wp.pl">
          <button type="button" className="cyber-button bg-red fg-white z-30 w-72 scale-[105%]">
            Contact
            <span className="glitchtext">Webrunner</span>
            <span className="tag">RS9</span>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Contact;
