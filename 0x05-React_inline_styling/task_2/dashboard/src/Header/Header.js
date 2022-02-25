import React from "react";
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';

function App() {
	return (
			<div className={css(styles.header)}>
				<img src={holberton_logo} className={css(styles.logo)} alt="logo" />
				<h1 className={css(styles.h1)}>School dashboard</h1>
			</div>
	);
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    color: "white",
    borderBottom: "3px solid #e01d3f",
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
  },

  logo: {
    height: "40vmin"
  },

  h1: {
    color: "#e01d3f",
    display: "inline-flex",
    flexDirection: "column"
  }
});

export default App;
