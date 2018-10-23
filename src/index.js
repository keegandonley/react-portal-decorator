import React from 'react';
import ReactDOM from 'react-dom';

export default id => (Wrapped) => {
	return class PortalWrapper extends React.Component {
		render() {
			const overridenProps = Object.assign({}, this.props);
			const root = document.getElementById(id);
			return ReactDOM.createPortal(<Wrapped {...overridenProps} />, root);
		}
	};
};
