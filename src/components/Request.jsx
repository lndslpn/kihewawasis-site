import babyIcon from "../assets/request/baby.png";
import handIcon from "../assets/request/hand.png";
import heartIcon from "../assets/request/heart.png";

export default function Request() {
  const offerings = [
    {
      icon: babyIcon,
      alt: "Baby icon",
      title: ["Pregnancy/Birth: The Journey", "From The Spirit World"],
      body:
        "Kihew Awasis Wakamik Cultural Society is committed to supporting Indigenous folks and families through their reproductive health and parenting journey.",
      subject: "Request%20Care%20-%20Pregnancy%20and%20Birth",
    },
    {
      icon: handIcon,
      alt: "Hand with flower icon",
      title: ["Grief & End of Life: Journey Back To", "The Spirit World"],
      body:
        "Kihew Awasis Wakamik Cultural Society is committed to supporting Indigenous folks and families through their loved one's journey back to the spirit world, which may also include grief support.",
      subject: "Request%20Care%20-%20Grief%20and%20End%20of%20Life",
    },
  ];

  return (
    <main className="w-full" style={{ background: "linear-gradient(135deg, #e6dbf5 0%, #f7d7e2 95%)" }}>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-sans italic text-indigo-800 mb-6">
          Support Available
        </h1>
        <p className="text-indigo-900 font-sans italic text-[15px] leading-7 max-w-2xl mx-auto">
          Providing knowledge, guidance, and support to community members during life transitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 mt-14 md:mt-16">
          {offerings.map((item) => (
            <div key={item.subject} className="flex flex-col items-center gap-4 text-indigo-900 font-sans italic">
              <img src={item.icon} alt={item.alt} className="w-14 h-14 object-contain" />
              <div className="text-[16px] text-indigo-800 leading-relaxed">
                {item.title.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <p className="max-w-xs text-[14px] leading-6">
                {item.body}
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScInp66PypqC7l5YetKBsXHxiM8CLnedgkUz_JMT7FQEd6B0Q/viewform"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] uppercase text-[#d45c5c] underline tracking-[0.04em]"
              >
                Request Care
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.7)] border-t border-indigo-100 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <img src={heartIcon} alt="Heart icon" className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-sans italic text-indigo-800 mb-4">
            Apply for Midwifery Care
          </h2>
          <p className="text-indigo-900 font-sans italic text-[14px] leading-6 max-w-2xl mx-auto">
            If you are pregnant and interested in midwifery care, please complete a request for care
            form with the Alberta Association of Midwives. 
            <br></br>
            (If you would like to inquire about care with
            an Indigenous Midwife, please email{" "}
            <a href="mailto:info@kihewawasiswakamik.com" className="underline">
              info@kihewawasiswakamik.com
            </a>
            )
          </p>
          <a
            href="https://clientcare.alberta-midwives.ca/waitpool/register"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[13px] uppercase text-[#d45c5c] underline tracking-[0.04em]"
          >
            Request Midwifery Care
          </a>
        </div>
      </section>
    </main>
  );
}
