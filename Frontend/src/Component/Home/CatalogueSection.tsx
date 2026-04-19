import { useState } from 'react';
import ShirtIllustration from './ShirtIllustration';

type Variant = 'crew' | 'vneck' | 'polo' | 'long' | 'striped' | 'graphic';

type Product = {
    id: string;
    name: string;
    category: string;
    price: string;
    oldPrice?: string;
    color: string;
    accent: string;
    variant: Variant;
    bg: 'beige' | 'mint' | 'white' | 'green';
    tag?: 'New' | 'Sale' | 'Bestseller';
};

const products: Product[] = [
    { id: 'p1', name: 'Harbour Crew Tee', category: 'Tees', price: '€ 39', color: '#0F3D2E', accent: '#F5F5DC', variant: 'crew', bg: 'beige', tag: 'Bestseller' },
    { id: 'p2', name: 'Atlas Striped Tee', category: 'Tees', price: '€ 29', oldPrice: '€ 45', color: '#FFFFFF', accent: '#0F3D2E', variant: 'striped', bg: 'mint', tag: 'Sale' },
    { id: 'p3', name: 'Field Polo', category: 'Polos', price: '€ 59', color: '#66CDAA', accent: '#0F3D2E', variant: 'polo', bg: 'white', tag: 'New' },
    { id: 'p4', name: 'Mono Long Sleeve', category: 'Long Sleeve', price: '€ 49', color: '#F5F5DC', accent: '#0F3D2E', variant: 'long', bg: 'green' },
    { id: 'p5', name: 'Coast V-Neck', category: 'Tees', price: '€ 35', color: '#0F3D2E', accent: '#66CDAA', variant: 'vneck', bg: 'white' },
    { id: 'p6', name: 'Meadow Graphic', category: 'Graphic', price: '€ 42', oldPrice: '€ 55', color: '#F5F5DC', accent: '#0F3D2E', variant: 'graphic', bg: 'mint', tag: 'Sale' },
    { id: 'p7', name: 'Pine Overshirt', category: 'Long Sleeve', price: '€ 69', color: '#0F3D2E', accent: '#F5F5DC', variant: 'long', bg: 'beige', tag: 'New' },
    { id: 'p8', name: 'Reef Polo', category: 'Polos', price: '€ 55', color: '#FFFFFF', accent: '#0F3D2E', variant: 'polo', bg: 'green' },
];

const filters = ['All', 'Tees', 'Polos', 'Long Sleeve', 'Graphic'];

const CatalogueSection = () => {
    const [filter, setFilter] = useState('All');
    const visible = filter === 'All' ? products : products.filter((p) => p.category === filter);

    return (
        <section className="Catalogue-section" id="catalogue" aria-label="Product catalogue">
            <header className="Catalogue-header">
                <div>
                    <p className="Catalogue-eyebrow">Our catalogue</p>
                    <h2 className="Catalogue-title text-balance">Everything in one place.</h2>
                </div>

                <div className="Catalogue-filters" role="tablist" aria-label="Filter by category">
                    {filters.map((f) => (
                        <button
                            key={f}
                            role="tab"
                            aria-selected={filter === f}
                            className={`Catalogue-filter ${filter === f ? 'is-active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </header>

            <ul className="Catalogue-grid">
                {visible.map((product) => (
                    <li key={product.id} className="Catalogue-card">
                        <div className={`Catalogue-card-media Catalogue-card-media--${product.bg}`}>
                            {product.tag && (
                                <span className={`Catalogue-tag Catalogue-tag--${product.tag.toLowerCase()}`}>
                                    {product.tag}
                                </span>
                            )}
                            <button className="Catalogue-card-wish" aria-label={`Save ${product.name} to wishlist`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                            <ShirtIllustration
                                color={product.color}
                                accent={product.accent}
                                variant={product.variant}
                                label={product.name}
                            />
                        </div>
                        <div className="Catalogue-card-body">
                            <div className="Catalogue-card-top">
                                <p className="Catalogue-card-name">{product.name}</p>
                                <p className="Catalogue-card-cat">{product.category}</p>
                            </div>
                            <div className="Catalogue-card-price">
                                <span className="Catalogue-card-price-now">{product.price}</span>
                                {product.oldPrice && (
                                    <span className="Catalogue-card-price-old">{product.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="Catalogue-footer">
                <button className="Catalogue-load">Load more</button>
            </div>
        </section>
    );
};

export default CatalogueSection;
