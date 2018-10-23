<div align="center">

# react-portal-decorator

</div>
A simple way to render a component into a portal in React

```
npm install --save react-portal-decorator
```

```javascript
import React, { Component } from 'react';
import inPortal from 'react-portal-decorator';

@inPortal('render-div-id')
class MyComponent extends Component {
	return (
		<div>
			Hello, world!
			<br />
			This will be in the div '#render-div-id'
		</div>
	);
}
```

The decorator works by creating a higher-order component that renders your component into a div with the id specified when calling the decorator