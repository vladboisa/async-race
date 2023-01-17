export * from './api.js'
const serverURLpath = new URL(`http://127.0.0.1:3000`)
const garageURLpath = new URL(`${serverURLpath} + /garage`);
async function getCars(url:URL) {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (err) {
    console.error(err);
  }
}
getCars(garageURLpath);

async function createCar (url:URL, dataParams:object) {

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataParams),
  }
  try {
    const res = await fetch(url,options);
    const data = await res.json();
    console.log("🚀 ~ file: index.js:7 ~ getCars ~ data", data)
  }
  catch (err){
    console.error(err);
  }
}
let params:object = {name: "vas",
color: "zel"}
createCar(garageURLpath,params)

async function deleteCars (url:URL,id:number) {
  const options = {
    method: 'DELETE',
  }
 try {
  const res = await fetch(`${url}/${id}`,options);
  const data = await res.json();
}
catch (err){
  console.error(err);
}
}
//deleteCars(garageURLpath,1)

async function getCarId (url:URL,id:number) {
  const options = {
    method: 'GET',
  }
 try {
  const res = await fetch(`${url}/${id}`,options);
  const data = await res.json();
}
catch (err){
  throw (new Error('Ne poshlo'));
}
}
getCarId(garageURLpath,1)