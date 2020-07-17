import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import SmurfForm from './SmurfForm';

test("form adds new user", () => {

    render(<SmurfForm />);
  
    const nameInput = screen.getByLabelText(/Name:/i);
    const ageInput = screen.getByLabelText(/Age:/i);
    const heightInput = screen.getByLabelText(/Height:/i);
    
    fireEvent.change(nameInput, { target: { value: 'Joe'}});
    fireEvent.change(ageInput, { target: { value: '100'}});
    fireEvent.change(heightInput, { target: { value: '6'}});
  
    const submitButton = screen.getByTestId(/Submit/i);
  
    fireEvent.click(submitButton);
  
    const newUser = screen.findByText(/Joe/i);
  })

  test("renders Form without crashing", () => {

    render(<SmurfForm />);

  });