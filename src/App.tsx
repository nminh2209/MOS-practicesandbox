import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TestSelection from './pages/TestSelection';
import Practice from './pages/Practice';
import Results from './pages/Results';
import { TestProvider } from './context/TestContext';

function App() {
  return (
    <TestProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<TestSelection />} />
          <Route path="/practice/:appType" element={<Practice />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </TestProvider>
  );
}

export default App;
