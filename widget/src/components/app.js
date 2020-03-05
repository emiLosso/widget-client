import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import FormContainer from '../routes/form';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	render() {
		return (
			<div id="app">
				<Router>
            		<FormContainer path="/" />
				</Router>
			</div>
		);
	}
}
