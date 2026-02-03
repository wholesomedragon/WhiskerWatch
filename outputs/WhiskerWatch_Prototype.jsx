import React, { useState } from 'react';

// WhiskerWatch - Brooklyn Cat Sitting Marketplace Prototype
// Color Palette: #114945, #2C2C54, #ACC3A6, #F5D6BA, #F49D6E

const colors = {
  teal: '#114945',
  navy: '#2C2C54',
  sage: '#ACC3A6',
  cream: '#F5D6BA',
  coral: '#F49D6E',
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
};

// Icons as simple SVG components
const CatIcon = ({ size = 24, color = colors.teal }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5 6 3 8 3 11C3 14 5 17 7 18V21C7 21.5 7.5 22 8 22H16C16.5 22 17 21.5 17 21V18C19 17 21 14 21 11C21 8 19 6 17 5.5C16.5 3.5 14.5 2 12 2ZM9 12C8.5 12 8 11.5 8 11C8 10.5 8.5 10 9 10C9.5 10 10 10.5 10 11C10 11.5 9.5 12 9 12ZM15 12C14.5 12 14 11.5 14 11C14 10.5 14.5 10 15 10C15.5 10 16 10.5 16 11C16 11.5 15.5 12 15 12ZM12 16C10.5 16 9.5 15 9.5 15H14.5C14.5 15 13.5 16 12 16Z"/>
  </svg>
);

