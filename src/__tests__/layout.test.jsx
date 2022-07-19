import React, { Component } from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from "@testing-library/dom";

import Card from "../components/card/Card";
// import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

let component = null

test('Test the Card', () => {
  component = render(<Card />);

  const img = component.container.querySelector('img');
  console.log(img);

  // component.debug();
  // expect(compoment.container).toHaveTextContent("Copyright Space Travelers' Hub");
});

test('Test the footer', () => {
  component = render(<Footer />);
  expect(component.container).toHaveTextContent("Copyright Space Travelers' Hub");
});
/*
test('Test the Header', () => {
  const compoment = render(<Header />);
  expect(compoment.container).toHaveTextContent("Copyright Space Travelers' Hub");
});

/*
let container = null;

beforeEach(() => {
  const container = document.getElementById('div');
  const root = createRoot(container);
});

afterEach(() => {
  root.unmount();
  container.remove();
  container = null;
});

it("Test the header", () => {
  act(() => {
    root.render(<Header />, container);
  });
  expect(container.textContent).toBe("Copyright Space Travelers' Hub");
});

it("Test the footer", () => {
  act(() => {
    root.render(<Footer />, container);
  });
  expect(container.textContent).toBe("Copyright Space Travelers' Hub");
});
*/