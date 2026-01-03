import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.jpg";
import heroImage from "../assets/home/moss_baby.jpg";
import kitchen from "../assets/home/auntieskitchen.jpg";

import requestSupportImg from "../assets/home/two.jpg";
import mentorshipImg from "../assets/home/group.jpg";
import workshopsImg from "../assets/home/moccasin.jpg";
import communityImg from "../assets/home/midwives.jpg";

const GRADIENT_A = "linear-gradient(135deg, #e6dbf5 0%)";

const GRADIENT_B = "linear-gradient(225deg, #e6dbf5 100%)";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeatureSection({
  title,
  subtitle,
  body,
  buttonText,
  buttonTo,
  imageSrc,
  imageAlt,
  imageLeft = true,
  background,
}) {
  return (
    <section className="w-full py-24" style={{ background }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className={[
            "flex flex-col md:flex-row items-center justify-center",
            "gap-12 md:gap-24",
            imageLeft ? "" : "md:flex-row-reverse",
          ].join(" ")}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-[320px] md:w-[360px] border-[3px] border-indigo-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-center md:text-left max-w-md"
            variants={itemVariants}
          >
            <h2 className="font-['Source_Sans_3'] italic text-[44px] text-indigo-800">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-4 font-['Source_Sans_3'] text-[14px] text-indigo-900/80">
                {subtitle}
              </p>
            )}

            {body && (
              <p className="mt-6 font-['Source_Sans_3'] italic text-[15px] leading-7 text-indigo-900">
                {body}
              </p>
            )}

            {buttonText && (
              <div className="mt-10 flex justify-center md:justify-start">
                <LinkOrA
                  to={buttonTo}
                  className="px-10 py-3 border-2 border-red-600 bg-slate-500 text-white tracking-[0.25em] uppercase text-[12px]"
                >
                  {buttonText}
                </LinkOrA>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LinkOrA({ to, className, children }) {
  const isExternal =
    typeof to === "string" &&
    (to.startsWith("http") || to.startsWith("mailto:"));

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

function MissionStatement() {
    return (
      <section
        className="w-full py-28"
        style={{background:"linear-gradient(180deg, #e6dbf5 0%, #f7d7e2 95%)",}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#efeff5] border-[5px] border-indigo-900 rounded-[28px] p-10 md:p-14 text-center shadow-lg">
            <h2 className="font-['Source_Sans_3'] font-bold text-4xl md:text-5xl text-indigo-900 mb-6">
              Mission Statement
            </h2>
  
            <p className="font-['Source_Sans_3'] text-[18px] md:text-[20px] leading-8 text-indigo-900">
              Kihew Awasis Wakamik Cultural Society is a community of Indigenous
              birth workers, knowledge keepers, aunties, grandmothers and
              midwives who share a common vision of healing our people by
              improving access to culturally safe and inclusive maternity and
              the journey back to the spirit world care.
            </p>
          </div>
        </div>
      </section>
    );
  }  

export default function Home() {
  return (
    <main className="w-full">
      {/* ======= SECTION 1 ======= */}
      <section
        className="w-full py-20"
        style={{
          background:
            "linear-gradient(0deg, #f7d7e2 1%, #e6dbf5 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="flex-1" variants={itemVariants}>
              <img
                src={logo}
                alt="Kihew Awasis Wakamik logo"
                className="w-44 mb-8 border-[3px] border-indigo-700"
              />
              <h1 className="font-['Source_Sans_3'] italic text-4xl text-indigo-800 mb-8">
                Kihew Awasis Wakamik Cultural Society
              </h1>
              <p className="font-['Source_Sans_3'] italic text-[17px] leading-7 text-indigo-900 max-w-md">
                Kihew Awasis Wakamik Cultural Society is a community of
                Indigenous birth workers, knowledge keepers, aunties,
                grandmothers and midwives who share a common vision of healing
                our people by improving access to culturally safe and inclusive
                maternity and the journey back to the spirit world care.
                <br />
                <br />
                Our work centres Indigenous resilience and sovereignty as we
                awaken and reclaim our traditions for reproductive health,
                kinship and transitioning back to the spirit world.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              variants={itemVariants}
            >
              <img
                src={heroImage}
                alt="Indigenous mother holding baby"
                className="w-[340px] md:w-[380px] border-[3px] border-indigo-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======= SECTION 2 ======= */}
      <section
        className="w-full py-24"
        style={{
          background:
            "linear-gradient(180deg, #f7d7e2 1%, #e6dbf5 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-10">
          {/* ✅ Scroll-to-appear wrapper */}
          <motion.div
            className="flex flex-col md:flex-row items-start gap-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex-1 flex justify-center translate-x-[-75px]"
              variants={itemVariants}
            >
              <img
                src={kitchen}
                alt="Community gathering"
                className="w-[380px] border-[3px] border-indigo-700"
              />
            </motion.div>

            <motion.div
              className="flex-1 flex justify-end translate-x-[-60px]"
              variants={itemVariants}
            >
              <p className="font-['Source_Sans_3'] italic text-[16px] leading-7 text-indigo-900 max-w-sm">
                Our goal is to decrease the high rates of child apprehension,
                domestic violence, MMIWG2STM and health disparities that
                Indigenous families face. Kihew awasis wakamik believes that the
                healing, health and wellbeing of our people begins with
                supporting the sacredness of the reproductive journey and birth,
                which not only impacts babies and birthing people, but also
                ripples out to wider communities.
                <br />
                <br />
                We offer culturally inclusive practices and accessible wrap
                around support for Indigenous families navigating reproductive
                health, birth preparation, postpartum care and parenthood, as
                well during critical illness, death, the grief journey and other
                major life transitions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======= FEATURE SECTIONS ======= */}
      <FeatureSection
        title="Request Support"
        background={GRADIENT_A}
        subtitle="Kihew Awasis Wakamik Cultural Society (formerly Indigenous Birth of Alberta-IBA), is committed to supporting Indigenous folks and families through life's transitions."
        body=""
        buttonText="Request Care"
        buttonTo="/request-care"
        imageSrc={requestSupportImg}
        imageAlt="Request support"
        imageLeft={true}
      />

      <FeatureSection
        title="Mentorship"
        background={GRADIENT_B}
        body="Kihew Awâsis Wakamik Cultural Society (formerly Indigenous Birth of Alberta-IBA), is committed to supporting Indigenous folks and families through life's transitions."
        buttonText="Request Information"
        buttonTo="mailto:info@kihewawasiswakamik.com?subject=Information%20on%2013%20Moons%20Mentorship"
        imageSrc={mentorshipImg}
        imageAlt="Mentorship"
        imageLeft={false}
      />

      <FeatureSection
        title="Workshops"
        background={GRADIENT_A}
        body="Kiciy Ohkomimawak Iskotew Society includes traditional teachings from Elders and Knowledge Keepers as well as reproductive health and end of life education shared from an Indigenous perspective by local aunties, midwives and birth workers."
        buttonText="Request More Information"
        buttonTo="mailto:info@kihewawasiswakamik.com?subject=Workshop%20Information%20Request"
        imageSrc={workshopsImg}
        imageAlt="Workshops"
        imageLeft={true}
      />

      <FeatureSection
        title="Community Engagement"
        background={GRADIENT_B}
        subtitle="Community engagement with KAWCS is an important and culturally sensitive endeavor."
        body="It's crucial to approach engagement with respect and a commitment to building trust through collaboration."
        buttonText="Learn More"
        buttonTo="mailto:info@kihewawasiswakamik.com?subject=Learn%20More%20About%20Community%20Engagement"
        imageSrc={communityImg}
        imageAlt="Community engagement"
        imageLeft={false}
      />

    <MissionStatement />

    </main>
  );
}