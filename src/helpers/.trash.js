/**
const aerolineas = [{id:"0", aero: "Copa"}, {id:"1", aero: "VivaAir"}, {id:"3", aero: "Latam"}, {id:"4", aero: "AmericanAirLains"}, {id:"5", aero: "Avianca"}];

function lifeCycle() {

  return (
    <div>
        <div>
            {aerolineas.map((aerolinea) =>
                <div key={aerolineas.id}>
                    <li className="listsAero">{ aerolinea.aero } <button>Seleccionar</button></li>
                </div>
            )}
        </div>
        <p>Hola, bienvenido, sabemos que queires viajar en un X, por favor diligencia el siguiente formulario:</p>
    </div>
  );
}

export default lifeCycle;
*/
/**
const btn1 = (e) => {
    console.log(e.target.className);

    useEffect(() => {
        console.log('Test1')
    }, [])
}

function btn2(e) {
    console.log(e.target.className);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('test useEffect');

        fetch('./aero.json')
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
        return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
        return <div>Cargando...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.aero}>
                    </li>
                ))}
            </ul>
        );
    }
}

return (
    <div className="container">
        <div className="section">
            <button onClick={btn1} className="VivaAir" id="btn1">Viv Air</button>
            <button onClick={btn2} className="Avianca" id="btn2">Avianca</button>
            <div>
                <form>
                    <ul>
                        <li>Nombre: </li>
                        <li>Email: </li>
                        <li>Celular: </li>
                        <li>Edad: </li>
                    </ul>
                </form>
                <form id="2">

                </form>
            </div>
        </div>
    </div>
    <div>
    <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <ul>
          <li>Nombre completo: <input type="text" placeholder="Tu nombre" {...register('nombre', { required: true })}/></li>
          <li>Email: <input type="text" placeholder="Email" {...register('email', { required: true })}/></li>
          <li>Celular: <input type="text" placeholder="Numero de contacto" {...register('celular', { required: true })}/></li>
          <li>Edad: <input type="text" placeholder="Edad" {...register('edad', { required: true })}/></li>
        </ul>
        <div>
            <button type="submit" value="Submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default lifeCycle;
*/

/**
const {register, handleSubmit, reset } =useForm();

const [data, setData] = useState(null);

useEffect(() => {
    setTimeout(() => setData({
        nombre:'',
        email: '',
        celular: '',
        edad: ''
    }), 10000,)
}, []);

useEffect(() => {
    reset(data)
}, [data]);

function onFormSubmit(dataRes) {
    console.log(dataRes)
    return false
};
 */