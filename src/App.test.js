import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders', () => {
  render(<App />, container);
 });

test('test that new-item-button is a button', () => {
  render(<App/>, container);
  const element = screen.getByTestId("button");
  console.log(element.outerHTML.toLowerCase());
  expect(element.outerHTML.toLowerCase().includes("button")).toBe(true)
});

test('test that new-item-input is an input ', () => {
  render(<App/>, container);
  const element = screen.getByTestId('input');
  expect(element.innerHTML.toLowerCase().includes("input")).toBe(true)
});
