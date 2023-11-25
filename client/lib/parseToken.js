export default function parseToken(token) {
  const [ , encodedPaylod ] = token.split('.');
  const payloadJSON = atob(encodedPaylod);
  const payload = JSON.parse(payloadJSON);
  return payload;
}
