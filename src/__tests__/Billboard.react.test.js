import React from "react";
import { create } from "react-test-renderer";
import Billboard from './components/Billboard';

describe("Billboard", () => {
    test("it matches the snapshot", () => {
      const component = create(<Billboard />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });