import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import './Prouestas.css';
import Swal from 'sweetalert2';

export const Propuestas = () => {
  const [redirect, setRedirect] = useState(false);
  const [values] = useState(localStorage.getItem("formValues") || null);
  const [planSelection, setPlanSelection] = useState('');
  const info = JSON.parse(values) || {
    company: "",
    web: "",
    income: "",
    taxId: "",
  };
  const { company, web, income, taxId } = info;

  useEffect(() => {
    
    localStorage.setItem('planSelection', planSelection);

  }, [planSelection]);

  const alert100 = () => {
    Swal.fire({
      title: `You are accepting a loan of 100% of your monthly income (${income}) with an interest of ${((parseInt(income) * 1) / 100)} per month`,
      showDenyButton: true,
      confirmButtonText: `Accept`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        setPlanSelection('100%');
        setRedirect( redirect => redirect = true );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const alert75 = () => {
    Swal.fire({
      title: `You are accepting a loan of 75% of your monthly income (${income}) with an interest of ${((parseInt(income) * 75) / 100)} per month`,
      showDenyButton: true,
      confirmButtonText: `Accept`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        setPlanSelection('75%')
        localStorage.setItem('planSelection', planSelection);
        setRedirect( redirect => redirect = true );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const alert50 = () => {
    Swal.fire({
      title: `You are accepting a loan of 50% of your monthly income (${income}) with an interest of ${((parseInt(income) * 50) / 100)} per month`,
      showDenyButton: true,
      confirmButtonText: `Accept`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        setPlanSelection('50%');
        localStorage.setItem('planSelection', planSelection);
        setRedirect( redirect => redirect = true );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }



    return (
      <>
        <section className="propuestas">
        <h1>Proposals</h1>
        <hr />
        <table className="table table-borderless table-responsive">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Website</th>
              <th scope="col">Income</th>
              <th scope="col">TaxId</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${company}`}</td>
              <td>{`${web}`}</td>
              <td>{`${income}`}</td>
              <td>{`${taxId}`}</td>
            </tr>
          </tbody>
        </table>
        <hr />

        { income >= 10000 ?
          <article className="opts">
            {/* Card */}
              <div className="card opt">
                <h5 className="card-header">100% of its own monthly revenue amount</h5>
                <div className="card-body">
                  <h5 className="card-title">{ company }</h5>
                  <p className="card-text">
                    The possibility of lending you 100% of your income ${income} with an interest rate of 1% resulting in ${((parseInt(income) * 1) / 100)} per month.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={ () =>{
                      alert100();
                    }}
                  >Acepted</button>
                </div>
              </div>
            {/* /Card */}
            {/* Card */}
              <div className="card opt">
                <h5 className="card-header">75% of its own monthly revenue amount</h5>
                <div className="card-body">
                  <h5 className="card-title">{ company }</h5>
                  <p className="card-text">
                    The possibility of lending you 75% of your income ${income} with an interest rate of 75% resulting in ${((parseInt(income) * .75) / 100)} per month.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={ () =>{
                      alert75();
                    }}
                  >Acepted</button>
                </div>
              </div>
            {/* /Card */}
            {/* Card */}
              <div className="card opt">
                <h5 className="card-header">50% of its own monthly revenue amount</h5>
                <div className="card-body">
                  <h5 className="card-title">{ company }</h5>
                  <p className="card-text">
                    The possibility of lending you 50% of your income ${income} with an interest rate of 50% resulting in ${((parseInt(income) * .5) / 100)} per month.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={ () =>{
                       alert50();                      
                    }}
                  >Acepted</button>
                </div>
              </div>
            {/* /Card */}
          </article>
        :
          <article className="opts">
            
              <div className="alert alert-success" role="alert">
                <p>
                  The possibility of lending you 75% of your income ${income} with an interest rate of 0.75% resulting in ${((income * .75) / 100) + income}
                </p>
                <button 
                  className="btn btn-outline-primary"
                  onClick={ () =>{
                    alert75();
                  }}
                >
                  Aceptar
                </button>
              </div>
          
          </article>
        }        
        { redirect && 
          <Redirect from="/propuesta" to="/fin" />
        }
        </section>

      </>
    );
  
};
