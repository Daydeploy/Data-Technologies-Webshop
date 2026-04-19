import { useState } from 'react';

const categories = ['All', 'Tees', 'Polos', 'Long Sleeve', 'Oversized', 'Graphic'];

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [active, setActive] = useState('All');

    return (
        <section className="Search-section" aria-label="Search shirts">
            <div className="Search-heading">
                <p className="Search-eyebrow">Spring / Summer &apos;26</p>
                <h1 className="Search-title text-balance">
                    Shirts built for <span className="Search-title-accent">every day.</span>
                </h1>
                <p className="Search-subtitle text-pretty">
                    Premium tees, polos and long sleeves — designed in-house, shipped worldwide.
                </p>
            </div>

            <form
                className="Search-bar"
                role="search"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <svg
                    className="Search-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                    type="search"
                    className="Search-input"
                    placeholder="Search for a shirt, colour or collection…"
                    aria-label="Search shirts"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="Search-submit">
                    Search
                </button>
            </form>

            <div className="Search-chips" role="tablist" aria-label="Quick categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        role="tab"
                        aria-selected={active === cat}
                        className={`Search-chip ${active === cat ? 'is-active' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default SearchBar;
