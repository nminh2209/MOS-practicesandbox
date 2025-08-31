import React from 'react';
import { useTest } from '../context/TestContext';

const LanguageToggle: React.FC = () => {
  const { state, dispatch } = useTest();

  const toggleLanguage = () => {
    const newLanguage = state.language === 'en' ? 'vi' : 'en';
    dispatch({ type: 'SET_LANGUAGE', payload: newLanguage });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      title={state.language === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
    >
      <span className="text-2xl">
        {state.language === 'en' ? '🇻🇳' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium text-gray-700">
        {state.language === 'en' ? 'VI' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
