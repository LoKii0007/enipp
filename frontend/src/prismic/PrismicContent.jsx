import { useEffect, useState } from 'react';
import { usePrismicDocumentByUID } from '@prismicio/react';

function PrismicContent({ documentType, uid }) {
  const [document, { state }] = usePrismicDocumentByUID(documentType, uid);
  
  if (state === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (state === 'failed') {
    return <div>Error: Failed to load content</div>;
  }
  
  if (document) {
    console.log(document);
    return (
      <div>
        <h1>{document.data.title[0].text}</h1>
        <div dangerouslySetInnerHTML={{ __html: document.data.content.html }} />
      </div>
    );
  }
  
  return null;
}

export default PrismicContent;