import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("should it render",function(){
  render(<Carousel />)
})

it("should it render and response with the same content",function(){
  const {asFragment} = render(<Carousel />)

  expect(asFragment()).toMatchSnapshot()
})


it("handle left arrow button click",function(){
  const {getByText,getByTestId,getAllByText,debug} = render(<Carousel />)
  
  expect(getByText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
  const rightArrow = getByTestId("right-arrow")
  fireEvent.click(rightArrow)
  const leftArrow = getByTestId("left-arrow")
  fireEvent.click(leftArrow)
  expect(getByText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
})


it("testing of remove left and right arrow click",function(){
    const {getByTestId} = render(<Carousel />)

    const rightArrow = getByTestId("right-arrow")
    fireEvent.click(rightArrow)
    fireEvent.click(rightArrow)

    expect(rightArrow).not.toBeInTheDocument()

    const leftArrow = getByTestId("left-arrow")
    fireEvent.click(leftArrow)
    fireEvent.click(leftArrow)

    expect(leftArrow).not.toBeInTheDocument()
})