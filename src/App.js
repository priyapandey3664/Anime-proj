import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultCount from './components/ResultCount';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import useFetchCharacters from './hooks/useFetchCharacters';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { characters, loading, error, totalPages, totalResults } = useFetchCharacters(query, page);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); // Reset to the first page for new search
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='App'>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {totalResults === 0 ? (
            <>
              <p>Total 0 matching anime characters found</p>
              <div className="horizontal-separator-dark"></div>
              <p>No results found!</p>
            </>
          ) : (
            <>
              <ResultCount totalResults={totalResults} />
              <div className="horizontal-separator"></div>
              <CharacterList characters={characters} />
              <Pagination page={page} totalPages={totalPages} handleBack={handleBack} handleNext={handleNext} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
