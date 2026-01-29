# About Styling

## Vanilla CSS
### Global CSS
Even if a CSS file is imported into a single component, its styles apply globally to all elements that match the same selectors.  
This happens because the CSS is injected into the `<head>` of the document.

### Inline Styles
Inline styles are passed using the `style` prop with a JavaScript object inside curly braces.

Example: style={{ color: "red" }}

### CSS Modules
CSS Modules automatically scope styles by generating unique class names, preventing global style collisions.

### Styled components
When using styled-components, be careful with props:
- If a prop name already exists on a DOM element, prefix it with $ to prevent it from being passed to the DOM.

Example: <Input $invalid={emailNotValid} />

### Nested Styles
Styled-components allow nested CSS using & to target elements created inside the component.
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

## TailwindCSS
Tailwind styles are applied using utility classes via the className prop.