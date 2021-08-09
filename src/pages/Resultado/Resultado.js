import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Resultado.css';

const Resultado = () => {

  const [redirect, setRedirect] = useState(false);

  const [values] = useState(localStorage.getItem("formValues") || null);
  const [plan] = useState(localStorage.getItem("planSelection") || null);
  const planSelect = plan;
  const info = JSON.parse(values) || {
    company: "",
    web: "",
    income: "",
    taxId: "",
  };
  const { company, web, income, taxId } = info;

  return (
    <>
    <section className="resultado">
        <h1>Congratulations: <strong className="titulo">{ company }</strong> </h1>
        <h6>Your plan of { planSelect } has been accepted</h6>
        <hr />
        

        <div className="alert alert-success" role="alert">
          <section className="alertMessage">
            <p>
              Lorem ipsum dolor sit <strong>{ web }</strong> amet consectetur, adipisicing elit. Neque repudiandae deleniti vitae dolore ut ratione tenetur pariatur. Nobis beatae porro necessitatibus, debitis fuga perferendis provident animi mollitia, voluptatibus nulla voluptas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur <strong>${ income }</strong> adipisicing elit. Recusandae et quam eveniet accusamus dolore. Error adipisci, voluptatum vel, ex ducimus, aliquid reiciendis non dolore unde nulla commodi accusantium. Fugit, reiciendis?
            </p>
            <p>
              Lorem ipsum, dolor sit amet <strong>{ taxId }</strong> consectetur adipisicing elit. Voluptas ab obcaecati fugit quidem? Quis repellat vero maxime ullam, id, fugiat minus laboriosam, libero quae a quisquam earum sit dolore nihil.
            </p>
          </section>
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={ () => {
            localStorage.clear();
            setRedirect( redirect => redirect = true );
          }}
        >
          Clear All
        </button>
        { redirect && 
          <Redirect from="/fin" to="/" />
        }
    </section>
    </>
  )
}

export default Resultado;