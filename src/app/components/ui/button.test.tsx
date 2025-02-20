import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import { Button } from './button';

describe('Button rendering test', () => {
    
    test('Rendering button', () => {
        render(<Button text="VER CONSELHO"/>);

        let button = screen.getByRole('button', {name: /buttonHandleSearch/i});
        expect(button).toBeInTheDocument();
    });

})