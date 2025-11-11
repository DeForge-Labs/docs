import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from '@/components/image-zoom';
import { DataTable, DataRow, DataHeader, DataName, DataDesc, DescLine, DataType } from './components/data-table';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    img: (props) => <ImageZoom { ...(props as any) } />,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ...components,
    DataTable,
    DataRow,
    DataHeader,
    DataName,
    DataDesc,
    DescLine,
    DataType,
  };
}
