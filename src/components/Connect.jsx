import { useState } from "react";
import babyImg from "../assets/home/baby.jpeg"; 
import gofundmeLogo from "../assets/home/gofundme.png";
import ScaleFadeText from "../tools/ScaleFadeText.jsx";

import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/.netlify/functions/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <main className="w-full">

      {/* HERO / GREETING */}
      <section className="w-full py-16 md:py-20" style={{background: "linear-gradient(135deg, #e6dbf5 0%, #f7d7e2 95%)",}}>
        <div className="max-w-4xl mx-auto px-6 text-center p-5">

        <ScaleFadeText
            texts={["Tansi", "Taanishi", "Boozhoo", "Welcome"]}
            className="text-3xl md:text-4xl font-['Source_Sans_3']
             italic text-indigo-800 leading-[1.15] py-4"
            />
            <img
                src={babyImg}
                alt="Community image"
                className="mx-auto w-[220px] border-[3px] border-indigo-700 mt-2 mb-10"
            />

            <p className="font-['Source_Sans_3']
             italic text-[15px] text-indigo-900 max-w-xl mx-auto leading-7">
                Becoming a member of Kihew Awasis Wakamik Cultural Society
                (formerly Indigenous Birth of Alberta) will create the opportunity
                to join a community with a common goal to (re)awaken the traditional
                teachings from our grandmothers and ancestors and carry them within
                a modern context.
            </p>

            <a
                href="mailto:info@kihewawasiswakamik.com?subject=Learn%20More%20About%20Becoming%20A%20Member%20of%20Kihew%20Awasis%20Wakamik"
                className="inline-block mt-10 px-8 py-3 bg-indigo-700 text-white text-[12px] tracking-[0.2em] uppercase border border-red-600"
            >
                Learn More About Membership
            </a>
        </div>
      </section>

      {/* CONNECT FORM */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="font-['Source_Sans_3']
           italic text-[32px] text-indigo-800 text-center mb-16">
            Connect With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* LEFT INFO */}
            <div className="text-indigo-900 font-['Source_Sans_3']
             italic text-[14px] space-y-4">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@kihewawasiswakamik.com"
                  className="underline"
                >
                  info@kihewawasiswakamik.com
                </a>
              </p>

              <p>Phone: 1-866-906-2136</p>

              <p>
                9613-111 Ave NW<br />
                Edmonton, AB T5G 0A9
              </p>

              <div className="pt-6">
                    <p className="mb-2">FOLLOW US</p>
                    <div className="flex gap-4 text-[18px] translate-x-[-8px]">
                        <a
                            href="https://www.facebook.com/indigenousbirthalberta"
                            aria-label="Facebook"
                            className="inline-block"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Facebook} alt="Facebook" className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.instagram.com/kihewawasiswakamik/"
                            aria-label="Instagram"
                            className="inline-block py-0.25"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Instagram} alt="Instagram" className="w-8 h-8" />
                        </a>
                    </div>
              </div>
            </div>

            {/* FORM */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="border border-indigo-400 px-4 py-2"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-indigo-400 px-4 py-2"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="border border-indigo-400 px-4 py-2"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-indigo-400 px-4 py-2"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="mt-4 bg-red-400 text-white py-3 uppercase tracking-wide disabled:opacity-50"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              {status === "sent" && (
                <p className="text-green-700 text-sm">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-red-700 text-sm">There was a problem sending your message. {error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="w-full py-20 text-center">
            <a href="https://www.gofundme.com/f/kihew-awasis-wakamik-indigenous-birth-alberta/" target="_blank" rel="noreferrer" 
                className="inline-block px-10 py-8 rounded-xl transitionhover:scale-[1.02] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                <img src={gofundmeLogo} alt="GoFundMe" className="mx-auto w-16 mb-6"/>
                <h3 className="font-['Source_Sans_3']
                 italic text-[28px] text-indigo-800">
                Support Our Community Fund
                </h3>
            </a>
            </section>
    </main>
  );
}
