import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import ChatbotWidget from '@/components/chatbot-widget';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
      <ChatbotWidget 
        workflowId="32aa0a6a-bd5b-4c31-b829-f6812446d581"
        theme="deforge-dark"
        position="bottom-right"
      />
    </DocsLayout>
  );
}
