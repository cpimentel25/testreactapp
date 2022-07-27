import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import './styles/styles.scss'

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const {register, handleSubmit, errors } = useForm();
    const [entradas, setEntradas] = useState([]);

    const [btnon, setBtnon] = useState(false);
    const [inputComppete, setInputComplete] = useState([])

    const handleInputComplete = e => {
      var auxiliar = null;
      if(inputComppete.includes(e.target.value)){
        auxiliar = inputComppete.filter(elemento => elemento !== e.target.value);
      }else {
        auxiliar = inputComppete.concat(e.target.value);
      }
      setInputComplete(auxiliar);

      if(auxiliar.length > 3) {
        setBtnon(true);
      }else {
        setBtnon(false);
      }
    }

    const onFormSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset();
    }

    // swal2:

    const showLB = () => {
      Swal.fire({
        titleText: 'Tu información fue enviada con éxito, estaremos en contacto contigo.',
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        icon: 'success',
      })
    }
    //

    // tst
    const handleClick = (e) => {
      console.log(e);
    }
    //

    useEffect(() => {
        fetch("./aero.json")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {

    return (
      <div className="primaryBox">
      <div className="textBox">
        <p>Hola, bienvenido, sabemos que quieres viajar en un X, por favor diligencia el siguiente formulario:</p>
      </div>
      <div className="resBox">
        <div className="boxItems">
          <h2>Favor elegir la aerolinea por la cual desea viajar</h2>
            {items.map((item) =>
                <div key={item.id} className="listItems">
                    <li key={item.id} className="listsAero" type="submit" onClick={handleClick}>{ item.aero }</li>
                </div>
            )}
        </div>
        <div className="styleForm">
          <h2>Formulario:</h2>
          <form className="formTest" onSubmit={handleSubmit(onFormSubmit)}>
              <ul className="formStyle">
                  <li>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Nombre"
                      name="nombre"
                      {...register('nombre',
                        {required:{value:true, message:'Nombre es requerido'}})}
                      onChange={handleInputComplete}
                    />
                  </li>
                  <span
                    className="text-danger text-small d-block mb-2">
                      {errors?.nombre?.message}
                  </span>
                  <li>
                    <input
                      id="Email"
                      type="text"
                      placeholder="Email"
                      name="email"
                      {...register('email', {required:{value:true, message:'Nombre es requerido'}})}
                      onChange={handleInputComplete}
                    />
                  </li>
                  <li>
                    <input
                    type="text"
                    placeholder="Numero de contacto"
                    name="celular"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)){event.preventDefault();}}}
                    {...register('celular', {required: true})}
                    onChange={handleInputComplete}
                    />
                  </li>
                  <li>
                    <input
                    type="text"
                    placeholder="Edad"
                    name="edad"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)){event.preventDefault();}}}
                    {...register('edad', {required: true, min: 18, max: 100})}
                    onChange={handleInputComplete}
                    />
                  </li>
                  <button onClick={showLB} disabled={!btnon} type="submit" value="Submit" className="btn btnPrimary">Enviar</button>
              </ul>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
