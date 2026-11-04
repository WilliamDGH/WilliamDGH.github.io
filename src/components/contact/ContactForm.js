import emailjs from "emailjs-com";
import { useState } from "react";
const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API;

  // Deployments without an email service configured fall back to the
  // visitor's own mail client instead of silently dropping the message.
  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:hi@guanhua.me?subject=${subject}&body=${body}`;
  };

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else if (!serviceId || !templateId || !publicKey) {
      mailtoFallback();
    } else {
      emailjs
        .send(
          serviceId, // service id
          templateId, // template id
          mailData,
          publicKey // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.error(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="fields w-full float-left clear-both h-auto">
      <form
        className="contact_form"
        id="contact_form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div
          className={error ? "empty_notice" : "returnmessage"}
          style={{ display: error == null ? "none" : "block" }}
        >
          <span>
            {error
              ? "Please Fill Required Fields"
              : "Your message has been received, We will contact you soon."}
          </span>
        </div>
        <div className="first w-full float-left">
          <ul className="list-none">
            <li className="w-full mb-[30px] float-left">
              <input
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                id="name"
                type="text"
                placeholder="Name"
              />
            </li>
            <li className="w-full mb-[30px] float-left">
              <input
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
              />
            </li>
          </ul>
        </div>
        <div className="last">
          <textarea
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="tokyo_tm_button" data-position="left">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <p className="mt-[25px] text-[14px] text-[#767676]">
        Prefer email? Reach me at{" "}
        <a className="underline" href="mailto:hi@guanhua.me">
          hi@guanhua.me
        </a>
        .
      </p>
    </div>
  );
};
export default ContactForm;
