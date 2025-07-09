import React, { useState, useRef } from 'react';
import styles from './contactform.module.css';
import { createCleverFlowRun } from '../api/form-submission';

const eventCategories = {
  "Social Events": ["Housewarming", "Bachelor/Bachelorette", "Proposal Setup", "Anniversary", "Farewell", "Reunion", "Retirement", "Yacht Party", "Rooftop/Beach Party", "Other"],
  "Religious & Traditional": ["House Pooja/Homam", "First Communion", "Diwali/Holi/Onam", "Ramadan/Eid", "Temple/Church Inauguration", "Satsang", "Other"],
  "Birthday Celebrations": ["Kids' Themed Birthday", "Milestone Birthday", "Surprise Birthday", "Other"],
  "Baby Milestones": ["Baby Shower", "Gender Reveal", "Welcome Home Baby", "Naming Ceremony", "Baptism", "Annaprasan", "Other"],
  "Weddings & Engagements": ["Engagement", "Mehendi/Haldi/Sangeet", "Wedding Day", "Other"],
  "Corporate Events": ["Office/Store Inauguration", "Product Launch", "Team Gathering", "Award Ceremony", "Gala Dinner", "Press Conference", "Brand Activation", "Workshop/Retreat", "Other"],
  "School & College": ["Graduation", "Fresher's Party", "Cultural Day", "Annual Day", "Sports Day", "Parent-Teacher Meeting", "Other"],
  "Event Props & Rentals": ["Floral Installation", "Arches/Pedestals", "Tablescape Styling", "Signages", "Other"],
  "Other": []
};

const initialFormData = {
  mainCategory: '',
  subCategory: '',
  otherEventType: '',
  guestCount: '',
  eventDate: '',
  isTentative: false,
  venueStatus: '',
  venueName: '',
  location: '',
  services: [],
  fileUpload: null,
  name: '',
  email: '',
  phone: '',
  source: '',
  budget: '',
  comments: '',
};

const budgetOptions = [
  { label: '1k-2k', value: 'AED 1,000 - 2,000' },
  { label: '2k-3k', value: 'AED 2,000 - 3,000' },
  { label: '3k-5k', value: 'AED 3,000 - 5,000' },
  { label: '5k-10k', value: 'AED 5,000 - 10,000' },
  { label: '10k+', value: 'AED 10,000+' },
];

const guestOptions = ['1-50', '51-100', '101-200', '200+'];
const venueOptions = [
  { label: 'Yes, I have a venue', value: 'Yes, I have a venue' },
  { label: 'No, I need help', value: 'No, I need help finding one' },
];
const serviceOptions = [
  'Full Planning',
  'Venue Selection',
  'Decor & Theme',
  'Catering',
  'Entertainment',
  'Photography',
  'Cake',
  'Furniture',
  'Others',
];
const sourceOptions = [
  '',
  'Google',
  'Instagram',
  'Facebook',
  'Referral',
  'Other',
];

const totalSections = 4;

const GoogleContactUsSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentSection, setCurrentSection] = useState(1);
  const [showReview, setShowReview] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileInputRef = useRef();

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMainCategoryChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      mainCategory: value,
      subCategory: '',
      otherEventType: '',
    }));
  };

  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      subCategory: value,
      otherEventType: '',
    }));
  };

  const handleOtherEventTypeChange = (e) => {
    setFormData((prev) => ({ ...prev, otherEventType: e.target.value }));
  };

  const handleGuestCount = (value) => {
    setFormData((prev) => ({ ...prev, guestCount: value }));
  };

  const handleVenueStatus = (value) => {
    setFormData((prev) => ({ ...prev, venueStatus: value }));
  };

  const handleServiceToggle = (value) => {
    setFormData((prev) => {
      const services = prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value];
      return { ...prev, services };
    });
  };

  const handleBudget = (value) => {
    setFormData((prev) => ({ ...prev, budget: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, fileUpload: e.target.files[0] || null }));
  };

  // --- Navigation ---
  const handleNext = () => {
    if (validateSection(currentSection)) {
      if (currentSection === totalSections) {
        setShowReview(true);
      } else {
        setCurrentSection((s) => s + 1);
      }
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePrev = () => {
    if (showReview) {
      setShowReview(false);
    } else {
      setCurrentSection((s) => s - 1);
    }
    setError(false);
  };

  // --- Validation ---
  const validateSection = (section) => {
    if (section === 1) {
      if (!formData.mainCategory) return false;
      if (formData.mainCategory === 'Other') {
        if (!formData.otherEventType.trim()) return false;
      } else {
        if (!formData.subCategory) return false;
        if (formData.subCategory === 'Other' && !formData.otherEventType.trim()) return false;
      }
      if (!formData.guestCount) return false;
    }
    if (section === 2) {
      if (!formData.eventDate) return false;
    }
    if (section === 4) {
      if (!formData.name.trim()) return false;
      if (!formData.phone.trim()) return false;
    }
    return true;
  };

  // --- Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare data fields for the API
      const dataFields = [
        { field: 'Event Type', value: getEventTypeSummary() },
        { field: 'Guest Count', value: formData.guestCount || 'N/A' },
        { field: 'Event Date', value: formData.eventDate || 'N/A' },
        { field: 'Is Tentative', value: formData.isTentative ? 'Yes' : 'No' },
        { field: 'Venue Status', value: formData.venueStatus || 'N/A' },
        { field: 'Venue Name', value: formData.venueName || 'N/A' },
        { field: 'Location', value: formData.location || 'N/A' },
        { field: 'Services', value: formData.services.join(', ') || 'None' },
        { field: 'Budget', value: formData.budget || 'N/A' },
        { field: 'Full Name', value: formData.name },
        { field: 'Email', value: formData.email || 'No email provided' },
        { field: 'Phone', value: `+971 ${formData.phone}` },
        { field: 'Source', value: formData.source || 'N/A' },
        { field: 'Comments', value: formData.comments || 'None' },
        { field: 'File Upload', value: formData.fileUpload ? formData.fileUpload.name : 'None' }
      ];

      // You'll need to replace this with your actual API token
      const apiToken = import.meta.env.VITE_CLEVERFLOW_API_TOKEN || 'your-api-token-here';
      const runName = `Event Enquiry - ${formData.name} - ${formData.eventDate}`;

      await createCleverFlowRun(apiToken, runName, dataFields);
      
      setShowReview(false);
      setShowSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Progress Bar ---
  const renderProgressBar = () => {
    const progressSteps = totalSections + 1;
    const steps = [];
    for (let i = 1; i <= progressSteps; i++) {
      const isReviewStep = i === progressSteps;
      const isActive = isReviewStep ? (showReview || showSuccess) : i <= currentSection;
      const isCompleted = isReviewStep ? showSuccess : i < currentSection || (showSuccess && i === progressSteps);
      steps.push(
        <div
          key={i}
          className={[
            styles.step,
            isActive && styles.stepActive,
            isCompleted && styles.stepClickable
          ].filter(Boolean).join(' ')}
          onClick={() => isCompleted && !showReview && !showSuccess && setCurrentSection(i)}
        >
          {isReviewStep ? '✓' : i}
        </div>
      );
      if (i < progressSteps) {
        steps.push(
          <div
            key={`line-${i}`}
            className={[
              styles.progressLine,
              isCompleted && styles.progressLineActive
            ].filter(Boolean).join(' ')}
          />
        );
      }
    }
    return <div className={styles.progressBar}>{steps}</div>;
  };

  // --- Section Renderers ---
  const renderSection1 = () => (
    <div className={styles.formSection}>
      <h2 className={styles.formTitle}>1. Event Basics</h2>
      <div className={`${styles.grid} ${styles.grid2} ${styles.mb8}`}>
        <div>
          <label htmlFor="mainCategory" className={styles.label}>
            Event Category <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="mainCategory"
            name="mainCategory"
            className={`${styles.select} ${error && !formData.mainCategory ? styles.inputError : ''}`}
            value={formData.mainCategory}
            onChange={handleMainCategoryChange}
          >
            <option value="">Select a category...</option>
            {Object.keys(eventCategories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subCategory" className={styles.label}>
            Specific Event Type <span style={{ color: '#ef4444' }}>*</span>
          </label>
          {formData.mainCategory === 'Other' ? (
            <input
              type="text"
              id="otherEventType"
              name="otherEventType"
              className={`${styles.input} ${error && !formData.otherEventType.trim() ? styles.inputError : ''}`}
              placeholder="Please specify event type"
              value={formData.otherEventType}
              onChange={handleOtherEventTypeChange}
            />
          ) : (
            <>
              <select
                id="subCategory"
                name="subCategory"
                className={`${styles.select} ${error && !formData.subCategory ? styles.inputError : ''}`}
                value={formData.subCategory}
                onChange={handleSubCategoryChange}
                disabled={!formData.mainCategory}
              >
                <option value="">Select a type...</option>
                {formData.mainCategory && eventCategories[formData.mainCategory].map((subCat) => (
                  <option key={subCat} value={subCat}>{subCat}</option>
                ))}
              </select>
              {formData.subCategory === 'Other' && (
                <input
                  type="text"
                  id="otherEventType"
                  name="otherEventType"
                  className={`${styles.input} ${styles.mt2} ${error && !formData.otherEventType.trim() ? styles.inputError : ''}`}
                  placeholder="Please specify event type"
                  value={formData.otherEventType}
                  onChange={handleOtherEventTypeChange}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div>
        <label className={styles.label}>
          Approximately how many guests? <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div className={`${styles.grid} ${styles.grid4} ${error && !formData.guestCount ? styles.inputError : ''}`}>
          {guestOptions.map((opt) => (
            <div
              key={opt}
              className={[
                styles.optionCard,
                formData.guestCount === opt && styles.optionCardSelected
              ].filter(Boolean).join(' ')}
              onClick={() => handleGuestCount(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSection2 = () => (
    <div className={styles.formSection}>
      <h2 className={styles.formTitle}>2. Date & Venue</h2>
      <div className={styles.mb8}>
        <label htmlFor="eventDate" className={styles.label}>
          Preferred event date? <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          className={`${styles.input} ${error && !formData.eventDate ? styles.inputError : ''}`}
          value={formData.eventDate}
          onChange={handleInputChange}
        />
        <div className={styles.mt2}>
          <input
            type="checkbox"
            id="isTentative"
            name="isTentative"
            className={styles.checkbox}
            checked={formData.isTentative}
            onChange={handleInputChange}
          />
          <label htmlFor="isTentative" className={styles.checkboxLabel}>
            My date is flexible / tentative
          </label>
        </div>
      </div>
      <div className={styles.mb8}>
        <label className={styles.label}>Do you have a venue?</label>
        <div className={`${styles.grid} ${styles.grid2}`}>
          {venueOptions.map((opt) => (
            <div
              key={opt.value}
              className={[
                styles.optionCard,
                formData.venueStatus === opt.value && styles.optionCardSelected
              ].filter(Boolean).join(' ')}
              onClick={() => handleVenueStatus(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.grid} ${styles.grid2}`}>
        <div>
          <label htmlFor="venueName" className={styles.label}>Venue Name</label>
          <input
            type="text"
            id="venueName"
            name="venueName"
            placeholder="e.g., Armani Hotel"
            className={styles.input}
            value={formData.venueName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="location" className={styles.label}>Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g., Downtown Dubai"
            className={styles.input}
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );

  const renderSection3 = () => (
    <div className={styles.formSection}>
      <h2 className={styles.formTitle}>3. Services & Details</h2>
      <div className={styles.mb8}>
        <label className={styles.label}>Which services are you interested in?</label>
        <div className={`${styles.grid} ${styles.grid3}`}>
          {serviceOptions.map((opt) => (
            <div
              key={opt}
              className={[
                styles.optionCard,
                formData.services.includes(opt) && styles.optionCardSelected
              ].filter(Boolean).join(' ')}
              onClick={() => handleServiceToggle(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="fileUpload" className={styles.label}>Attach any reference files</label>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          className={styles.fileInput}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <p className={styles.fileInputText}>{formData.fileUpload ? formData.fileUpload.name : ''}</p>
      </div>
    </div>
  );

  const renderSection4 = () => (
    <div className={styles.formSection}>
      <h2 className={styles.formTitle}>4. Contact & Budget</h2>
      <div className={`${styles.grid} ${styles.grid2} ${styles.mb8}`}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`${styles.input} ${error && !formData.name.trim() ? styles.inputError : ''}`}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className={styles.label}>
            Mobile Number <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div className={styles.phoneInput}>
            <span className={styles.phonePrefix}>+971</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="50 123 4567"
              className={`${styles.input} ${error && !formData.phone.trim() ? styles.inputError : ''}`}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="source" className={styles.label}>How did you hear about us?</label>
          <select
            id="source"
            name="source"
            className={styles.input}
            value={formData.source}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            {sourceOptions.slice(1).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.mb8}>
        <label className={styles.label}>What is your estimated budget?</label>
        <div className={`${styles.grid} ${styles.grid5}`}>
          {budgetOptions.map((opt) => (
            <div
              key={opt.value}
              className={[
                styles.optionCard,
                formData.budget === opt.value && styles.optionCardSelected
              ].filter(Boolean).join(' ')}
              onClick={() => handleBudget(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="comments" className={styles.label}>Requirement Brief</label>
        <textarea
          id="comments"
          name="comments"
          rows={3}
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Any specific ideas, themes, or requirements?"
          value={formData.comments}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  // --- Review Section ---
  const getEventTypeSummary = () => {
    if (formData.mainCategory === 'Other' || formData.subCategory === 'Other') {
      return `${formData.mainCategory} - ${formData.otherEventType}`;
    }
    return `${formData.mainCategory} - ${formData.subCategory}`;
  };

  const renderReview = () => (
    <div className={styles.reviewSection}>
      <h2 className={styles.reviewTitle}>Review Your Enquiry</h2>
      <div className={styles.reviewContent}>
        <p><strong className={styles.reviewItem}>Event Type:</strong> {getEventTypeSummary()}</p>
        <p><strong className={styles.reviewItem}>Guests:</strong> {formData.guestCount || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Date:</strong> {formData.eventDate} {formData.isTentative ? '(Tentative)' : ''}</p>
        <p><strong className={styles.reviewItem}>Venue Status:</strong> {formData.venueStatus || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Venue:</strong> {formData.venueName || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Location:</strong> {formData.location || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Services:</strong> {formData.services.join(', ') || 'None'}</p>
        <p><strong className={styles.reviewItem}>Budget:</strong> {formData.budget || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Contact:</strong> {formData.name} ({formData.email || 'No email provided'}, +971 {formData.phone})</p>
        <p><strong className={styles.reviewItem}>Reference File:</strong> {formData.fileUpload ? formData.fileUpload.name : 'None'}</p>
        <p><strong className={styles.reviewItem}>Source:</strong> {formData.source || 'N/A'}</p>
        <p><strong className={styles.reviewItem}>Brief:</strong> {formData.comments || 'None'}</p>
      </div>
      {submitError && (
        <div className={styles.errorMessage} role="alert">
          <span>{submitError}</span>
        </div>
      )}
      <div className={styles.reviewButtons}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handlePrev}
          disabled={isSubmitting}
        >
          Back to Edit
        </button>
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </div>
    </div>
  );

  // --- Success Message ---
  const renderSuccess = () => (
    <div className={styles.successMessage}>
      <strong>Thank You!</strong>
      <span> Your enquiry has been sent. We'll be in touch shortly.</span>
    </div>
  );

  // --- Main Render ---
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h1 className={styles.heading}>Let's Plan Your Next Event</h1>
        <p className={styles.subheading}>Complete the steps below for a personalized quote.</p>
      </div>
      {renderProgressBar()}
      {error && (
        <div className={styles.errorMessage} role="alert">
          <span>Please fill out all required fields marked with <span style={{ fontWeight: 700 }}>*</span>.</span>
        </div>
      )}
      {!showReview && !showSuccess && (
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          {currentSection === 1 && renderSection1()}
          {currentSection === 2 && renderSection2()}
          {currentSection === 3 && renderSection3()}
          {currentSection === 4 && renderSection4()}
          <div className={styles.formButtons}>
            {currentSection > 1 && (
              <button
                type="button"
                className={styles.backButton}
                onClick={handlePrev}
              >
                Back
              </button>
            )}
            <button
              type="button"
              className={styles.nextButton}
              onClick={handleNext}
            >
              {currentSection === totalSections ? 'Review Enquiry' : 'Next'}
            </button>
          </div>
        </form>
      )}
      {showReview && !showSuccess && renderReview()}
      {showSuccess && renderSuccess()}
    </div>
  );
};

export default GoogleContactUsSection;
