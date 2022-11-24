import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateInvoice = ({ setInvoices, invoices, fetchInvoices }) => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);
  console.log(invoices);

  const handleSubmit = e => {
    e.preventDefault();
    const newData = {
      id: invoices.length + 1,
      customer: customerData.customer,
      sendingAt: customerData.sendingAt,
      status: customerData.status,
      amount: customerData.amount
    };
    setInvoices([...invoices, newData]);
    fetchInvoices();
    navigate("/");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
    console.log(customerData);
  };
  return (
    <div>
      <h1>Création d'une facture</h1>

      <form action="" onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="customer">Customer</label>
          <input type="text" id="customer" name="customer" onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Montant</label>
          <input type="number" id="amount" name="amount" onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">sendingAt</label>
          <input type="text" id="sendingAt" name="sendingAt" onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Status</label>
          <input type="text" id="status" name="status" onChange={e => handleChange(e)} />
        </div>
        <input type="submit" value="ENVOYER" />
      </form>
    </div>
  );
};

export default CreateInvoice;
