import { useTranslations } from 'next-intl';

import { ContactForm, SocialIcons } from '@/components/feature';

const ContactPage = () => {
  const t = useTranslations('contact');

  return (
    <div className='container max-w-2xl py-16'>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
        {t('title')}
      </h1>
      <p className='mt-3 text-muted-foreground'>{t('subtitle')}</p>

      <div className='mt-10'>
        <ContactForm />
      </div>

      <div className='mt-12 border-t pt-8'>
        <p className='mb-3 text-sm font-medium'>{t('socialTitle')}</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactPage;
