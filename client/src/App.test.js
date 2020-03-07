import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {name, country, searches} from './Players';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("name is showing", () => {
  const{findByText} = render(<App />);

  findByText(/name/i);
})

test("country is showing", () => {
  const{findByText} = render(<App />);

  findByText(/country/i);
})

test("searches are showing", () => {
  const{findByText} = render(<App />);

  findByText(/searches/i);
})