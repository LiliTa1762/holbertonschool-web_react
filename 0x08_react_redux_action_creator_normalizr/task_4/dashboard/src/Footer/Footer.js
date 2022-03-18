import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from "../App/AppContext";

function Footer() {
	return (
		<AppContext.Consumer>
			{(context) => (
				<footer className="App-footer">
				<p className={css(styles.copyright)}>Copyright {getFullYear()} - {getFooterCopy()}</p>
				{context.user.isLoggedIn && (
						<p className={css(styles.p)}><a>Contact us</a></p>
				)}
			</footer>
			)}
		</AppContext.Consumer>
	)
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

export default Footer;
