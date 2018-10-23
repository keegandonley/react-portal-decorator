import React from 'react';
import { Test, Test2 } from './testComponents';
import renderer from 'react-test-renderer';

// Create a div so that the decorator can attempt to find it
const docDiv = global.document.createElement('div');
docDiv.setAttribute('id', 'test-div');
const body = global.document.querySelector('body');
body.appendChild(docDiv);

// Mock out createPortal since react-test-renderer doesn't support it
// For now, just test whether createPortal is called with the correct
// component and target div
jest.mock("react-dom", () => ({
	createPortal: (node, target) => {
		expect(target.id).toEqual('test-div');
		return node;
	}
}));

test('React component is rendered', () => {
	const comp = renderer.create(
		<Test />
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot()
});

test('Portal target is correct', () => {
	const comp = renderer.create(
		<Test2 />
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot()
});

test('Portal component matches non-portal', () => {
	const comp = renderer.create(
		<Test />
	);
	
	const comp2 = renderer.create(
		<Test2 />
	);

	let tree = comp.toJSON();
	let tree2 = comp2.toJSON();
	expect(tree).toEqual(tree2);
});