const CheckIcon = ({ size = 20, color = colors.teal }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = ({ size = 16, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? colors.coral : 'none'} stroke={colors.coral} strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const BackIcon = ({ color = colors.navy }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const SearchIcon = ({ color = colors.navy }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
);

const HomeIcon = ({ color = colors.teal }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const CalendarIcon = ({ color = colors.navy }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MessageIcon = ({ color = colors.navy }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const UserIcon = ({ color = colors.navy }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const VetBadge = () => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: colors.sage,
    color: colors.teal,
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
  }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.teal}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
    Vet Tech Verified
  </div>
);

// Phone Frame Wrapper
const PhoneFrame = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#E8E8E8',
    padding: '20px',
  }}>
    <div style={{
      width: '390px',
      height: '844px',
      backgroundColor: colors.white,
      borderRadius: '40px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
      position: 'relative',
      border: '8px solid #1a1a1a',
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150px',
        height: '30px',
        backgroundColor: '#1a1a1a',
        borderRadius: '0 0 20px 20px',
        zIndex: 100,
      }}/>
      <div style={{
        height: '100%',
        overflow: 'auto',
        paddingTop: '0',
      }}>
        {children}
      </div>
    </div>
  </div>
);

// Button Component
const Button = ({ children, onClick, variant = 'primary', fullWidth = false, style = {} }) => {
  const baseStyle = {
    padding: '16px 24px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform 0.1s, opacity 0.1s',
  };

  const variants = {
    primary: { backgroundColor: colors.coral, color: colors.white },
    secondary: { backgroundColor: colors.cream, color: colors.navy },
    outline: { backgroundColor: 'transparent', border: `2px solid ${colors.teal}`, color: colors.teal },
    teal: { backgroundColor: colors.teal, color: colors.white },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
      onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ label, type = 'text', placeholder, value, onChange, icon }) => (
  <div style={{ marginBottom: '16px' }}>
    {label && <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>{label}</label>}
    <div style={{ position: 'relative' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '14px 16px',
          paddingLeft: icon ? '44px' : '16px',
          borderRadius: '12px',
          border: `1.5px solid ${colors.sage}`,
          fontSize: '16px',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
      {icon && <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>{icon}</div>}
    </div>
  </div>
);

// Landing Page
const LandingPage = ({ onGetStarted, onSitterSignup }) => (
  <div style={{ minHeight: '100%', backgroundColor: colors.cream }}>
    {/* Hero Section */}
    <div style={{
      background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`,
      padding: '60px 24px 40px',
      textAlign: 'center',
      color: colors.white,
    }}>
      <div style={{ marginBottom: '16px' }}>
        <CatIcon size={48} color={colors.cream} />
      </div>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>
        WhiskerWatch
      </h1>
      <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '24px' }}>
        Brooklyn's Trusted Cat Sitters
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.5', opacity: 0.95 }}>
        Connect with vetted, cat-loving sitters in your neighborhood
      </p>
    </div>

    {/* Value Props */}
    <div style={{ padding: '32px 24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: colors.sage, borderRadius: '10px', padding: '10px', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.teal}>
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '4px' }}>Vetted & Verified</h3>
            <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7, lineHeight: '1.4' }}>All sitters pass background checks. Vet techs get special verification.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: colors.sage, borderRadius: '10px', padding: '10px', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.teal}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '4px' }}>Brooklyn-Focused</h3>
            <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7, lineHeight: '1.4' }}>Local sitters who know your neighborhood, from Williamsburg to Park Slope.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ backgroundColor: colors.sage, borderRadius: '10px', padding: '10px', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.teal}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '4px' }}>Cat Specialists</h3>
            <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7, lineHeight: '1.4' }}>Sitters who truly understand cats, including those with special medical needs.</p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ marginTop: '32px' }}>
        <Button fullWidth onClick={onGetStarted} style={{ marginBottom: '12px' }}>
          Find a Cat Sitter
        </Button>
        <Button fullWidth variant="outline" onClick={onSitterSignup}>
          Become a Sitter
        </Button>
      </div>

      {/* Social Proof */}
      <div style={{
        marginTop: '32px',
        padding: '20px',
        backgroundColor: colors.white,
        borderRadius: '16px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
          {[1,2,3,4,5].map(i => <StarIcon key={i} size={18} />)}
        </div>
        <p style={{ fontSize: '14px', color: colors.navy, fontStyle: 'italic', marginBottom: '8px' }}>
          "Finally, a sitter who actually understands my anxious cat!"
        </p>
        <p style={{ fontSize: '12px', color: colors.navy, opacity: 0.6 }}>
          — Sarah K., Park Slope
        </p>
      </div>
    </div>
  </div>
);

// Owner Signup
const OwnerSignup = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', neighborhood: '', password: '' });

  const neighborhoods = ['Williamsburg', 'Greenpoint', 'Bushwick', 'Park Slope', 'Carroll Gardens', 'DUMBO', 'Brooklyn Heights', 'Fort Greene', 'Clinton Hill', 'Crown Heights', 'Bed-Stuy', 'Flatbush'];

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
      <div style={{ padding: '50px 24px 24px', borderBottom: `1px solid ${colors.cream}` }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px' }}>
          <BackIcon />
        </button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>Create Your Account</h1>
        <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7 }}>Find the perfect sitter for your cat</p>
      </div>

      <div style={{ padding: '24px' }}>
        <Input label="Full Name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <Input label="Email" type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <Input label="Phone Number" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Brooklyn Neighborhood</label>
          <select
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${colors.sage}`,
              fontSize: '16px',
              backgroundColor: colors.white,
            }}
            value={formData.neighborhood}
            onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
          >
            <option value="">Select neighborhood</option>
            {neighborhoods.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <Input label="Password" type="password" placeholder="Create a password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />

        <Button fullWidth onClick={onContinue} style={{ marginTop: '16px' }}>
          Continue
        </Button>

        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: colors.navy, opacity: 0.6 }}>
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

// Add Cat Profile
const AddCatProfile = ({ onBack, onContinue }) => {
  const [catData, setCatData] = useState({ name: '', age: '', breed: '', temperament: '', medicalNeeds: '', feedingSchedule: '' });

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
      <div style={{ padding: '50px 24px 24px', borderBottom: `1px solid ${colors.cream}` }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px' }}>
          <BackIcon />
        </button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>Add Your Cat</h1>
        <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7 }}>Help sitters get to know your furry friend</p>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Cat Photo Upload */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: colors.cream,
          margin: '0 auto 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px dashed ${colors.sage}`,
          cursor: 'pointer',
        }}>
          <div style={{ textAlign: 'center' }}>
            <CatIcon size={32} color={colors.sage} />
            <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Add photo</p>
          </div>
        </div>

        <Input label="Cat's Name" placeholder="What's their name?" value={catData.name} onChange={(e) => setCatData({...catData, name: e.target.value})} />

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <Input label="Age" placeholder="e.g., 3 years" value={catData.age} onChange={(e) => setCatData({...catData, age: e.target.value})} />
          </div>
          <div style={{ flex: 1 }}>
            <Input label="Breed" placeholder="e.g., Tabby" value={catData.breed} onChange={(e) => setCatData({...catData, breed: e.target.value})} />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Temperament</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Friendly', 'Shy', 'Playful', 'Independent', 'Anxious', 'Cuddly'].map(temp => (
              <button
                key={temp}
                onClick={() => setCatData({...catData, temperament: temp})}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: catData.temperament === temp ? colors.teal : colors.cream,
                  color: catData.temperament === temp ? colors.white : colors.navy,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                {temp}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Medical Needs</label>
          <textarea
            placeholder="Any medications, allergies, or special care requirements?"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${colors.sage}`,
              fontSize: '16px',
              minHeight: '80px',
              resize: 'none',
              boxSizing: 'border-box',
            }}
            value={catData.medicalNeeds}
            onChange={(e) => setCatData({...catData, medicalNeeds: e.target.value})}
          />
        </div>

        <Button fullWidth onClick={onContinue} style={{ marginTop: '8px' }}>
          Find Sitters
        </Button>
      </div>
    </div>
  );
};

// Sitter Search
const SitterSearch = ({ onBack, onSelectSitter }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All Brooklyn');
  const [showVetTechOnly, setShowVetTechOnly] = useState(false);

  const sitters = [
    { id: 1, name: 'Maria Santos', photo: '👩🏽', rating: 4.9, reviews: 47, rate: 35, isVetTech: true, neighborhood: 'Park Slope', bio: 'Licensed vet tech with 8 years of feline care experience. Specialized in senior cats and medical administration.' },
    { id: 2, name: 'James Chen', photo: '👨🏻', rating: 4.8, reviews: 32, rate: 28, isVetTech: false, neighborhood: 'Williamsburg', bio: 'Cat dad of 3! Experienced with shy and anxious cats. Flexible scheduling.' },
    { id: 3, name: 'Aisha Johnson', photo: '👩🏿', rating: 5.0, reviews: 23, rate: 40, isVetTech: true, neighborhood: 'Fort Greene', bio: 'Certified vet tech specializing in diabetic cats and medication management.' },
    { id: 4, name: 'Emma Wilson', photo: '👩🏼', rating: 4.7, reviews: 56, rate: 25, isVetTech: false, neighborhood: 'Bushwick', bio: 'Passionate cat lover with years of pet-sitting experience.' },
  ];

  const filteredSitters = showVetTechOnly ? sitters.filter(s => s.isVetTech) : sitters;

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.lightGray }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`,
        padding: '50px 24px 24px',
        color: colors.white,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <BackIcon color={colors.white} />
          </button>
          <h1 style={{ fontSize: '18px', fontWeight: '600' }}>Find a Sitter</h1>
          <div style={{ width: '24px' }} />
        </div>

        {/* Search Bar */}
        <div style={{
          backgroundColor: colors.white,
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <SearchIcon />
          <select
            style={{
              flex: 1,
              border: 'none',
              fontSize: '15px',
              color: colors.navy,
              backgroundColor: 'transparent',
            }}
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
          >
            <option>All Brooklyn</option>
            <option>Williamsburg</option>
            <option>Park Slope</option>
            <option>Fort Greene</option>
            <option>Bushwick</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div style={{ padding: '16px 24px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        <button
          onClick={() => setShowVetTechOnly(!showVetTechOnly)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: showVetTechOnly ? colors.teal : colors.white,
            color: showVetTechOnly ? colors.white : colors.navy,
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {showVetTechOnly && <CheckIcon size={14} color={colors.white} />}
          Vet Tech Only
        </button>
        <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', backgroundColor: colors.white, color: colors.navy, fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }}>
          Special Needs Exp.
        </button>
        <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', backgroundColor: colors.white, color: colors.navy, fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }}>
          Price: Low-High
        </button>
      </div>

      {/* Results */}
      <div style={{ padding: '0 24px 100px' }}>
        <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.6, marginBottom: '16px' }}>{filteredSitters.length} sitters available</p>

        {filteredSitters.map(sitter => (
          <div
            key={sitter.id}
            onClick={() => onSelectSitter(sitter)}
            style={{
              backgroundColor: colors.white,
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '12px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ display: 'flex', gap: '14px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '12px',
                backgroundColor: colors.cream,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
              }}>
                {sitter.photo}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>{sitter.name}</h3>
                  {sitter.isVetTech && <VetBadge />}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <StarIcon size={14} />
                  <span style={{ fontSize: '13px', fontWeight: '600', color: colors.navy }}>{sitter.rating}</span>
                  <span style={{ fontSize: '13px', color: colors.navy, opacity: 0.6 }}>({sitter.reviews} reviews)</span>
                </div>
                <p style={{ fontSize: '12px', color: colors.navy, opacity: 0.6 }}>{sitter.neighborhood}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '18px', fontWeight: '700', color: colors.teal }}>${sitter.rate}</p>
                <p style={{ fontSize: '11px', color: colors.navy, opacity: 0.6 }}>/visit</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '390px',
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.cream}`,
        padding: '12px 24px 24px',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <div style={{ textAlign: 'center' }}>
          <HomeIcon color={colors.coral} />
          <p style={{ fontSize: '10px', color: colors.coral, marginTop: '4px' }}>Search</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CalendarIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Bookings</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <MessageIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Messages</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <UserIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Profile</p>
        </div>
      </div>
    </div>
  );
};

// Sitter Profile
const SitterProfile = ({ sitter, onBack, onBook }) => (
  <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
    {/* Header with Photo */}
    <div style={{
      background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`,
      padding: '50px 24px 80px',
      position: 'relative',
    }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <BackIcon color={colors.white} />
      </button>

      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: colors.cream,
        border: `4px solid ${colors.white}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
      }}>
        {sitter.photo}
      </div>
    </div>

    {/* Profile Info */}
    <div style={{ padding: '60px 24px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>{sitter.name}</h1>
      {sitter.isVetTech && <div style={{ marginBottom: '12px' }}><VetBadge /></div>}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
        <StarIcon size={18} />
        <span style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>{sitter.rating}</span>
        <span style={{ fontSize: '14px', color: colors.navy, opacity: 0.6 }}>({sitter.reviews} reviews)</span>
      </div>
      <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.6, marginBottom: '20px' }}>{sitter.neighborhood}</p>

      <p style={{ fontSize: '15px', color: colors.navy, lineHeight: '1.6', textAlign: 'left', marginBottom: '24px' }}>
        {sitter.bio}
      </p>

      {/* Services */}
      <div style={{ backgroundColor: colors.cream, borderRadius: '16px', padding: '20px', marginBottom: '24px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.navy, marginBottom: '16px' }}>Services & Rates</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '14px', color: colors.navy }}>Drop-in Visit (30 min)</span>
          <span style={{ fontSize: '16px', fontWeight: '600', color: colors.teal }}>${sitter.rate}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '14px', color: colors.navy }}>Extended Visit (1 hr)</span>
          <span style={{ fontSize: '16px', fontWeight: '600', color: colors.teal }}>${sitter.rate + 15}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: colors.navy }}>Overnight Stay</span>
          <span style={{ fontSize: '16px', fontWeight: '600', color: colors.teal }}>${sitter.rate * 3}</span>
        </div>
      </div>

      {/* Reviews Preview */}
      <div style={{ textAlign: 'left', marginBottom: '100px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.navy, marginBottom: '16px' }}>Recent Reviews</h3>
        <div style={{ backgroundColor: colors.lightGray, borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} size={12} />)}
          </div>
          <p style={{ fontSize: '13px', color: colors.navy, lineHeight: '1.5' }}>
            "Maria was absolutely wonderful with my senior cat Max. She administered his medication perfectly and sent photo updates. Highly recommend!"
          </p>
          <p style={{ fontSize: '11px', color: colors.navy, opacity: 0.6, marginTop: '8px' }}>— Jennifer R., 2 weeks ago</p>
        </div>
      </div>
    </div>

    {/* Fixed Book Button */}
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '390px',
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.cream}`,
      padding: '16px 24px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div>
        <p style={{ fontSize: '12px', color: colors.navy, opacity: 0.6 }}>Starting at</p>
        <p style={{ fontSize: '24px', fontWeight: '700', color: colors.teal }}>${sitter.rate}<span style={{ fontSize: '14px', fontWeight: '400' }}>/visit</span></p>
      </div>
      <Button onClick={onBook}>Request Booking</Button>
    </div>
  </div>
);

// Booking Request
const BookingRequest = ({ sitter, onBack, onConfirm }) => {
  const [dates, setDates] = useState({ start: '2026-02-10', end: '2026-02-14' });
  const [serviceType, setServiceType] = useState('visit');
  const [notes, setNotes] = useState('');

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
      <div style={{ padding: '50px 24px 24px', borderBottom: `1px solid ${colors.cream}` }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px' }}>
          <BackIcon />
        </button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>Request Booking</h1>
        <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.7 }}>with {sitter.name}</p>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Sitter Preview */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: colors.cream,
          borderRadius: '12px',
          padding: '12px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}>
            {sitter.photo}
          </div>
          <div>
            <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy }}>{sitter.name}</p>
            {sitter.isVetTech && <VetBadge />}
          </div>
        </div>

        {/* Dates */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Dates</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input type="date" value={dates.start} onChange={(e) => setDates({...dates, start: e.target.value})} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: `1.5px solid ${colors.sage}`, fontSize: '15px' }} />
            <input type="date" value={dates.end} onChange={(e) => setDates({...dates, end: e.target.value})} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: `1.5px solid ${colors.sage}`, fontSize: '15px' }} />
          </div>
        </div>

        {/* Service Type */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Service Type</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'visit', label: 'Drop-in Visit (30 min)', price: sitter.rate },
              { id: 'extended', label: 'Extended Visit (1 hr)', price: sitter.rate + 15 },
              { id: 'overnight', label: 'Overnight Stay', price: sitter.rate * 3 },
            ].map(service => (
              <button
                key={service.id}
                onClick={() => setServiceType(service.id)}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: serviceType === service.id ? `2px solid ${colors.teal}` : `1.5px solid ${colors.sage}`,
                  backgroundColor: serviceType === service.id ? `${colors.sage}33` : colors.white,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '14px', color: colors.navy }}>{service.label}</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: colors.teal }}>${service.price}/day</span>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Notes for {sitter.name}</label>
          <textarea
            placeholder="Any special instructions or things the sitter should know?"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: `1.5px solid ${colors.sage}`,
              fontSize: '15px',
              minHeight: '100px',
              resize: 'none',
              boxSizing: 'border-box',
            }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Summary */}
        <div style={{ backgroundColor: colors.cream, borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', color: colors.navy }}>4 days × ${serviceType === 'visit' ? sitter.rate : serviceType === 'extended' ? sitter.rate + 15 : sitter.rate * 3}</span>
            <span style={{ fontSize: '14px', color: colors.navy }}>${(serviceType === 'visit' ? sitter.rate : serviceType === 'extended' ? sitter.rate + 15 : sitter.rate * 3) * 4}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', color: colors.navy }}>Service fee</span>
            <span style={{ fontSize: '14px', color: colors.navy }}>$12</span>
          </div>
          <div style={{ borderTop: `1px solid ${colors.sage}`, paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>Total</span>
            <span style={{ fontSize: '18px', fontWeight: '700', color: colors.teal }}>${(serviceType === 'visit' ? sitter.rate : serviceType === 'extended' ? sitter.rate + 15 : sitter.rate * 3) * 4 + 12}</span>
          </div>
        </div>

        <Button fullWidth onClick={onConfirm}>
          Send Request
        </Button>
        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: colors.navy, opacity: 0.6 }}>
          You won't be charged until {sitter.name} accepts
        </p>
      </div>
    </div>
  );
};

// Booking Confirmation
const BookingConfirmation = ({ sitter, onDone }) => (
  <div style={{ minHeight: '100%', backgroundColor: colors.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: colors.sage,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    }}>
      <CheckIcon size={40} color={colors.teal} />
    </div>

    <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '12px' }}>Request Sent!</h1>
    <p style={{ fontSize: '15px', color: colors.navy, opacity: 0.7, lineHeight: '1.5', marginBottom: '32px' }}>
      {sitter.name} will respond within 24 hours. You'll receive a notification when they accept.
    </p>

    <div style={{ backgroundColor: colors.cream, borderRadius: '16px', padding: '20px', width: '100%', marginBottom: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}>
          {sitter.photo}
        </div>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy }}>{sitter.name}</p>
          <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.6 }}>Feb 10 - 14, 2026</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors.navy, opacity: 0.6, fontSize: '13px' }}>
        <CalendarIcon color={colors.navy} />
        <span>Drop-in visits • 4 days</span>
      </div>
    </div>

    <Button fullWidth onClick={onDone}>
      View My Bookings
    </Button>
    <button onClick={onDone} style={{ marginTop: '16px', background: 'none', border: 'none', color: colors.teal, fontSize: '15px', fontWeight: '500', cursor: 'pointer' }}>
      Back to Search
    </button>
  </div>
);

