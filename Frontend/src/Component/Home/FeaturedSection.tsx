import ShirtIllustration from './ShirtIllustration';

type Variant = 'crew' | 'vneck' | 'polo' | 'long' | 'striped' | 'graphic';

type Recent = {
    id: string;
    name: string;
    price: string;
    color: string;
    accent: string;
    variant: Variant;
    bg: 'beige' | 'mint' | 'white';
};

const recent: Recent[] = [
    { id: 'r1', name: 'Harbour Crew Tee', price: '€ 39', color: '#0F3D2E', accent: '#F5F5DC', variant: 'crew', bg: 'beige' },
    { id: 'r2', name: 'Atlas Striped Tee', price: '€ 45', color: '#FFFFFF', accent: '#0F3D2E', variant: 'striped', bg: 'mint' },
    { id: 'r3', name: 'Field Polo', price: '€ 59', color: '#66CDAA', accent: '#0F3D2E', variant: 'polo', bg: 'white' },
    { id: 'r4', name: 'Mono Long Sleeve', price: '€ 49', color: '#F5F5DC', accent: '#0F3D2E', variant: 'long', bg: 'mint' },
];

const FeaturedSection = () => {
    return (
        <section className="Featured-section" aria-label="Recent and sale">
            <div className="Featured-grid">
                {/* Recent arrivals */}
                <article className="Featured-recent">
                    <header className="Featured-header">
                        <div>
                            <p className="Featured-eyebrow">Just dropped</p>
                            <h2 className="Featured-title">Recent arrivals</h2>
                        </div>
                        <a href="#catalogue" className="Featured-link">
                            View all
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </header>

                    <ul className="Recent-grid">
                        {recent.map((item) => (
                            <li key={item.id} className={`Recent-card Recent-card--${item.bg}`}>
                                <div className="Recent-card-badge">NEW</div>
                                <div className="Recent-card-media">
                                    <ShirtIllustration
                                        color={item.color}
                                        accent={item.accent}
                                        variant={item.variant}
                                        label={item.name}
                                    />
                                </div>
                                <div className="Recent-card-meta">
                                    <p className="Recent-card-name">{item.name}</p>
                                    <p className="Recent-card-price">{item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* Sale */}
                <article className="Featured-sale">
                    <div className="Featured-sale-tag">Limited time</div>
                    <p className="Featured-sale-eyebrow">Summer sale</p>
                    <h2 className="Featured-sale-title text-balance">
                        Up to <span className="Featured-sale-big">50%</span> off
                        <br />
                        on selected tees.
                    </h2>
                    <p className="Featured-sale-sub text-pretty">
                        Stock up on everyday essentials before they&apos;re gone. Ends Sunday.
                    </p>

                    <div className="Featured-sale-visual" aria-hidden="true">
                        <div className="Featured-sale-shirt Featured-sale-shirt--back">
                            <ShirtIllustration color="#F5F5DC" accent="#0F3D2E" variant="crew" />
                        </div>
                        <div className="Featured-sale-shirt Featured-sale-shirt--front">
                            <ShirtIllustration color="#66CDAA" accent="#0F3D2E" variant="graphic" />
                        </div>
                        <div className="Featured-sale-discount">
                            <span className="Featured-sale-discount-num">-50%</span>
                        </div>
                    </div>

                    <div className="Featured-sale-actions">
                        <a href="#catalogue" className="Featured-sale-cta">Shop sale</a>
                        <span className="Featured-sale-count">
                            <span className="Featured-sale-dot" aria-hidden="true" />
                            42 styles on sale
                        </span>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default FeaturedSection;
