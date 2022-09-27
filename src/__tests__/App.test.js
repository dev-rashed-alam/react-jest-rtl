import {render, screen} from "@testing-library/react";
import App from "../App";

test('render first', () => {
    render(<App/>)
    const linkElement = screen.getByText(/Test/);
    expect(linkElement).toBeInTheDocument();
})