// Sitter Signup
const SitterSignup = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', neighborhoods: [], isVetTech: false, password: '' });

  const neighborhoods = ['Williamsburg', 'Greenpoint', 'Bushwick', 'Park Slope', 'Carroll Gardens', 'DUMBO', 'Brooklyn Heights', 'Fort Greene', 'Clinton Hill', 'Crown Heights', 'Bed-Stuy', 'Flatbush'];

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
      <div style={{
        background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`,
        padding: '50px 24px 24px',
        color: colors.white,
      }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px' }}>
          <BackIcon color={colors.white} />
        </button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Become a Sitter</h1>
        <p style={{ fontSize: '14px', opacity: 0.9 }}>Join Brooklyn's trusted cat care community</p>
      </div>

      <div style={{ padding: '24px' }}>
        <Input label="Full Name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <Input label="Email" type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <Input label="Phone Number" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: colors.navy }}>Service Areas (select all that apply)</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {neighborhoods.slice(0, 8).map(n => (
              <button
                key={n}
                onClick={() => {
                  const newNeighborhoods = formData.neighborhoods.includes(n)
                    ? formData.neighborhoods.filter(x => x !== n)
                    : [...formData.neighborhoods, n];
                  setFormData({...formData, neighborhoods: newNeighborhoods});
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: formData.neighborhoods.includes(n) ? colors.teal : colors.cream,
                  color: formData.neighborhoods.includes(n) ? colors.white : colors.navy,
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Vet Tech Toggle */}
        <div style={{
          backgroundColor: formData.isVetTech ? `${colors.sage}44` : colors.cream,
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px',
          border: formData.isVetTech ? `2px solid ${colors.teal}` : '2px solid transparent',
          cursor: 'pointer',
        }}
        onClick={() => setFormData({...formData, isVetTech: !formData.isVetTech})}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy, marginBottom: '4px' }}>I'm a Vet Tech</p>
              <p style={{ fontSize: '12px', color: colors.navy, opacity: 0.7 }}>Licensed or credentialed veterinary technician</p>
            </div>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: formData.isVetTech ? colors.teal : colors.white,
              border: formData.isVetTech ? 'none' : `2px solid ${colors.sage}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {formData.isVetTech && <CheckIcon size={16} color={colors.white} />}
            </div>
          </div>
          {formData.isVetTech && (
            <div style={{ marginTop: '12px', padding: '12px', backgroundColor: colors.white, borderRadius: '8px' }}>
              <p style={{ fontSize: '12px', color: colors.teal, fontWeight: '600', marginBottom: '8px' }}>✨ Vet Tech Benefits:</p>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', color: colors.navy, opacity: 0.8 }}>
                <li>12% commission (vs 18% standard)</li>
                <li>$150 bonus after 5 bookings</li>
                <li>Premium search placement</li>
                <li>Verified badge on profile</li>
              </ul>
            </div>
          )}
        </div>

        <Input label="Password" type="password" placeholder="Create a password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />

        <Button fullWidth onClick={onContinue} variant="teal" style={{ marginTop: '8px' }}>
          Continue
        </Button>

        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: colors.navy, opacity: 0.6 }}>
          Background check required • Takes 2-3 business days
        </p>
      </div>
    </div>
  );
};

