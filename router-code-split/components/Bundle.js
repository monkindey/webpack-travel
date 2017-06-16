import React, {
	Component
} from 'react'

export default class Bundle extends Component {
	constructor(props) {
		super(props);
		this.load = this.load.bind(this);
	}

	static defaultProps = {
		load: () => {}
	}

	state = {
		mod: null
	}

	componentWillMount() {
		this.load(this.props);
	}

	load(props) {
		this.setState({
			mod: null
		});

		props.load().then(mod => {
			console.log(mod);
			this.setState({
				mod: mod.default ? mod.default : mod
			})
		})
	}

	render() {
		return (
			this.props.children(this.state.mod)
		)
	}
}