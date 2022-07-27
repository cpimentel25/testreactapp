const getJson = async () => {
    const src = '../aero.json';
    const res = await fetch(src);
    const aero = await res.json();

    return aero;
}

export default getJson;