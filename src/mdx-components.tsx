import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from '@/components/image-zoom';
import { DataTable, DataRow, DataHeader, DataName, DataDesc, DescLine, DataType } from './components/data-table';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom { ...(props as any) } />,
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
