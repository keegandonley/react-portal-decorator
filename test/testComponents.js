import React from 'react';
import inPortal from '../src'

export class Test extends React.Component {
	render() {
		return (
			<div>
				Hello, world!
			</div>
		);
	}
}

@inPortal('test-div')
class Test_2 extends React.Component {
	render() {
		return (
			<div>
				Hello, world!
			</div>
		);
	}
}

export const Test2 = Test_2;
