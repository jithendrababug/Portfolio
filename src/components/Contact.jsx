import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // "success" | "error"
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please add EmailJS keys in the .env file and restart the server.",
      });
      return;
    }

    try {
      setIsSending(true);

      const templateParams = {
        from_name: form.name,
        reply_to: form.email,
        subject: form.subject || "(No subject)",
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again later or contact me via email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border border-black/10 bg-white/70 backdrop-blur px-4 py-3 text-gray-900 shadow-sm " +
    "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300/70 " +
    "dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400/40";

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">Contact </span>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-blue-200">
              Me
            </span>
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have an opportunity or project in mind? Send a message — I’ll reply as soon as possible.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Form Card */}
          <AnimateOnScroll delay={0.05}>
            <div className="relative rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              {/* Status message */}
              {status.message ? (
                <div
                  className={`mb-5 rounded-xl border p-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-200"
                      : "bg-red-50 border-red-200 text-red-700 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      required
                      className={inputBase}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className={inputBase}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={onChange}
                    className={inputBase}
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={onChange}
                    required
                    className={inputBase}
                    placeholder="Write your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                  className={`w-full rounded-xl px-6 py-3 font-semibold text-white transition
                    ${
                      isSending
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/15"
                    }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Your details are used only to respond to your message.
                </p>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Right: Info Card */}
          <AnimateOnScroll delay={0.12}>
            <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                JITHENDRA BABU G
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Fresher | Aspiring Professional | Eager to Start My Career | Seeking Full-Time Opportunities in software fields
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Phone
                  </p>
                  <a
                    href="tel:9361163323"
                    className="text-blue-700 hover:underline dark:text-blue-300"
                  >
                    +91 9361163323
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </p>
                  <a
                    href="mailto:jithendrababug@gmail.com"
                    className="text-blue-700 hover:underline dark:text-blue-300"
                  >
                    jithendrababug@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/jithendrababu.g.5",
                    bg: "bg-blue-600",
                    svg: (
                      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5v-2.9h2.5V9.4c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12z" />
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/its_jithendra_babu.official/",
                    bg: "bg-pink-500",
                    svg: (
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z" />
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/jithendrababug/",
                    bg: "bg-blue-700",
                    svg: (
                      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8h4v13H3zM9 8h3.8v1.8h.05A4.16 4.16 0 0 1 17 8.4c3 0 4 1.9 4 5v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9z" />
                    ),
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/jithendrababug",
                    bg: "bg-gray-800",
                    svg: (
                      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.6c-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6a2.8 2.8 0 0 1 .8 2.1v3.2c0 .3.2.6.8.5A12 12 0 0 0 12 .5z" />
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white ${s.bg}
                                shadow-lg shadow-black/10 transition hover:opacity-90`}
                    aria-label={s.label}
                    title={s.label}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true">
                      {s.svg}
                    </svg>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}