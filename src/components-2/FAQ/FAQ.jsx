import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./FAQ.module.css";

function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div className={styles.item}>
            <button className={styles.button} onClick={() => toggleFAQ(index)}>
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
  );
}

export default FAQAccordion;
