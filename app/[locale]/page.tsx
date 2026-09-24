import { useTranslations } from 'next-intl';
import { Code2, Sparkles, Users } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const HomePage = () => {
  const t = useTranslations('home');

  const highlights = [
    { icon: Code2, title: t('highlight1Title'), text: t('highlight1Text') },
    { icon: Sparkles, title: t('highlight2Title'), text: t('highlight2Text') },
    { icon: Users, title: t('highlight3Title'), text: t('highlight3Text') },
  ];

  return (
    <div className='container'>
      <section className='flex min-h-[70vh] flex-col items-start justify-center gap-6 py-20'>
        <p className='text-sm font-medium text-muted-foreground'>
          {t('greeting')}
        </p>
        <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
          {t('name')}
        </h1>
        <h2 className='text-xl font-medium text-muted-foreground sm:text-2xl'>
          {t('role')}
        </h2>
        <p className='max-w-2xl text-base text-muted-foreground sm:text-lg'>
          {t('tagline')}
        </p>
        <div className='flex flex-wrap gap-3 pt-2'>
          <Button size='lg'>
            <Link href='/projects'>{t('ctaPrimary')}</Link>
          </Button>
          <Button size='lg' variant='outline'>
            <Link href='/contact'>{t('ctaSecondary')}</Link>
          </Button>
        </div>
      </section>

      <section className='py-16'>
        <h3 className='mb-8 text-2xl font-semibold tracking-tight'>
          {t('highlightsTitle')}
        </h3>
        <div className='grid gap-4 sm:grid-cols-3'>
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardContent className='flex flex-col gap-3 p-6'>
                <item.icon className='h-6 w-6 text-primary' />
                <h4 className='font-semibold'>{item.title}</h4>
                <p className='text-sm text-muted-foreground'>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
