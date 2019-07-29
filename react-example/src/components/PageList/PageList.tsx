/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { settings } from '../../settings';

/**
 * Fetches the page list from Wordpress and turns the response into JSON
 * @param {string} route The route param is only here cause I want to break it for the error handling example
 * @returns {WordpressPageList}
 */
const fetchPages = async (route: string) => {
  const wordpressResponse = await fetch(settings.wordpressUri.concat(route));

  const json = await wordpressResponse.json();

  if (wordpressResponse.ok) {
    return json;
  }
  throw json;
};

interface Props {
  route: string;
}

const PageList: React.FC<Props> = ({ route }) => {
  const [pages, setPages] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetches the data from Wordpress inside of our component
  useEffect(() => {
    const doFetchPages = async () => {
      try {
        const fetchedPages = await fetchPages(route);
        
        setPages(fetchedPages);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    doFetchPages();
  }, [route])

  /**
   * Renders the name of the pages that were returned by the Wordpress API
   * @returns {JSX} an array of list elements
   */
  const renderPages = () => {
    return map(pages as any, (page, index) => {
      return (
        <li key={`${page}--${index}`}>
          <strong>{page.title.rendered}</strong>
        </li>
      )
    });
  }

  const renderError = () => {
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          {error.data.status} - There was an error.
        </div>
      );
    }

    return null;
  }

  // If we are still loading the response from wordpress then display the loading text
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  // We are no longer loading so display the full component
  return (
    <div className="PageList col-12">
      {renderError()}
      <ul>
        {renderPages()}
      </ul>
    </div>
  );
};

export { PageList };
