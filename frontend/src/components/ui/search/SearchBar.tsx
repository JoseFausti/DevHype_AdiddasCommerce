import { Search } from 'lucide-react';
import Styles from './SearchBar.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/products?name=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <form className={Styles.SearchBar__form__container} onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Buscar productos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={Styles.submmit_button}><Search /></button>
      </form>
    </>
  );
};

export default SearchBar;