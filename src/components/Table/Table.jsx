import { useDispatch, useSelector } from "react-redux";
import { removeElement } from "../../redux/slices/tableSlice";
import { useNavigate } from "react-router-dom";
import tbl from "./Table.module.css";

function Table() {
  const { tablePage } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemoveClick = (id) => {
    dispatch(removeElement(id));
  };

  return (
    <div>
      <table className={tbl.tItems}>
        <tr>
          <th>Order No</th>
          <th>Delivery Date</th>
          <th>Customer</th>
          <th>Tracking No</th>
          <th>Status</th>
          <th>Consignee</th>
        </tr>
        {tablePage.data.orders.map((order, id) => (
          <tr key={id}>
            <td>{order.orderNo}</td>
            <td>{order.date}</td>
            <td>{order.customer}</td>
            <td>{order.trackingNo}</td>
            <td>{order.status}</td>
            <td>{order.consignee}</td>
            <button
              onClick={() => navigate(`/details/${id}`, { state: order })}
            >
              Details
            </button>
            <button onClick={() => onRemoveClick(order.orderNo)}>X</button>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
