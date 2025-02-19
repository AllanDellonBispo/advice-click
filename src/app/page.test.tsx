import { Button } from "./components/ui/button";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import { CardAdvice } from "./components/ui/cardAdvice";
import { Input } from "./components/ui/input";


// describe('testing searchAdvice', () => {
    

// })

describe('Component rendering test', () => {

    test('Rendering input', () => {
        render(<Input placeholder="" type=""/>);

        let input = screen.getByLabelText(/inputForSearch/i);
        expect(input).toBeInTheDocument();
    });

    
    test('Rendering cardAdvice', () => {
        render(<CardAdvice text="cardResult"/>);
        
        let card = screen.getByLabelText(/cardResult/i);
        expect(card).toBeInTheDocument();
    });
    
    test('Rendering button', () => {
        render(<Button text="VER CONSELHO"/>);

        let button = screen.getByRole('button', {name: /buttonHandleSearch/i});
        expect(button).toBeInTheDocument();
    });

})