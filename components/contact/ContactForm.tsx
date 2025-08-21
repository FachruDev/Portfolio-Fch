
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ContactForm: React.FC = () => {
  const { t } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    // For this static demo, we'll just show an alert.
    alert("Form submitted successfully! (This is a demo)");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-light-primary dark:text-dark-primary">{t('contact.formTitle')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-1">{t('contact.name')}</label>
                <input 
                    type="text" name="name" id="name" required 
                    className="block w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all" 
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-1">{t('contact.email')}</label>
                <input 
                    type="email" name="email" id="email" required 
                    className="block w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all" 
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-1">{t('contact.message')}</label>
                <textarea 
                    id="message" name="message" rows={5} required 
                    className="block w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-transparent transition-all"
                ></textarea>
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface dark:focus:ring-offset-dark-surface focus:ring-light-accent dark:focus:ring-dark-accent transition-all duration-300 transform hover:-translate-y-0.5">
                    {t('contact.sendMessage')}
                </button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;
