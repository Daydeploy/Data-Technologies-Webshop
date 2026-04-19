import { useState, type FormEvent } from 'react';
import '../../Styles/Footer.css';

const shopLinks = ['Tees', 'Polos', 'Long Sleeve', 'Oversized', 'Graphic', 'Sale'];
const companyLinks = ['About', 'Sustainability', 'Careers', 'Press'];
const supportLinks = ['Contact', 'Shipping', 'Returns', 'Size guide', 'FAQ'];

const Footer = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <footer className="Footer" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Thred footer
            </h2>

            <div className="Footer-top">
                <div className="Footer-newsletter">
                    <p className="Footer-eyebrow">Join the newsletter</p>
                    <h3 className="Footer-headline text-balance">
                        Get 10% off your first shirt.
                    </h3>
                    <p className="Footer-subtitle text-pretty">
                        New drops, restocks and seasonal sales — sent once a week. No spam.
                    </p>

                    <form className="Footer-form" onSubmit={handleSubmit}>
                        <label htmlFor="footer-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="footer-email"
                            type="email"
                            required
                            placeholder="you@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="Footer-input"
                        />
                        <button type="submit" className="Footer-submit">
                            {submitted ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </form>
                </div>

                <nav className="Footer-columns" aria-label="Footer navigation">
                    <div className="Footer-col">
                        <h4 className="Footer-col-title">Shop</h4>
                        <ul>
                            {shopLinks.map((l) => (
                                <li key={l}>
                                    <a href="#">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="Footer-col">
                        <h4 className="Footer-col-title">Support</h4>
                        <ul>
                            {supportLinks.map((l) => (
                                <li key={l}>
                                    <a href="#">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="Footer-col">
                        <h4 className="Footer-col-title">Company</h4>
                        <ul>
                            {companyLinks.map((l) => (
                                <li key={l}>
                                    <a href="#">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="Footer-bottom">
                <div className="Footer-brand">
                    <span className="Footer-brand-mark" aria-hidden="true">T</span>
                    <span className="Footer-brand-text">THRED.</span>
                </div>

                <p className="Footer-copy">
                    &copy; {new Date().getFullYear()} Thred Shirt Co. All rights reserved.
                </p>

                <div className="Footer-socials" aria-label="Social links">
                    <a href="#" aria-label="Instagram" className="Footer-social">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="Footer-social">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="TikTok" className="Footer-social">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
