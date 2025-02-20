import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import { CardAdvice } from './cardAdvice';


describe('Card Advice rendering test', () => {
    
    test('Rendering cardAdvice', () => {
        render(<CardAdvice text="cardResult"/>);
        
        let card = screen.getByLabelText(/cardResult/i);
        expect(card).toBeInTheDocument();
    });

})