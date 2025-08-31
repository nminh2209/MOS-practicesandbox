import React from 'react';
import ExcelSandbox from '../components/ExcelSandbox';

const PracticeExcel: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Excel Practice Sandbox</h2>
      <p>Practice Excel skills in a real, interactive spreadsheet environment. Try entering data, using formulas, and more!</p>
      <ExcelSandbox />
    </div>
  );
};

export default PracticeExcel;
