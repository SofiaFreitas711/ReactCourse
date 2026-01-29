# About Styling

Although we import a certain style onto one component, the css will apply to all the same that follow the same rule. Why? Because it's injected onto the head tag.

To pass style we use inline style using dynamic {} with an object insde. For example: style={{color: "red"}}

Modules of CSS turn styles onto unique names

We must be carefull about the props when using styled-components. If already exists whe can usa $ before the prop. Example: <Input $invalid={emailNotValid}>

We can use nested CSS atributes onto the styled component, changing the tag being created inside the CSS for &
Example:
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {

    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`