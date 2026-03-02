import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import ChatbotWidget from '@/components/chatbot-widget';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
      <ChatbotWidget 
        workflowId="fb98d8f8-4999-4363-be76-cb714683308d"
        theme="dark"
        position="bottom-right"
      />
    </DocsLayout>
  );
}
