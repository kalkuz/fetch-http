Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Delete = Delete;
exports.Get = Get;
exports.Patch = Patch;
exports.Post = Post;
exports.Put = Put;
exports.default = void 0;
const config = {
  api: '',
  getAuthorization: () => '',
};
function HeaderBuilder(header, body) {
  const headers = {
    ...header,
    ...(body ? {
      'Content-Type': 'application/json',
    } : null),
    ...(config.getAuthorization() ? {
      authorization: config.getAuthorization(),
    } : null),
  };
  return headers;
}
async function Handler(res) {
  const json = await res.json();
  if (!res.ok) {
    throw json;
  } else {
    return json;
  }
}
async function Get(endpoint, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;
  return fetch(address, {
    method: 'GET',
    headers: HeaderBuilder(header),
  }).then(Handler);
}
async function Post(endpoint, body, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;
  return fetch(address, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: HeaderBuilder(header, body),
  }).then(Handler);
}
async function Patch(endpoint, body, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;
  return fetch(address, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: HeaderBuilder(header, body),
  }).then(Handler);
}
async function Put(endpoint, body, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;
  return fetch(address, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: HeaderBuilder(header, body),
  }).then(Handler);
}
async function Delete(endpoint, body, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;
  return fetch(address, {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: HeaderBuilder(header, body),
  }).then(Handler);
}
function Configurate(api = '', getAuthorization = () => '') {
  config.api = api;
  config.getAuthorization = getAuthorization;
}
const _default = {
  Configurate,
};
exports.default = _default;
