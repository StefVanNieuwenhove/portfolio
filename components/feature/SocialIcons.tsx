import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { social } from '@/data/social';
import { cn } from '@/lib/utils';

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button variant='outline' size='icon'>
        <a
          href={social.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
      </Button>
      <Button variant='outline' size='icon'>
        <a
          href={social.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'>
          <FaGithub />
        </a>
      </Button>
      <Button variant='outline' size='icon'>
        <a href={`mailto:${social.email}`} aria-label='Email'>
          <Mail />
        </a>
      </Button>
    </div>
  );
};

export default SocialIcons;
