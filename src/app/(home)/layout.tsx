import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { 
  BookMinus,
  Boxes,
} from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <BookMinus />,
          text: 'Guides',
          url: '/docs',
        },
        {
          icon: <Boxes />,
          text: 'Nodes',
          url: '/docs/nodes',
        }
      ]}
    >
      {children}
    </HomeLayout>
  );
}
