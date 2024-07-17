import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PrivacyPolicy = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('../../utils/privacy.data.md')
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="privacy-policy">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
};

export default PrivacyPolicy;
