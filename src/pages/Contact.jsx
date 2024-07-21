import Github from "../svg/Github";
import Linkedin from "../svg/Linkedin";

const Contact = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    alert("message sent successfully");
    reset();
  };

  return (
    <div className="w-full">
      <div className="w-full h-[1px] bg-darkGray opacity-[15%] mt-10"></div>
      <div className="w-full lg:flex lg:justify-between lg:mt-12">
        <h2 className="Ibarra font-bold text-[40px] leading-[42px] text-darkGray mt-6 lg:mt-0">
          Get in Touch
        </h2>
        <div className="w-full lg:max-w-[635px]">
          <p className="public-sans font-normal text-[15px] leading-[30px] text-darkGray opacity-80">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Tbilisi. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <ul className="flex mt-6 gap-x-4">
            <li>
              <a
                href="https://github.com/NiniKurtanidze3"
                target="_blank"
                rel="noreferrer"
              >
                <Github color="#33323D" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nino-kurtanidze-280757308/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin color="#33323D" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-darkGray opacity-[15%] mt-8"></div>
      <div className="w-full lg:flex lg:justify-between lg:mt-12">
        <h2 className="Ibarra font-bold text-[40px] leading-[42px] text-darkGray mt-6 lg:mt-0">
          Contact Me
        </h2>

        <form
          className="w-full mt-6 lg:mt-0 lg:max-w-[635px]"
          onSubmit={onSubmit}
        >
          <label
            htmlFor="name"
            className="public-sans font-normal text-[13px] leading-[30px] text-darkGray opacity-80"
          >
            Name
          </label>
          <input
            type="text"
            className="mt-2 w-full h-12  bg-darkGray bg-opacity-10 public-sans font-normal text-[13px] leading-[30px] text-darkGray placeholder:opacity-40 py-2 px-4"
            placeholder="Jane Appleseed"
            id="name"
          />
          <label
            htmlFor="email"
            className="public-sans font-normal text-[13px] leading-[30px] text-darkGray opacity-80"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-2 w-full h-12 bg-darkGray bg-opacity-10 public-sans font-normal text-[13px] leading-[30px] text-darkGray placeholder:opacity-40 py-2 px-4"
            placeholder="email@example.com"
            id="email"
          />
          <label
            htmlFor="text"
            className="public-sans font-normal text-[13px] leading-[30px] text-darkGray opacity-80"
          >
            Message
          </label>
          <textarea
            id="text"
            className="resize-none w-full h-24 bg-darkGray bg-opacity-10 public-sans font-normal text-[13px] leading-[30px] text-darkGray placeholder:opacity-40 py-2 px-4"
            placeholder="How can I help?"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-4 public-sans font-normal text-xs uppercase text-white tracking-[2px] bg-[#203A4C] mt-2"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
