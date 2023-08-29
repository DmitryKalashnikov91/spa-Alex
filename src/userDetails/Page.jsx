'use client';
import Script from 'next/script';

export const Page = () => <Script src='/pixel.js' onLoad={() => console.log('script loaded')} />;
