"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Patch = exports.Post = exports.Get = void 0;
const config = {
    api: '',
    getAuthorization: () => '',
};
function HeaderBuilder(header, body = null) {
    const headers = {
        ...header,
        ...(body ? { 'Content-Type': 'application/json' } : null),
        ...(config.getAuthorization() ? { authorization: config.getAuthorization() } : null),
    };
    return headers;
}
async function Handler(res) {
    const json = await res.json();
    if (!res.ok) {
        throw json;
    }
    else {
        return json;
    }
}
async function Get(endpoint, header = null, optionalApiAddress = null) {
    const address = `${optionalApiAddress || config.api}${endpoint}`;
    return fetch(address, { method: 'GET', headers: HeaderBuilder(header) })
        .then(Handler);
}
exports.Get = Get;
async function Post(endpoint, body, header = null, optionalApiAddress = null) {
    const address = `${optionalApiAddress || config.api}${endpoint}`;
    return fetch(address, { method: 'POST', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
        .then(Handler);
}
exports.Post = Post;
async function Patch(endpoint, body, header = null, optionalApiAddress = null) {
    const address = `${optionalApiAddress || config.api}${endpoint}`;
    return fetch(address, { method: 'PATCH', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
        .then(Handler);
}
exports.Patch = Patch;
async function Put(endpoint, body, header = null, optionalApiAddress = null) {
    const address = `${optionalApiAddress || config.api}${endpoint}`;
    return fetch(address, { method: 'PUT', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
        .then(Handler);
}
exports.Put = Put;
async function Delete(endpoint, body, header = null, optionalApiAddress = null) {
    const address = `${optionalApiAddress || config.api}${endpoint}`;
    return fetch(address, { method: 'DELETE', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
        .then(Handler);
}
exports.Delete = Delete;
function Configurate(api = '', getAuthorization = () => '') {
    config.api = api;
    config.getAuthorization = getAuthorization;
}
exports.default = { Configurate };
