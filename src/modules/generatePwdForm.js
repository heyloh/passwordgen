import generatePwd from './generators';

const generatedPwd = document.querySelector('.generated-pwd');
const charsAmount = document.querySelector('.qtd-caracteres');
const uppercasesChk = document.querySelector('.chk-maiusculas');
const lowercasesChk = document.querySelector('.chk-minusculas');
const numbersChk = document.querySelector('.chk-numeros');
const symbolsChk = document.querySelector('.chk-simbolos');
const generateBtn = document.querySelector('.generate');

export default () => {
  generateBtn.addEventListener('click', () => {
    generatedPwd.innerHTML = generate();
  });
};

function generate() {
  const pwd = generatePwd(
    charsAmount.value,
    uppercasesChk.checked,
    lowercasesChk.checked,
    numbersChk.checked,
    symbolsChk.checked
  );

  return pwd;
}