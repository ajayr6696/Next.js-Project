# Statgo-coding-solution
### Code Changes done:
#### 1. API Routing

- In latest version of Next.js, any file inside the folder app/api/*  will only be treated as an API endpoint. They are server-side only bundles and won't increase your client-side bundle size. 
- Therefore, I have moved the folder control/ into the new folder api/ that I created, for the API call to work.

#### 2. Parent Component

- The Calculator component is a functional component that represents a calculator for determining the price of a medical code based on selected modifiers.
- It imports the ModifierChooser component, the calculateCodePrice utility function, and other necessary dependencies.
- It uses React hooks, such as useState and useEffect, to manage state and perform side effects.
- The fetchCode function is an asynchronous function that fetches the code from the API and updates the code state when called. It is called once when the component mounts using the useEffect hook.
- The handleModifierChange function is called when a modifier is changed in the ModifierChooser component. It updates the modifiers state based on the selected modifier and the corresponding index.
- The finalPrice variable calculates the final price by invoking the calculateCodePrice function with the code and modifiers values. If either of them is falsy, the default price is set to 0.
- The JSX code renders the UI of the calculator, including headings, descriptions, and the modifier chooser components.
- The modifier chooser components are conditionally displayed based on the selected modifiers. Modifier 2 is displayed only if Modifier 1 is set, and Modifier 3 is displayed only if Modifier 2 is set.
- The price is displayed using the finalPrice variable.
 

#### 3. Child Component

- The code defines a functional component called ModifierChooser which represents a select input for choosing a modifier.
- The component receives props modifiers, onChange, and children.
- The handleOnChange function is an event handler for the onChange event of the select element. It extracts the selected modifier ID from the event, finds the corresponding modifier object from the modifiers array, or sets it to null if not found. Then, it invokes the onChange callback with the selected modifier.
- The component renders a FormControl component containing a Select component.
- The select element has a label defined by the children prop.
- The select element has an onChange event handler set to the handleOnChange function.
- The select element includes a default "No modifier" option with an empty value.
- The component iterates over the modifiers array using the map function, rendering a MenuItem for each modifier.
- Each MenuItem has a unique key based on the modifier's id.
- The value attribute of each MenuItem is set to the modifier's id.
- The disabled attribute of each MenuItem is set to true if the modifier's modifier_type is "LMTS", preventing selection if it's a restricted type.


