import { useLocation } from "react-router-dom";
import tbl from "../Table/Table.module.css";

function Details() {
  const location = useLocation();
  return (
    <div className={tbl.details}>
      <span className={tbl.col}>
        <span>OrderNo</span>
        <input type="text" value={location.state.orderNo} disabled />
      </span>
      <span className={tbl.col}>
        <span>Delivery Date</span>
        <input type="text" value={location.state.date} disabled />
      </span>
      <span className={tbl.col}>
        <span>Customer</span>
        <input type="text" value={location.state.customer} disabled />
      </span>
      <span className={tbl.col}>
        <span>TrackingNo</span>
        <input type="text" value={location.state.trackingNo} disabled />
      </span>
      <span className={tbl.col}>
        <span>Status</span>
        <input type="text" value={location.state.status} disabled />
      </span>
      <span className={tbl.col}>
        <span>Consignee</span>
        <input type="text" value={location.state.consignee} disabled />
      </span>
    </div>
  );
}

export default Details;
