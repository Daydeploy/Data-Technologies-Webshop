type Variant = 'crew' | 'vneck' | 'polo' | 'long' | 'striped' | 'graphic';

type Props = {
    color: string;
    accent?: string;
    variant?: Variant;
    label?: string;
};

/**
 * Simple SVG t-shirt illustration. Uses only palette colors
 * passed in as props so the catalogue stays on-brand.
 */
const ShirtIllustration = ({ color, accent = '#0F3D2E', variant = 'crew', label }: Props) => {
    return (
        <svg
            className="Shirt-svg"
            viewBox="0 0 200 220"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={label ?? 'Shirt illustration'}
        >
            {/* Sleeves */}
            <path
                d="M10 50 L60 20 L70 55 L40 75 Z"
                fill={color}
                stroke={accent}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M190 50 L140 20 L130 55 L160 75 Z"
                fill={color}
                stroke={accent}
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* Body */}
            <path
                d={
                    variant === 'long'
                        ? 'M60 20 L80 30 Q100 42 120 30 L140 20 L150 70 L150 210 L50 210 L50 70 Z'
                        : 'M60 20 L80 30 Q100 42 120 30 L140 20 L155 70 L145 80 L145 200 L55 200 L55 80 L45 70 Z'
                }
                fill={color}
                stroke={accent}
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* Neckline */}
            {variant === 'vneck' ? (
                <path
                    d="M80 30 L100 60 L120 30"
                    fill="none"
                    stroke={accent}
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
            ) : variant === 'polo' ? (
                <>
                    <path
                        d="M80 30 L100 50 L120 30"
                        fill="none"
                        stroke={accent}
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M100 50 L100 90"
                        fill="none"
                        stroke={accent}
                        strokeWidth="2"
                    />
                    <circle cx="100" cy="65" r="2" fill={accent} />
                    <circle cx="100" cy="80" r="2" fill={accent} />
                </>
            ) : (
                <path
                    d="M80 30 Q100 45 120 30"
                    fill="none"
                    stroke={accent}
                    strokeWidth="2.5"
                />
            )}

            {/* Variant details */}
            {variant === 'striped' && (
                <>
                    <rect x="55" y="110" width="90" height="8" fill={accent} opacity="0.9" />
                    <rect x="55" y="130" width="90" height="8" fill={accent} opacity="0.9" />
                    <rect x="55" y="150" width="90" height="8" fill={accent} opacity="0.9" />
                </>
            )}

            {variant === 'graphic' && (
                <g>
                    <circle cx="100" cy="130" r="28" fill="none" stroke={accent} strokeWidth="3" />
                    <path
                        d="M88 130 L98 140 L114 120"
                        fill="none"
                        stroke={accent}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            )}

            {/* Bottom hem */}
            <line x1="55" y1={variant === 'long' ? 200 : 190} x2="145" y2={variant === 'long' ? 200 : 190} stroke={accent} strokeWidth="1.5" opacity="0.35" />
        </svg>
    );
};

export default ShirtIllustration;
