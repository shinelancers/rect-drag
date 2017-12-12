import React from 'react';
import ReactDOM from 'react-dom';

class MyTable extends React.Component{

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Pair</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                    <tbody>
                    <tr style="text-align: center;font-style: italic;">
                        <td colspan="6">There are no orders!</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyTable;