import { Link } from "react-router-dom";
import Invoices from "../components/Invoices";

const Home = ({ invoices, fetchInvoices }) => {
  return (
    <div>
      <div className="header">
        <h1>Liste des factures</h1>
        <button className="addInvoice">
          <Link to="/invoices/new">Créer une facture</Link>
        </button>
      </div>
      <input className="searchbar" type="text" placeholder="Rechercher..." />
      <Invoices invoices={invoices} fetchInvoices={fetchInvoices}/>
    </div>
  );
};

export default Home;
