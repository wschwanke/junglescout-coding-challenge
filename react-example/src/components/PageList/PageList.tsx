/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { settings } from '../../settings';

const fetchPages = async () => {
  const wordpressResponse = await fetch(settings.wordpressUri.concat('/wp/v2/pages'));

  if (wordpressResponse.ok) {
    return wordpressResponse.json();
  }

  throw wordpressResponse.json();
};

const PageList: React.FunctionComponent = ({}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const doFetchPages = async () => {
      try {
        const pages = await fetchPages();
        console.log(pages);
      } catch (error) {
        console.error(error);
      }
    };

    doFetchPages();
  }, [])

  return (
    <div className="PageList">

    </div>
  );
};

export { PageList };
