"use client";
import { useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";

export default function ProductPage() {

const [step, setStep] = useState(1);
const [openIndex, setOpenIndex] = useState<number | null>(1);

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

const handleNext = () => {
  if (step === 1 && name.trim()) {
    setStep(2);
  } 
  else if (step === 2 && phone.trim()) {
    setStep(3);
  } 
  else if (step === 3 && email.trim()) {
    setStep(4);

    console.log({ name, phone, email }); // ready for backend
  }
};

  return (
    <main className={styles.page}>
      
      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>
        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Learn UI/UX and build your skills in a unique, modern way.
            </h1>

            <p className={styles.subtext}>
              Learn UI/UX design through a practical, hands-on approach focused on
              applications and helps you understand user behavior, design intuitive
              interfaces, and work with industry tools like Figma.
            </p>

            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>Enroll Now</button>
              <button className={styles.secondaryBtn}>Know More</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
  <div className={styles.imageWrapper}>
    <Image
      src="/hero-person.png"
      alt="bg"
      fill
      className={styles.bgImage}
    />
    <Image
      src="/hero.person.png"
      alt="person"
      fill
      priority
      className={styles.frontImage}
    />
  </div>
</div>
</div>
      </section>



      {/* ================= TRUSTED LOGOS ================= */}
<section className={styles.trusted}>
  <div className={styles.trustedContainer}>
    
    <p className={styles.trustedText}>
      Trusted by world’s leading brands
    </p>

    <div className={styles.logos}>
      <img src="/logos/rise.svg" alt="Rise" />
      <img src="/logos/vertigo.svg" alt="Vertigo" />
      <img src="/logos/minty.svg" alt="Minty" />
      <img src="/logos/glossy.svg" alt="Glossy" />
      <img src="/logos/rise.svg" alt="Rise" />
      <img src="/logos/waveless.svg" alt="Waveless" />
    </div>

  </div>
</section>


      {/* ================= IMPACT SECTION ================= */}
<section className={styles.impact}>
  <div className={styles.impactContainer}>

    <p className={styles.impactTag}>
      WHAT THIS PROGRAM IS ABOUT
    </p>

    <h2 className={styles.impactHeading}>
      Turn ideas into real impact with CleverLN.
    </h2>

    <p className={styles.impactSub}>
      Build. Apply. Impact
    </p>

    <p className={styles.impactDesc}>
      Bring your ideas to life with designs that are creative, intuitive, and user-focused.
      <br />
      Where creativity meets usability.
    </p>

    <p className={styles.impactSmall}>
      Learn by building—weekly AI use cases inspired by real companies.
    </p>

    {/* LOGOS */}
    <div className={styles.impactLogos}>
      <img src="/logos/miles.png" alt="M Miles" />
      <img src="/logos/reddit.png" alt="Reddit" />
      <img src="/logos/swiggy.png" alt="Swiggy" />
    </div>

    <p className={styles.impactFooter}>
      Learn from those who’ve built real AI systems and driven measurable growth.
    </p>

  </div>
</section>


      {/* ================= STATS ================= */}
<section className={styles.stats}>
  <div className={styles.statsContainer}>

    {/* LEFT CARD */}
    <div className={styles.statCard}>
      <h3>07+</h3>
      <p>YEARS OF EXPERIENCE</p>
    </div>

    {/* MIDDLE CARD */}
    <div className={styles.statCardLarge}>
      <h3>20000+</h3>
      <div className={styles.statText}>
        <p>Jobs are Listed this year.</p>
        <p>
          Don’t wait <span>Start with CleverLN</span> and are you ready?
        </p>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className={styles.statCard}>
      <h3>2K+</h3>
      <p>Registered in this Years</p>
    </div>

  </div>
</section>


      {/* ================= PRICING ================= */}
<section className={styles.pricing}>

  {/* HEADING */}
  <div className={styles.pricingHeader}>
    <h2>CleverLN plans built for every learner.</h2>
    <p>Built for competition. Designed for every student’s success.</p>
  </div>

  <div className={styles.pricingContainer}>

    {/* ================= LEFT CARD ================= */}
    <div className={styles.priceCard}>
      
      {/* ✅ ONLY STANDARD BADGE */}
      <span className={styles.badge}>Standard</span>

      <div className={styles.cardContent}>

        {/* LEFT */}
        <div className={styles.leftContent}>
          <h2 className={styles.price}>
  Rs 399.00
</h2>

          <p className={styles.priceDesc}>
            Perfect for beginners who prefer flexible, self-paced learning.
          </p>

          <button className={styles.buyBtn}>BUY NOW</button>
        </div>

        {/* RIGHT */}
        <ul className={styles.features}>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Life time LMS access
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Earn your <span>CleverLN</span> certificate.
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Get job portal access. Apply now.
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    2+ Real-time projects
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Integrate AI into your daily work.
  </li>
</ul>

      </div>
    </div>

    {/* ================= RIGHT CARD ================= */}
    <div className={`${styles.priceCard} ${styles.highlightCard}`}>
      
      {/* ✅ TRENDING ONLY HERE */}
      <span className={styles.trending}>Trending Plan</span>

      {/* ✅ ADVANTAGE BADGE */}
      <span className={styles.badge}>Advantage +</span>

      <div className={styles.cardContent}>

        {/* LEFT */}
        <div className={styles.leftContent}>
          <h2 className={styles.price}>
            Rs 1499.00
          </h2>

          <p className={styles.priceDesc}>
            Perfect for students aiming to grow under expert guidance.
          </p>

          <button className={styles.buyBtn}>BUY NOW</button>
        </div>

        {/* RIGHT */}
        <ul className={styles.features}>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    LMS + interactive live sessions
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Earn your <span>CleverLN Pro</span> certificate.
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    Get job access + LOR. Apply now.
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    4+ Real-time projects
  </li>
  <li>
    <img src="/icons/check.png" className={styles.icon} />
    100% doubt clearance & job assistance
  </li>
</ul>

      </div>
    </div>

  </div>

  {/* FOOTER */}
  <p className={styles.paymentText}>
    Trusted by 519+ universities, we follow PPP pricing to make learning accessible—along with 100% secure payments with
  </p>

  <div className={styles.paymentLogos}>
    <img src="/logos/razorpay.png" alt="razorpay" />
    <img src="/logos/easebuzz.png" alt="easebuzz" />
    <img src="/logos/nsdc.png" alt="nsdc" />
    <img src="/logos/skill-india.png" alt="skillindia" />
  </div>

</section>


{/* ================= CONTACT ================= */}
      <section className={styles.productContactSection}>
  <div className={styles.productContactContainer}>

    {/* LEFT */}
    <div className={styles.productContactLeft}>
      <h2>Want to know more?</h2>
      <h1>Submit the form to get complete details.</h1>
      <p>
        Whether you have questions, need clarity, or are looking for the right
        direction, connect with our experts.
      </p>
    </div>

    {/* RIGHT */}
    <div className={styles.productContactRight}>

      {/* STEP 1 - NAME */}
      {step === 1 && (
        <div className={styles.productInputRow}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.productInput}
          />
          <button onClick={handleNext} className={styles.productNextBtn}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 - PHONE */}
      {step === 2 && (
        <div className={styles.productInputRow}>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.productInput}
          />
          <button onClick={handleNext} className={styles.productNextBtn}>
            Next
          </button>
        </div>
      )}

      {/* STEP 3 - EMAIL */}
      {step === 3 && (
        <div className={styles.productInputRow}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.productInput}
          />
          <button onClick={handleNext} className={styles.productNextBtn}>
            Submit
          </button>
        </div>
      )}

      {/* STEP 4 - SUCCESS */}
      {step === 4 && (
        <p className={styles.productSuccess}>
          ✅ Thank you! We’ll contact you soon.
        </p>
      )}

      {/* DOTS (UPDATED) */}
      <div className={styles.productDots}>
        <span className={`${styles.productDot} ${step >= 1 ? styles.productActive : ""}`} />
        <span className={`${styles.productDot} ${step >= 2 ? styles.productActive : ""}`} />
        <span className={`${styles.productDot} ${step >= 3 ? styles.productActive : ""}`} />
        <span className={`${styles.productDot} ${step >= 4 ? styles.productActive : ""}`} />
      </div>

      <p className={styles.productResponse}>
        Get Response within 12 Hours
      </p>

    </div>
  </div>
</section>


      {/* ================= TOOLS ================= */}
{/* ================= TOOLS SECTION ================= */}
<section className={styles.toolsSection}>
    <div className={styles.toolsContainer}>

    {/* HEADING */}
    <div className={styles.toolsHeader}>
  <h2>Work with Industry Tools</h2>
  <p>Core Skills You’ll Build with CleverLN</p>
</div>

<div className={styles.toolsLogos}>
  <img src="/tools/canva.png" />
  <img src="/tools/claude.png" />
  <img src="/tools/adobe.png" />
  <img src="/tools/framer.png" />
</div>

    {/* BROCHURE CARD */}
    
    <div className={styles.brochureCard}>
  <div className={styles.brochureText}>
    <h3>Access Course Brochure</h3>
    <p>
      Want to know more about the course? Click the download button to check it out.
    </p>
  </div>

  <button className={styles.downloadBtn}>
    Download Brochure
  </button>
</div>
</div>
</section>


{/* ================= CTA SECTION ================= */}
<section className={styles.ctaSection}>
  <div className={styles.ctaContainer}>

    {/* LEFT IMAGE */}
    <div className={styles.ctaLeft}>
      <img src="/cta/person.png" alt="person" className={styles.person} />
      <img src="/cta/bubble.png" alt="bubble" className={styles.bubble} />
    </div>

    {/* RIGHT CONTENT */}
    <div className={styles.ctaRight}>
      <h2>
        Start your journey—unlock opportunities and grow into a future leader.
      </h2>

      <p>
        More than just courses—CleverLN connects you to real opportunities.
        Enroll now for <strong>free job portal</strong> access and start applying with confidence.
      </p>

      <div className={styles.ctaButtons}>
        <button className={styles.primaryBtn}>
          ENROLL TODAY TO UNLOCK FOR FREE
        </button>

        <button className={styles.secondaryBtn}>
          EXPLORE JOB PORTAL
        </button>
      </div>
    </div>

  </div>
</section>


    {/* ================= FAQ HEADING ================= */}
<div className={styles.productFaqHeading}>
  <h2>Let’s Clear Things Up</h2>
  <p>Quick answers to help you move forward with confidence.</p>
</div>

<section className={styles.productFaqSection}>
  <div className={styles.productFaqContainer}>

    {[1,2,3,4].map((_, index) => (
      <div
        key={index}
        className={`${styles.productFaqItem} ${
          openIndex === index ? styles.productActive : ""
        }`}
      >
        {/* HEADER */}
        <div
          className={styles.productFaqHeader}
          onClick={() => {
            if (openIndex === index) {
              setOpenIndex(null);
            } else {
              setOpenIndex(index);
            }
          }}
        >
          <p>
            Is technical support available if I encounter issues with the online platform?
          </p>

          <div className={styles.productIcon}>
            {openIndex === index ? "▲" : "▼"}
          </div>
        </div>

        {/* CONTENT */}
        {openIndex === index && (
          <div className={styles.productFaqContent}>
            <p>
              Yes, our dedicated technical support team is available 24/7 to assist you with any platform-related issues. You can reach us via chat, email, or our support portal.
            </p>
          </div>
        )}
      </div>
    ))}

  </div>
</section>

    </main>
  );
}



