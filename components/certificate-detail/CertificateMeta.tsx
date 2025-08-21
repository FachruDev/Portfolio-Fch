
import React from 'react';
import { Certificate } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import MetaInfoItem from './MetaInfoItem';
import { BriefcaseIcon, CalendarIcon, ShieldCheckIcon, IdentificationIcon } from '../icons';

interface CertificateMetaProps {
    certificate: Certificate;
}

const CertificateMeta: React.FC<CertificateMetaProps> = ({ certificate }) => {
    const { t, language } = useAppContext();
    return (
        <div className="mt-8 py-6 border-y border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <MetaInfoItem icon={<BriefcaseIcon className="w-5 h-5"/>} label={t('common.issuedBy')} value={certificate.issuer} />
            <MetaInfoItem icon={<CalendarIcon className="w-5 h-5"/>} label={t('common.issuedOn')} value={new Date(certificate.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })} />
            {certificate.validUntil && <MetaInfoItem icon={<ShieldCheckIcon className="w-5 h-5"/>} label={t('common.validUntil')} value={certificate.validUntil[language]} />}
            {certificate.credentialId && <MetaInfoItem icon={<IdentificationIcon className="w-5 h-5"/>} label={t('common.credentialId')} value={certificate.credentialId} />}
        </div>
    );
};

export default CertificateMeta;
