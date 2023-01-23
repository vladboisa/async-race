export const serverURLpath = new URL(`http://127.0.0.1:3000`);
export const garageURLpath = new URL('garage', serverURLpath);
export async function getCars(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
    }
    catch (err) {
        throw (new Error('Error ocured :' + err));
    }
}
//getCars(garageURLpath);
export async function createCar(url, dataParams) {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataParams),
    };
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log("🚀 ~ file: index.js:7 ~ getCars ~ data", data);
    }
    catch (err) {
        throw (new Error('Error ocured :' + err));
    }
}
let params = { name: "vas",
    color: "zel1" };
createCar(garageURLpath, params);
export async function deleteCars(url, id) {
    const options = {
        method: 'DELETE',
    };
    try {
        const res = await fetch(`${url}/${id}`, options);
        const data = await res.json();
    }
    catch (err) {
        throw (new Error('Error ocured :' + err));
    }
}
//deleteCars(garageURLpath,1)
export async function getCarId(url, id) {
    const options = {
        method: 'GET',
    };
    try {
        const res = await fetch(`${url}/${id}`, options);
        const data = await res.json();
        console.log("🚀 ~ file: api.ts:58 ~ getCarId ~ data", data);
    }
    catch (err) {
        throw (new Error('Error ocured :' + err.statusText));
    }
}
getCarId(garageURLpath, 999);
