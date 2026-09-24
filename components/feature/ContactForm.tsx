'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [status, setStatus] = React.useState<Status>('idle');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='name'>{t('name')}</Label>
        <Input
          id='name'
          name='name'
          placeholder={t('namePlaceholder')}
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email'>{t('email')}</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder={t('emailPlaceholder')}
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message'>{t('message')}</Label>
        <Textarea
          id='message'
          name='message'
          placeholder={t('messagePlaceholder')}
          required
        />
      </div>

      <Button
        type='submit'
        disabled={status === 'sending'}
        className='w-full sm:w-auto'>
        {status === 'sending' ? (
          <>
            <Loader2 className='animate-spin' />
            {t('sending')}
          </>
        ) : (
          <>
            <Send />
            {t('send')}
          </>
        )}
      </Button>

      {status === 'success' && (
        <p className='text-sm text-green-600 dark:text-green-500'>
          {t('success')}
        </p>
      )}
      {status === 'error' && (
        <p className='text-sm text-destructive'>{t('error')}</p>
      )}
    </form>
  );
};

export default ContactForm;
