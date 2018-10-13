import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '1',
        firstName: 'person',
        lastName: '1',
        email: 'person1@gmail.com',
        phone: '111-111-111',
        balance: '100'
      },
      {
        id: '2',
        firstName: 'person',
        lastName: '2',
        email: 'person2@gmail.com',
        phone: '222-222-222',
        balance: '200'
      },
      {
        id: '3',
        firstName: 'person',
        lastName: '3',
        email: 'person3@gmail.com',
        phone: '333-333-333',
        balance: '300'
      }
    ];

    if(clients) {
      return(
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {''}
                <i className="fas fa-users"> Clients</i>
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {clients.map(client => (
               <tr key={client.id}>
                 <td>{client.firstName} {client.lastName}</td>
                 <td>{client.email}</td>
                 <td>${parseFloat(client.balance).toFixed(2)}</td>
                 <td>
                   <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                     <i className="fas fa-arrow-circle-right mr-2"></i>Details
                   </Link>
                 </td>
               </tr>
             ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>loading...</h1>
    }

  }
}

export default Clients;