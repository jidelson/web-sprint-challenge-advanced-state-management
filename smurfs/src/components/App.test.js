import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import App from './App';

test("renders Form without crashing", () => {

    render(<App />);

  });

  test("App renders the header", () => {
    render(<App />);
    const header = screen.getByText(/Welcome to the Smurf Village!/i)
    expect(header).toBeInTheDocument()
  })