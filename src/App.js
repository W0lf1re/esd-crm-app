import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PrimaryRouter from './routing/PrimaryRouter';

function App() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetchInvoices();
  }, [])

  const fetchInvoices = () => {
    fetch('./invoices.json')
      .then(response => response.json())
      .then(data => setInvoices(data));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <PrimaryRouter invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
