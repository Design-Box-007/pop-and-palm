import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./FAQ.module.css";
import image1 from "../../assets/Pop and Palm/Home Page Vector/Vector 1.svg";
import VisibleReveal from "../../components/VisibleReveal";
import TopToBottomReveal from "../../components/TopToBottomReveal";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";

// Default FAQ data
const defaultFaqs = [
  {
    question: "What types of events do you specialize in?",
    answer:
      "We specialize in weddings, corporate events, private parties, exhibitions, product launches, and cultural celebrations of all sizes.",
  },
  {
    question: "Do you plan events outside of Dubai?",
    answer:
      "Yes, while most of our events are in Dubai, we also manage events across the UAE and selected international destinations upon request.",
  },
  // {
  //   question: "How far in advance should I contact you?",
  //   answer:
  //     "We recommend reaching out at least 3–6 months before your event to ensure availability and smooth planning, but we can also accommodate shorter timelines if needed.",
  // },
  {
  question: "How far in advance should I contact you?",
  answer:
    "For a smooth and well-coordinated experience, we recommend reaching out at least 2–3 weeks in advance for most events.\n\n" +
    "Small events (birthdays, home décor setups, intimate gatherings): Can be planned even 1 week prior, subject to availability.\n\n" +
    "Medium to large events (corporate functions, weddings, engagement ceremonies, themed décor, multi-vendor events): Ideally 1–3 months in advance to ensure the best planning, design coordination, and vendor scheduling.\n\n"
  },
  {
    question: "Can you handle both planning and execution?",
    answer:
      "Absolutely! Our team manages everything from concept and design to logistics and on-the-day execution, so you can enjoy a stress-free event.",
  },
  {
    question: "Do you offer custom packages or fixed pricing?",
    answer:
      "We provide both. You can choose from our standard packages or work with us to design a fully customized plan tailored to your budget and requirements.",
  },
];

function FAQAccordion({ faqs = defaultFaqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedWrapper type="fadeUp" delay={0.2}>
      <div className={styles.container}>
        <div className={styles.faqHeader}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <img src={image1} alt="img" />
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div className={styles.item} key={faq.id || index}>
              <button
                className={styles.button}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className={styles.icon} />
                ) : (
                  <FaChevronDown className={styles.icon} />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className={styles.answer}>{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default FAQAccordion;
