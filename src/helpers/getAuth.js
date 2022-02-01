
export function getAuth(){
  const auth = localStorage.getItem('auth') === 'true';
  return auth;
}