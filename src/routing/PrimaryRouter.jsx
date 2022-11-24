import Home from "../pages/Home";
import CreateInvoice from "../pages/CreateInvoice";
import { Route, Routes } from "react-router-dom";
import UpdateInvoice from "../pages/UpdateInvoice";

const PrimaryRouter = ({invoices, setInvoices, fetchInvoices}) => {
  return (
    <Routes>
      <Route path="/" exact element={<Home invoices={invoices} fetchInvoices={fetchInvoices}/>} />
      <Route path="/invoices/new"  element={<CreateInvoice setInvoices={setInvoices} invoices={invoices} fetchInvoices={fetchInvoices} />} />
      <Route path="/invoices/update/:index"  element={<UpdateInvoice setInvoices={setInvoices} invoices={invoices} fetchInvoices={fetchInvoices} />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default PrimaryRouter;
