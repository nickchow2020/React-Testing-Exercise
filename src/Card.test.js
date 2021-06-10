import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("should it render",function(){
    render(<Card />)
})

it("should it render contents",function(){
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})