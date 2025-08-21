
import React from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="py-8 md:py-12">
        <ContactHeader />

        <div className="max-w-5xl mx-auto bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </div>
  );
};

export default Contact;