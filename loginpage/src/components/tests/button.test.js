import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../tests/button';

import {render} from '@testing-library/react';


it("rendering without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})


it("rendering button correctly", () => {
    const {getByTestId} = render(<Button  label="click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me")
})

