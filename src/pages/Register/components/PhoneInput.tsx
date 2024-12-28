import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
}

const COUNTRY_CODES = [
  { code: '+238', country: 'Cape Verde' },
  { code: '+351', country: 'Portugal' },
  { code: '+1', country: 'United States' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+55', country: 'Brazil' }
];

export const PhoneInput = ({ value, onChange, onValidityChange }: PhoneInputProps) => {
  const [selectedCode, setSelectedCode] = useState(COUNTRY_CODES[0].code);
  const [localNumber, setLocalNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fullNumber = `${selectedCode}${localNumber}`;
    onChange(fullNumber);
    
    // Basic validation: Ensure number is between 8-15 digits (excluding country code)
    const isValid = /^\d{8,15}$/.test(localNumber);
    onValidityChange(isValid);
  }, [selectedCode, localNumber, onChange, onValidityChange]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setLocalNumber(input);
  };

  return (
    <div className="relative flex rounded-md shadow-sm">
      <div className="relative">
        <button
          type="button"
          className="flex items-center px-3 py-3 text-base rounded-l-md border border-r-0 border-gray-300 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedCode}</span>
          <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
            <div className="py-1">
              {COUNTRY_CODES.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedCode(country.code);
                    setIsDropdownOpen(false);
                  }}
                >
                  {country.country} ({country.code})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <input
        type="tel"
        value={localNumber}
        onChange={handleNumberChange}
        className="flex-1 min-w-0 block w-full px-4 py-3 text-base rounded-r-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Enter your number"
      />
    </div>
  );
};