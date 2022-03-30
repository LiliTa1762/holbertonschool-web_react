import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
	return {
		user: state.get('user')
	};
}

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { user } = this.props;
		return (
				<footer className="App-footer">
				<p className={css(styles.copyright)}>Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
				{ user ? 
						<p className={css(styles.p)}>
							<a>Contact us</a>
							</p> :
				<></>
				}
			</footer>
	)
}
}

const styles = StyleSheet.create({
	p: {
		textAlign: 'center',
		fontSize: '1.2rem'
	},

	copyright: {
		marginTop: '40px'
	}
})

Footer.propTypes = {
	user: PropTypes.object
}

Footer.defaultProps = {
	user: null
}

export default connect(mapStateToProps)(Footer);
//If you are not interested in store updates, leave it as undefined or null.
