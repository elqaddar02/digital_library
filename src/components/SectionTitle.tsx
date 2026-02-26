interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  variant?: 'gradient' | 'white' | 'dark';
  accentColor?: 'gold' | 'emerald' | 'purple' | 'blue';
}

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
  variant = 'gradient',
  accentColor = 'gold',
}: SectionTitleProps) {
  const accentColors = {
    gold: 'from-gold-600 to-amber-600',
    emerald: 'from-emerald-600 to-teal-600',
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-indigo-600',
  };

  const textColors = {
    gradient: 'bg-gradient-to-r bg-clip-text text-transparent',
    white: 'text-white',
    dark: 'text-gray-900',
  };

  const alignClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} ${centered ? 'relative' : ''}`}>
      {/* Decorative blur element behind text (only for centered) */}
      {centered && variant === 'gradient' && (
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 blur-3xl"></div>
        </div>
      )}

      {/* Label/Tag */}
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-3 inline-block ${
            variant === 'white'
              ? 'text-gold-300'
              : `bg-gradient-to-r ${accentColors[accentColor]} bg-clip-text text-transparent`
          }`}
        >
          {label}
        </p>
      )}

      {/* Main Title */}
      <h2
        className={`font-serif text-4xl md:text-5xl font-bold mb-4 relative ${
          variant === 'gradient'
            ? `${textColors.gradient} ${accentColors[accentColor]}`
            : textColors[variant]
        }`}
      >
        {title}
      </h2>

      {/* Decorative underline */}
      <div
        className={`h-1 w-24 mx-auto ${
          centered ? 'mx-auto' : 'ml-0'
        } bg-gradient-to-r ${accentColors[accentColor]} rounded-full my-5`}
      ></div>

      {/* Description */}
      {description && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${
            variant === 'white'
              ? 'text-gray-200'
              : variant === 'dark'
                ? 'text-gray-600'
                : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
