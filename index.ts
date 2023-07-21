interface Config {
  api: string;
  getAuthorization: () => string;
}

const config: Config = {
  api: '',
  getAuthorization: () => '',
};

function HeaderBuilder(header: object | null, body: object | string | null = null) : HeadersInit {
  const headers = {
    ...header,
    ...(body ? { 'Content-Type': 'application/json' } : null),
    ...(config.getAuthorization() ? { authorization: config.getAuthorization() } : null),
  };

  return headers;
}

async function Handler(res: Response) {
  const json = await res.json();

  if (!res.ok) {
    throw json;
  } else {
    return json;
  }
}

export async function Get(endpoint: string, header: object | null = null, optionalApiAddress: string | null = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;

  return fetch(address, { method: 'GET', headers: HeaderBuilder(header) })
    .then(Handler);
}

export async function Post(endpoint: string, body: object | string | null, header: object | null = null, optionalApiAddress: object | null = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;

  return fetch(address, { method: 'POST', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
    .then(Handler);
}

export async function Patch(endpoint: string, body: object | string | null, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;

  return fetch(address, { method: 'PATCH', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
    .then(Handler);
}

export async function Put(endpoint: string, body: object | string | null, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;

  return fetch(address, { method: 'PUT', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
    .then(Handler);
}

export async function Delete(endpoint: string, body: object | string | null, header = null, optionalApiAddress = null) {
  const address = `${optionalApiAddress || config.api}${endpoint}`;

  return fetch(address, { method: 'DELETE', body: JSON.stringify(body), headers: HeaderBuilder(header, body) })
    .then(Handler);
}

function Configurate(api: string = '', getAuthorization: () => string = () => '') {
  config.api = api;
  config.getAuthorization = getAuthorization;
}

export default { Configurate };
