import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { privacyPolicy } from '@/utils/privacy';

const TermsAndConditions = () => {
  return (
    <div className="privacy-policy mt-[2rem]">
    <h2 className='font-medium text-4xl mb-3'>Privacy Policy</h2>
    <ReactMarkdown remarkPlugins={[remarkGfm]} className='leading-loose'>
        {privacyPolicy}
    </ReactMarkdown>
</div>
  )
}

export default TermsAndConditions