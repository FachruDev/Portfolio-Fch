
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { contactInfo, cvUrls } from '../../data/profile';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, LinkedinIcon, DownloadIcon } from '../icons';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo: React.FC = () => {
    const { t, language } = useAppContext();

    return (
        <div className="p-8 md:p-12 bg-light-background/50 dark:bg-dark-background/50">
            <h2 className="text-2xl font-bold mb-6 text-light-primary dark:text-dark-primary">{t('contact.contactInfo')}</h2>
            
            <div className="space-y-6">
                <ContactInfoItem 
                    icon={<EnvelopeIcon className="w-6 h-6" />}
                    label={t('contact.emailAddress')}
                    value={contactInfo.email}
                    href={`mailto:${contactInfo.email}`}
                />
                 <ContactInfoItem 
                    icon={<PhoneIcon className="w-6 h-6" />}
                    label={t('contact.phone')}
                    value={contactInfo.phone}
                    href={`tel:${contactInfo.phone.replace(/[\s-()]/g, '')}`}
                />
                 <ContactInfoItem 
                    icon={<MapPinIcon className="w-6 h-6" />}
                    label={t('contact.location')}
                    value={contactInfo.location[language]}
                />
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                 <h3 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">{t('contact.social')}</h3>
                 <a 
                    href={contactInfo.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center p-3 rounded-lg text-light-secondary dark:text-dark-secondary bg-light-background dark:bg-dark-background hover:text-light-accent dark:hover:text-dark-accent hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                    <LinkedinIcon className="w-6 h-6" />
                    <span className="ml-3 font-semibold">LinkedIn</span>
                </a>
            </div>
             <div className="mt-8">
                <a 
                    href={cvUrls[language]}
                    download={`CV-Portfolio-${language.toUpperCase()}.pdf`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 text-base font-medium rounded-md text-light-primary dark:text-dark-primary bg-light-background dark:bg-dark-background hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    {t('home.downloadCV')}
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
