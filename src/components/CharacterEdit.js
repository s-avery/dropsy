import Radio from "./Radio";
import NameInstructionsEdit from "./NameInstructionsEdit";

const CharacterEdit = () => {
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>character creator</h2>
			</header>

			<main className="charCreate">
				<form>
					{/* //*left container */}
					<fieldset className="charCreate__leftContainer">
						<NameInstructionsEdit />
					</fieldset>

					{/* //* mid container */}
					<fieldset className="charCreate__rightContainer">
						<Radio />
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
