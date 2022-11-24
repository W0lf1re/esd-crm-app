import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateInvoice = ({ invoices, setInvoices, fetchInvoices }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const currentInvoice = invoices[index];
  const { customer, amount, sendingAt, status } = currentInvoice;
  const [customerInvoice, setCustomerInvoice] = useState([]);
  console.log(invoices);

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomerInvoice({ ...customerInvoice, [name]: value });
    console.log(customerInvoice);
  };
  console.log(currentInvoice);

  const handleSubmit = e => {
    e.preventDefault();
    const newInvoice = {
      id: currentInvoice.id,
      customer: customerInvoice.customer,
      sendingAt: customerInvoice.sendingAt,
      status: customerInvoice.status,
      amount: customerInvoice.amount
    };
    invoices.splice(index, 1, newInvoice);

    fetchInvoices();
    navigate("/");
  };
  return (
    <div>
      <h1>UpdateInvoice</h1>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label>Customer</label>
          <input
            type="text"
            id="customer"
            name="customer"
            onChange={e => handleChange(e)}
            placeholder={customer}
          />
        </div>

        <div className="form-group">
          <label>amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            onChange={e => handleChange(e)}
            placeholder={amount}
          />
        </div>

        <div className="form-group">
          <label>sendingAt</label>
          <input
            type="text"
            id="customer"
            name="sendingAt"
            onChange={e => handleChange(e)}
            placeholder={sendingAt}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            id="status"
            name="status"
            onChange={e => handleChange(e)}
            placeholder={status}
          />
        </div>
        <input type="submit" value="Sumbit" />
      </form>
    </div>
  );
};

export default UpdateInvoice;
