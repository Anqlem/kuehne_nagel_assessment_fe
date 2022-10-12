import {useSelector} from 'react-redux';
import tbl from './Table.module.css'

function Table (){
    const {tablePage} = useSelector((state)=> state);

    return(
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
                    {tablePage.data.orders.map(order =>
                    <tr>
                        <td>{order.orderNo}</td>
                        <td>{order.date}</td>
                        <td>{order.customer}</td>
                        <td>{order.trackingNo}</td>
                        <td>{order.status}</td>
                        <td>{order.consignee}</td>
                        <button>X</button>
                    </tr>
                )}
                    
            </table>
            
        </div>
    )
}

export default Table;