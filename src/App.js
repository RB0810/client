import "./styles/App.css";
import Navbar from "./components/Navbar";
import LandlordLogin from "./pages/login/landlordlogin";
import TenantLogin from "./pages/login/tenantlogin";
import LandingPage from "./pages/landingpages/landingpage";
import AdminLogin from "./pages/login/adminlogin";
import TenantPortal from "./pages/portal/tenantportal";
import SupervisorPortal from "./pages/portal/supervisorportal";
import StaffPortal from "./pages/portal/staffportal";
import TicketDetails from "./components/TicketDetails";
import ViewTicket from "./pages/tenant/viewticket";
import PendingTickets from "./components/PendingTickets";
import ActiveTickets from "./components/ActiveTickets";
import ClosedTickets from "./components/ClosedTickets";
import AdminLandingPage from "./pages/landingpages/adminlandingpage"
import { Route, Routes } from "react-router-dom";
import SupervisorLandingPage from "./pages/landingpages/supervisorlandingpage";
import TenantLandingPage from "./pages/landingpages/tenantlandingpage";
import StaffLandingPage from "./pages/landingpages/stafflandingpage";
import CreateTicket from "./pages/tenant/createticket";
import CreateSupervisor from "./pages/admin/createsupervisoracc";
import CreateStaffAcc from "./pages/admin/createstaffacc";
import CreateTenantAcc from "./pages/supervisor/createtenantacc";
import ManageAccount from "./pages/admin/manageacc";
import BuildingDetailsPage from "./pages/admin/BuildingDetailsPage";

function App() {
  // Routing

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tenantlogin" element={<TenantLogin />} />
          <Route path="/landlordlogin" element={<LandlordLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/ticket/:ServiceRequestID" component={TicketDetails} />
          <Route path="/viewticket" element={<ViewTicket />} />
          <Route path="/viewticket/pendingtickets" element={<PendingTickets />} />
          <Route path="/viewticket/activetickets" element={<ActiveTickets />} />
          <Route path="/viewticket/closedtickets" element={<ClosedTickets />} />
          <Route path="/tenantportal/:id/:status" element={<TenantPortal />} />
          <Route path="/staffportal/:id/:status" element={<StaffPortal />} />
          <Route path="/supervisorportal/:id/:status" element={<SupervisorPortal />} />
          <Route path="/createtennantacc/:id" element={<CreateTenantAcc />} />
          <Route path="/createticket/:id" element={<CreateTicket />} />
          <Route path="/supervisorlandingpage/:id" element={<SupervisorLandingPage />} />
          <Route path="/stafflandingpage/:id" element={<StaffLandingPage />} />
          <Route path="/tenantlandingpage/:id" element={<TenantLandingPage />} />
          <Route path="/adminlandingpage/:id" element={<AdminLandingPage />} />
          <Route path="/createsupervisoracc" element={<CreateSupervisor />} />
          <Route path="/createstaffacc" element={<CreateStaffAcc />} />
          <Route path="/manageacc" element={<ManageAccount />} />
          <Route path="/manageacc/building/:id" element={<BuildingDetailsPage />} />
        </Routes> 
      </div>
    </>
  );
}

export default App;
