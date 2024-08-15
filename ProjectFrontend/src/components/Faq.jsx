import React from 'react';

export default function FAQ() {
    const faqs = [
        { question: 'Can I sell a car that has an ongoing loan on it?', answer: 'Yes you can. Based on the valuation of your car, CarBazaar will handle the loan closures on your behalf, and will transfer the remaining balance to your account.' },
        { question: 'How long does the RC transfer take?', answer: 'The timeline of the RC transfer might vary depending on the availability of the prospective buyer and the RTO requirements. However, you don’t need to worry about it at all! All our customers are covered under the CarBazaar Seller Protection Policy, which means until the RC transfer of your car is complete, we take full responsibility for the safety of your vehicle. Once the ownership has been transferred, we will send you an email with the proof of RC transfer.' },
        { question: 'Will CarBazaar handle/take care of the paperwork?', answer: 'Yes! From the initial documentation to the free RC transfer, we will take care of everything.' }
    ];

    const styles = {
        faqHeading: {
            textAlign: 'left',
            marginBottom: '30px',
        },
        headingText: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '2.0rem',
            fontWeight: 600,
            color: '#333',
        },
        questionText: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#333',
        },
        answerText: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.0rem',
            color: '#555',
        }
    };

    return (
        <div className="container mt-5 mb-3">

            <div style={styles.faqHeading}>
                <div style={styles.headingText}>Frequently Asked Questions</div>
            </div>

            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                                styles={styles.questionText}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body" style={styles.answerText}>
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