// Sitter Dashboard
const SitterDashboard = ({ onViewRequest, onBack }) => {
  const requests = [
    { id: 1, owner: 'Sarah K.', photo: '👩🏻', cat: 'Mochi', dates: 'Feb 10-14', service: 'Drop-in visits', total: 152, status: 'pending', catPhoto: '🐱' },
    { id: 2, owner: 'Mike T.', photo: '👨🏾', cat: 'Luna & Leo', dates: 'Feb 18-20', service: 'Overnight stays', total: 315, status: 'pending', catPhoto: '😺' },
  ];

  const upcoming = [
    { id: 3, owner: 'Emma L.', photo: '👩🏼', cat: 'Whiskers', dates: 'Feb 5-7', service: 'Extended visits', total: 200, catPhoto: '😸' },
  ];

  return (
    <div style={{ minHeight: '100%', backgroundColor: colors.lightGray }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)`,
        padding: '50px 24px 24px',
        color: colors.white,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <BackIcon color={colors.white} />
          </button>
          <h1 style={{ fontSize: '18px', fontWeight: '600' }}>Dashboard</h1>
          <div style={{ width: '24px' }} />
        </div>

        {/* Earnings Preview */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px' }}>
          <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>This month's earnings</p>
          <p style={{ fontSize: '28px', fontWeight: '700' }}>$847.00</p>
          <p style={{ fontSize: '12px', opacity: 0.8, marginTop: '4px' }}>12 completed bookings</p>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Pending Requests */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>New Requests</h2>
            <span style={{ backgroundColor: colors.coral, color: colors.white, padding: '2px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: '600' }}>{requests.length}</span>
          </div>

          {requests.map(req => (
            <div
              key={req.id}
              onClick={() => onViewRequest(req)}
              style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: colors.cream,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}>
                    {req.photo}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy }}>{req.owner}</p>
                    <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.6 }}>{req.cat} {req.catPhoto}</p>
                  </div>
                </div>
                <span style={{ fontSize: '18px', fontWeight: '700', color: colors.teal }}>${req.total}</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: colors.navy, opacity: 0.7 }}>
                <span>📅 {req.dates}</span>
                <span>🏠 {req.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: colors.navy, marginBottom: '12px' }}>Upcoming Bookings</h2>

          {upcoming.map(booking => (
            <div
              key={booking.id}
              style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                borderLeft: `4px solid ${colors.sage}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: colors.cream,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}>
                    {booking.photo}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy }}>{booking.owner}</p>
                    <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.6 }}>{booking.cat} {booking.catPhoto}</p>
                    <p style={{ fontSize: '12px', color: colors.teal, marginTop: '4px' }}>{booking.dates}</p>
                  </div>
                </div>
                <Button variant="secondary" style={{ padding: '8px 12px', fontSize: '12px' }}>Message</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '390px',
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.cream}`,
        padding: '12px 24px 24px',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <div style={{ textAlign: 'center' }}>
          <HomeIcon color={colors.coral} />
          <p style={{ fontSize: '10px', color: colors.coral, marginTop: '4px' }}>Dashboard</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CalendarIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Calendar</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <MessageIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Messages</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <UserIcon />
          <p style={{ fontSize: '10px', color: colors.navy, opacity: 0.6, marginTop: '4px' }}>Profile</p>
        </div>
      </div>
    </div>
  );
};

// Booking Request View (Sitter side)
const BookingRequestView = ({ request, onBack, onAccept, onDecline }) => (
  <div style={{ minHeight: '100%', backgroundColor: colors.white }}>
    <div style={{ padding: '50px 24px 24px', borderBottom: `1px solid ${colors.cream}` }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px' }}>
        <BackIcon />
      </button>
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '8px' }}>Booking Request</h1>
    </div>

    <div style={{ padding: '24px' }}>
      {/* Owner Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: colors.cream,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
        }}>
          {request.photo}
        </div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: '600', color: colors.navy }}>{request.owner}</p>
          <p style={{ fontSize: '14px', color: colors.navy, opacity: 0.6 }}>Park Slope</p>
        </div>
      </div>

      {/* Cat Info */}
      <div style={{ backgroundColor: colors.cream, borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.navy, marginBottom: '16px' }}>About {request.cat}</h3>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '12px',
            backgroundColor: colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
          }}>
            {request.catPhoto}
          </div>
          <div>
            <p style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>{request.cat}</p>
            <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.7 }}>3 years old • Tabby mix</p>
            <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.7, marginTop: '4px' }}>Friendly, playful</p>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${colors.sage}`, paddingTop: '12px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: colors.navy, marginBottom: '4px' }}>Medical Notes:</p>
          <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.8 }}>Daily thyroid medication (morning). Pills hidden in treats work best. Vet contact info provided in profile.</p>
        </div>
      </div>

      {/* Booking Details */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.navy, marginBottom: '12px' }}>Booking Details</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: colors.navy, opacity: 0.7 }}>Dates</span>
          <span style={{ fontSize: '14px', color: colors.navy }}>{request.dates}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: colors.navy, opacity: 0.7 }}>Service</span>
          <span style={{ fontSize: '14px', color: colors.navy }}>{request.service}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${colors.cream}`, paddingTop: '8px', marginTop: '8px' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: colors.navy }}>Your earnings</span>
          <span style={{ fontSize: '18px', fontWeight: '700', color: colors.teal }}>${Math.round(request.total * 0.88)}</span>
        </div>
        <p style={{ fontSize: '11px', color: colors.navy, opacity: 0.6, textAlign: 'right', marginTop: '4px' }}>After 12% platform fee</p>
      </div>

      {/* Owner's Note */}
      <div style={{ backgroundColor: colors.lightGray, borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
        <p style={{ fontSize: '12px', fontWeight: '600', color: colors.navy, marginBottom: '8px' }}>Note from {request.owner}:</p>
        <p style={{ fontSize: '13px', color: colors.navy, lineHeight: '1.5' }}>
          "Hi! I'll be traveling for work. Mochi is friendly but takes time to warm up. She loves feather toys and window perches. Thank you!"
        </p>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button fullWidth variant="outline" onClick={onDecline}>
          Decline
        </Button>
        <Button fullWidth onClick={onAccept}>
          Accept
        </Button>
      </div>

      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: colors.navy, opacity: 0.6 }}>
        Respond within 24 hours to maintain your response rate
      </p>
    </div>
  </div>
);

// Sitter Booking Confirmed
const SitterBookingConfirmed = ({ request, onDone }) => (
  <div style={{ minHeight: '100%', backgroundColor: colors.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: colors.sage,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    }}>
      <CheckIcon size={40} color={colors.teal} />
    </div>

    <h1 style={{ fontSize: '24px', fontWeight: '700', color: colors.navy, marginBottom: '12px' }}>Booking Accepted!</h1>
    <p style={{ fontSize: '15px', color: colors.navy, opacity: 0.7, lineHeight: '1.5', marginBottom: '32px' }}>
      {request.owner} has been notified. You can now message them to coordinate details.
    </p>

    <div style={{ backgroundColor: colors.cream, borderRadius: '16px', padding: '20px', width: '100%', marginBottom: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}>
          {request.catPhoto}
        </div>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '15px', fontWeight: '600', color: colors.navy }}>{request.cat}</p>
          <p style={{ fontSize: '13px', color: colors.navy, opacity: 0.6 }}>{request.dates}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${colors.sage}`, paddingTop: '12px' }}>
        <span style={{ fontSize: '14px', color: colors.navy }}>You'll earn</span>
        <span style={{ fontSize: '20px', fontWeight: '700', color: colors.teal }}>${Math.round(request.total * 0.88)}</span>
      </div>
    </div>

    <Button fullWidth onClick={onDone}>
      Message {request.owner}
    </Button>
    <button onClick={onDone} style={{ marginTop: '16px', background: 'none', border: 'none', color: colors.teal, fontSize: '15px', fontWeight: '500', cursor: 'pointer' }}>
      Back to Dashboard
    </button>
  </div>
);

