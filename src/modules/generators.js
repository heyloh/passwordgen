const handleGenerateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const handleGenerateUppercase = () => {
  /* 
    Vamos usar a tabela ASCII, que tem letras maiúsculas nas posições
    entre 65 e 90.
  */
  return String.fromCharCode(handleGenerateRandom(65, 91));
}

const handleGenerateLowercase = () => {
  /* 
    Vamos usar a tabela ASCII, que tem letras maiúsculas nas posições
    entre 97 e 122.
  */
  return String.fromCharCode(handleGenerateRandom(97, 123));
}

const handleGenerateNumber = () => {
  /* 
    Vamos usar a tabela ASCII, que tem letras maiúsculas nas posições
    entre 49 e 57.
  */
  return String.fromCharCode(handleGenerateRandom(49, 58));
}

const symbols = ',.~^[]{}!@#$%&*()_+=-';
const handleGenerateSymbol = () => {  
  return symbols[handleGenerateRandom(0, symbols.length)];
}

export default function generatePwd(amount, uppercases, lowercases, numbers, symbols) {
  const pwdArray = [];
  amount = Number(amount);
  for(let i = 0; i < amount; i++) {
    uppercases && pwdArray.push(handleGenerateUppercase());
    lowercases && pwdArray.push(handleGenerateLowercase());
    numbers && pwdArray.push(handleGenerateNumber());
    symbols && pwdArray.push(handleGenerateSymbol());
  }

  return pwdArray.join('').slice(0, amount);
}