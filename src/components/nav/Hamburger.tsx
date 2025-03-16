import './Hamburger.css';

function Hamburger({ isActive = false, onClick, id }: { isActive?: boolean; onClick?: () => void, id: string }) {
	return (
		<button
			id={id}
			onClick={onClick}
			className={`hamburger hamburger--spin ${isActive ? ' is-active' : ''}`}
			title={isActive ? 'zamknij' : 'otwórz'}
			type="button">
			<span className="hamburger-box">
				<span className="hamburger-inner" />
			</span>
		</button>
	);
}

export default Hamburger;
