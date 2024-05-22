import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCharacters = (query, page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError('');
      try {
        const limit = 15;
        const response = await axios.get(
          `https://api.jikan.moe/v4/characters`,
          {
            params: {
              page,
              limit,
              q: query,
              order_by: 'favorites',
              sort: 'desc',
            },
          }
        );
        setCharacters(response.data.data);
        setTotalResults(response.data.pagination.items.total);
        setTotalPages(Math.ceil(response.data.pagination.items.total / limit));
      } catch (err) {
        setError('Total 0 matching anime characters found');
      }
      setLoading(false);
    };

    fetchCharacters();
  }, [query, page]);

  return { characters, loading, error, totalPages, totalResults };
};

export default useFetchCharacters;
