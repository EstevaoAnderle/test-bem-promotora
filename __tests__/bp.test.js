beforeAll(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://www.bempromotora.com.br/');
});

const resposta = require('../src/utils/respostas.json');

test('Validar se o título do banner no início da página está correto', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  let title = await page.innerText('h1');
  expect(title).toEqual('Cartão Consignado');
});

test('Validar se a resposta da primeira pergunta está correta', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  await page.click('text=1O que é empréstimo consignado?');
  let answer = await page.textContent('.question.active>.answer');
  expect(answer).toEqual(resposta.resposta1);
});

test('Validar se a resposta da segunda pergunta está correta', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  await page.click('text=2A taxa de juros do consignado é alta?');
  let answer = await page.textContent('.question.active>.answer');
  expect(answer).toEqual(resposta.resposta2);
});

test('Validar se a resposta da terceira pergunta está correta', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  await page.click('text=3Quais são os convênios atendidos pela Bem Promotora?');
  let answer = await page.textContent('.question.active>.answer');
  expect(answer).toEqual(resposta.resposta3);
});

test('Validar se a resposta da quarta pergunta está correta', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  await page.click('text=4Quais tipos de empréstimos que a Bem Promotora pode me oferecer?');
  let answer = await page.textContent('.question.active>.answer');
  expect(answer).toEqual(resposta.resposta4);
});

test('Validar se a resposta da quinta pergunta está correta', async () => {
  await page.goto('http://www.bempromotora.com.br/cartao-consignado');
  await page.click('text=5Em quanto tempo o dinheiro estará na minha conta?');
  let answer = await page.textContent('.question.active>.answer');
  expect(answer).toEqual(resposta.resposta5);
});
