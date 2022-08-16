import angy from "../assets/angy.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="error">
			<h1>this should not have happened.</h1>
			<img src={angy} alt="angry paisley pudge" className="angy" />
			<p className="error__text">
				you're on a page that doesn't exist. go{" "}
				<Link to="/" className="error__text">
					back
				</Link>
				.
			</p>
		</div>
	);
};

export default ErrorPage;
