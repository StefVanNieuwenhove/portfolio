import { useLocale, useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const t = useTranslations('projects');
  const locale = useLocale() as 'en' | 'nl';

  return (
    <Card className='flex h-full flex-col'>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 space-y-4'>
        <p className='text-sm text-muted-foreground'>
          {project.description[locale] ?? project.description.en}
        </p>
        <div>
          <p className='mb-2 text-xs font-medium text-muted-foreground'>
            {t('techUsed')}
          </p>
          <div className='flex flex-wrap gap-1.5'>
            {project.tech.map((tech) => (
              <Badge key={tech} variant='outline'>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex gap-2'>
        {project.liveUrl && (
          <Button size='sm' variant='secondary'>
            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
              <ExternalLink />
              {t('viewProject')}
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button size='sm' variant='outline'>
            <a href={project.repoUrl} target='_blank' rel='noopener noreferrer'>
              <FaGithub />
              {t('viewCode')}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
