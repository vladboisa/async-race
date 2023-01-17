var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export * from './api.js';
const serverURLpath = new URL(`http://127.0.0.1:3000`);
const garageURLpath = new URL(`${serverURLpath} + /garage`);
function getCars(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(url);
            const data = yield res.json();
        }
        catch (err) {
            console.error(err);
        }
    });
}
getCars(garageURLpath);
function createCar(url, dataParams) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataParams),
        };
        try {
            const res = yield fetch(url, options);
            const data = yield res.json();
            console.log("🚀 ~ file: index.js:7 ~ getCars ~ data", data);
        }
        catch (err) {
            console.error(err);
        }
    });
}
let params = { name: "vas",
    color: "zel" };
createCar(garageURLpath, params);
function deleteCars(url, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'DELETE',
        };
        try {
            const res = yield fetch(`${url}/${id}`, options);
            const data = yield res.json();
        }
        catch (err) {
            console.error(err);
        }
    });
}
//deleteCars(garageURLpath,1)
function getCarId(url, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
        };
        try {
            const res = yield fetch(`${url}/${id}`, options);
            const data = yield res.json();
        }
        catch (err) {
            throw (new Error('Ne poshlo'));
        }
    });
}
getCarId(garageURLpath, 1);
