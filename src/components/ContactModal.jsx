import { useState, useEffect } from "react";

export default function ContactModal({ setShowContactModal }) {
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyaglESOIag9A8SViW0k6s74mshYIJYcWKOoEou8G905mZtp1dkfkRkNv9RlH6Na7vbxQ/exec", {
        method: "POST",
        body: data,
      });

      const text = await res.text();
      if (text === "success") {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center sm:p-4"
      onClick={() => setShowContactModal(false)}
    >
      <div
        className={`
          relative w-full h-full sm:h-auto sm:max-w-xl bg-[#181922] text-[#fafafa] rounded-xl border border-white border-opacity-20 shadow-lg
          p-6 sm:p-8 mx-4 font-[Manrope] transform transition-all duration-300 ease-out
          ${animate ? "translate-y-0 opacity-100" : "translate-y-full sm:translate-y-0 opacity-0"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-[#fafafa] text-2xl hover:text-white"
          onClick={() => setShowContactModal(false)}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Contact Me</h2>

        <div className="overflow-y-auto max-h-[90vh]">
          {status === "success" ? (
            <div className="text-green-400 font-semibold">Thanks for reaching out! I'll get back to you soon.</div>
          ) : status === "error" ? (
            <div className="text-red-400 font-semibold">Oops! Something went wrong. Try again.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                name="name"
                placeholder="Name"
                required
                className="p-2 rounded bg-[#1f202a] text-white border border-white border-opacity-20 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-2 rounded bg-[#1f202a] text-white border border-white border-opacity-20 placeholder:text-gray-400"
              />
              <input
                name="subject"
                placeholder="Subject"
                required
                className="p-2 rounded bg-[#1f202a] text-white border border-white border-opacity-20 placeholder:text-gray-400"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="p-2 rounded bg-[#1f202a] text-white border border-white border-opacity-20 placeholder:text-gray-400"
              />
              <select
                name="source"
                className="p-2 rounded bg-[#1f202a] text-white border border-white border-opacity-20"
              >
                <option value="" disabled selected>How did you find my portfolio?</option>
                <option value="Search engine">Google/Search</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="GitHub">GitHub</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
              <button
                type="submit"
                className="border border-[#fafafa] text-[#fafafa] hover:text-white hover:border-white bg-transparent font-semibold py-2 px-4 rounded transition flex items-center justify-center"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="animate-spin h-5 w-5 border-2 border-[#fafafa] border-t-transparent rounded-full"></span>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
