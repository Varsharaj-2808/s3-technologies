import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface CaptchaFieldProps {
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

export const CaptchaField: React.FC<CaptchaFieldProps> = ({ value, onChange, required = true }) => {
  const [captchaCode, setCaptchaCode] = useState(() => Math.floor(1000 + Math.random() * 9000).toString());

  const refreshCaptcha = () => {
    setCaptchaCode(Math.floor(1000 + Math.random() * 9000).toString());
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-700">
        Verification Code {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <div className="relative select-none bg-gray-200 border border-gray-300 rounded px-3 py-1.5 font-mono text-lg font-black tracking-widest text-gray-800 line-through decoration-gray-400">
          {captchaCode}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="p-1.5 text-gray-500 hover:text-gray-800 transition-colors"
          title="Refresh Code"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
        <input
          type="text"
          maxLength={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter code"
          required={required}
          className="w-32 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white"
        />
      </div>
    </div>
  );
};
