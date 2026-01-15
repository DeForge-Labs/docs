'use client';

import { type ImgHTMLAttributes } from 'react';
import '../styles/image-zoom.css';
import Zoom, { type UncontrolledProps } from 'react-medium-image-zoom';

export type ImageZoomProps = ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Image props when zoom in
   */
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>;

  /**
   * Props for `react-medium-image-zoom`
   */
  rmiz?: UncontrolledProps;
};

export function ImageZoom({
  zoomInProps,
  children,
  rmiz,
  ...props
}: ImageZoomProps) {
  // Extract data-dark-src from props
  const darkSrc = (props as any)['data-dark-src'];
  const lightSrc = props.src;
  
  // Remove data-dark-src from props to avoid passing it to img
  const { 'data-dark-src': _, ...imageProps } = props as any;
  
  // If no darkSrc provided, render normal image
  if (!darkSrc) {
    return (
      <Zoom
        zoomMargin={20}
        wrapElement="span"
        {...rmiz}
        zoomImg={{
          src: lightSrc,
          sizes: undefined,
          ...zoomInProps,
        }}
      >
        {children ?? (
          <img
            {...imageProps}
            loading="lazy"
          />
        )}
      </Zoom>
    );
  }
  
  // Render theme-aware images
  return (
    <span style={{ display: 'contents' }}>
      <Zoom
        zoomMargin={20}
        wrapElement="span"
        {...rmiz}
        zoomImg={{
          src: lightSrc,
          sizes: undefined,
          ...zoomInProps,
        }}
        classDialog="dark:hidden"
      >
        {children ?? (
          <img
            {...imageProps}
            loading="lazy"
            className={`dark:hidden ${imageProps.className || ''}`}
          />
        )}
      </Zoom>
      <Zoom
        zoomMargin={20}
        wrapElement="span"
        {...rmiz}
        zoomImg={{
          src: darkSrc,
          sizes: undefined,
          ...zoomInProps,
        }}
        classDialog="hidden dark:block"
      >
        {children ?? (
          <img
            {...imageProps}
            src={darkSrc}
            loading="lazy"
            className={`hidden dark:block ${imageProps.className || ''}`}
          />
        )}
      </Zoom>
    </span>
  );
}