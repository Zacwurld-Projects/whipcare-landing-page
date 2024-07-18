import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { termsAndConditions } from '@/utils/termsandconditions';
import { terms } from '@/utils/terms';

const TermsAndConditions = () => {
    return (
        <div className="privacy-policy mt-[2rem] px-7 xl:px-[6rem] 2xl:px-5">
            <h2 className='font-medium text-4xl mb-3'>TERMS AND CONDITIONS</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]} className='leading-loose'>
                {terms}
            </ReactMarkdown>
        </div>
    )
}

export default TermsAndConditions