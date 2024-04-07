
import React from 'react';
import "./searchbar.style.scss";

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); 
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}
