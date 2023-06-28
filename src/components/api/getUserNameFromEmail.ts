const getUserNameFromEmail = (email: string) => {
  const findSymbol = email.split('').findIndex((e) => e === '@');
  if (findSymbol === -1) {
    return email;
  }
  const userName = email.slice(0, findSymbol);
  return userName;
};

export default getUserNameFromEmail;
