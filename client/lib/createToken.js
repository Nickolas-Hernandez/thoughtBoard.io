async function createToken() {
  const token = await fetch('/api/createUser');
  console.log(token);
}
