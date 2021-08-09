import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from '../Hooks/useForm';
import '../pages/Home/Home.css';


export const FormularioHome = () => {
  const [show, setShow] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [ formValues, handleInputChange ] = useForm({
    company: '',
    web: '',
    income: '',
    taxId: '',
  });

  const { company, web, income, taxId } = formValues;
  
  useEffect( () => {
    taxId.toUpperCase();
  }, [taxId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(company === '' || web === '' || income === '' || taxId === '') {
      setShow( show => show = false );
    } else {

      setShow( show => show = true );
      formValues.taxId = formValues.taxId.toUpperCase()
      localStorage.setItem( 'formValues', JSON.stringify(formValues));
      setRedirect( redirect => redirect = true );
    }
  }

  
  
  return (
    <>
      <section className="section">
        <form className="formulario" onSubmit={ handleSubmit }>
        <h1>Application form</h1>
        <hr />

          { !show && <div className="alert alert-danger" role="alert">
            All fields are required!
          </div> }

          <div className="form-group">

            <input 
              type="text"
              name="company"
              className="form-control"
              placeholder="Company Name"
              value={ company }
              onChange={ handleInputChange }
            />

            <input 
              type="text"
              name="web"
              className="form-control"
              placeholder="URL"
              value={ web }
              onChange={ handleInputChange }
            />
            
            <input 
              type="text"
              name="income"
              className="form-control"
              placeholder="Icome"
              value={ income }
              onChange={ handleInputChange }
            />

            <input 
              type="text"
              name="taxId"
              className="form-control"
              placeholder="RFC / CNPJ / TIN"
              value={ taxId.toUpperCase() }
              onChange={ handleInputChange }
            />

            <div className="d-grid gap-1">

              <button 
                type="submit" 
                className="btn btn-outline-primary"
              >
                Guardear
              </button>
              {redirect && 
                <Redirect from="/" to="/propuesta" />
              }

            </div>

          </div>

        </form>
      </section>
    
      
    </>
  
  )
}
