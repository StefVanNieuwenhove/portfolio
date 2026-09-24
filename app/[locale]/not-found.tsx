import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className='container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center'>
      <h1 className='text-4xl font-bold'>404</h1>
      <p className='text-muted-foreground'>This page could not be found.</p>
      <Button>
        <Link href='/'>Back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
