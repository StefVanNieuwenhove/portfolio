import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const LocalLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'layout' });
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return children;
};

export default LocalLayout;
