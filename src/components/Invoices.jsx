import { useNavigate } from "react-router-dom";

const Invoices = ({ invoices, fetchInvoices }) => {
  const navigate = useNavigate();
  const handleDelete = id => {
    const selectedInvoiceId = invoices.findIndex(invoice => invoice.id === id);
    invoices.splice(selectedInvoiceId, 1);
    fetchInvoices();
  };
  return (
    <div className="invoices">
      <table>
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Client</th>
            <th className="date">Date de création</th>
            <th className="status">Statut</th>
            <th className="amount">Montant</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => {
            return (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.customer}</td>
                <td>{invoice.sendingAt}</td>
                <td
                  className={
                    invoice.status === "sent"
                      ? "sent"
                      : invoice.status === "pending"
                      ? "pending"
                      : "cancel"
                  }>
                  {invoice.status}
                </td>
                <td>{invoice.amount}</td>
                <td className="actions">
                  <button className="edit" onClick={() => navigate(`invoices/update/${index}`)}>
                    Editer
                  </button>
                  <button className="delete" onClick={id => handleDelete(invoice.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
