import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import { Input } from './input';

describe('Input rendering test', () => {

    test('Rendering input', () => {
        render(<Input placeholder="" type=""/>);

        let input = screen.getByLabelText(/inputForSearch/i);
        expect(input).toBeInTheDocument();
    });

})