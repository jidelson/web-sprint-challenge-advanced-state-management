import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import SmurfList from './SmurfList';

test("SmurfList renders the header", () => {
    render(<SmurfList />);
    const header = screen.getByText(/Smurfs:/i)
    expect(header).toBeInTheDocument()
  })