// Main App
export default function WhiskerWatchApp() {
  const [screen, setScreen] = useState('landing');
  const [selectedSitter, setSelectedSitter] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const renderScreen = () => {
    switch(screen) {
      case 'landing':
        return <LandingPage onGetStarted={() => setScreen('ownerSignup')} onSitterSignup={() => setScreen('sitterSignup')} />;
      case 'ownerSignup':
        return <OwnerSignup onBack={() => setScreen('landing')} onContinue={() => setScreen('addCat')} />;
      case 'addCat':
        return <AddCatProfile onBack={() => setScreen('ownerSignup')} onContinue={() => setScreen('search')} />;
      case 'search':
        return <SitterSearch onBack={() => setScreen('landing')} onSelectSitter={(sitter) => { setSelectedSitter(sitter); setScreen('sitterProfile'); }} />;
      case 'sitterProfile':
        return <SitterProfile sitter={selectedSitter} onBack={() => setScreen('search')} onBook={() => setScreen('booking')} />;
      case 'booking':
        return <BookingRequest sitter={selectedSitter} onBack={() => setScreen('sitterProfile')} onConfirm={() => setScreen('confirmation')} />;
      case 'confirmation':
        return <BookingConfirmation sitter={selectedSitter} onDone={() => setScreen('search')} />;
      case 'sitterSignup':
        return <SitterSignup onBack={() => setScreen('landing')} onContinue={() => setScreen('sitterDashboard')} />;
      case 'sitterDashboard':
        return <SitterDashboard onBack={() => setScreen('landing')} onViewRequest={(req) => { setSelectedRequest(req); setScreen('requestView'); }} />;
      case 'requestView':
        return <BookingRequestView request={selectedRequest} onBack={() => setScreen('sitterDashboard')} onAccept={() => setScreen('sitterConfirmed')} onDecline={() => setScreen('sitterDashboard')} />;
      case 'sitterConfirmed':
        return <SitterBookingConfirmed request={selectedRequest} onDone={() => setScreen('sitterDashboard')} />;
      default:
        return <LandingPage onGetStarted={() => setScreen('ownerSignup')} onSitterSignup={() => setScreen('sitterSignup')} />;
    }
  };

  return (
    <PhoneFrame>
      {renderScreen()}
    </PhoneFrame>
  );
}
