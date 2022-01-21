export default async function createToken() {
  const response = await fetch('/api/createUser');
  const result = await response.json();
  return result.token;
}
