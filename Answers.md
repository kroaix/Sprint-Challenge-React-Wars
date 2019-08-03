# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library. It is used to take the workload off of the DOM by creating a virtual DOM. We give the virtual DOM the elements and state data and it communicates it to the actual DOM.

2. What does it mean to think in react?

To think in react is to identify your components and to plan your project accordingly.  

3. Describe state.

The state is data that will change. 

4. Describe props.

Props are read-only data that can be passed between components. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects happen when something outside the scope of the function is affected. In order to sync effects you have to pass in a dependency array as the second argument in the effect hook.