import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../store/appContext.js";

export const NavbarComponent = () => {
	const { store, actions } = useContext(Context);
	const [listItem, setListItem] = useState(null);

	useEffect(() => {
		// isEmpty();
		{
			if (store.favorites.length !== 0) {
				setListItem(
					store.favorites.map((eachFavorite, i) => {
						return (
							<li key={i}>
								{eachFavorite}
								<button
									className="btn btn-outline-light"
									onClick={() => {
										actions.delete();
									}}>
									<i className="far fa-trash-alt" />
								</button>
							</li>
						);
					})
				);
			} else {
				setListItem("Empty");
			}
		}
	});

	return (
		<Navbar expand="lg">
			<Navbar.Brand>
				<Link to="/">
					<img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG14.png" className="logo" />
				</Link>
			</Navbar.Brand>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{"Favorites " + store.favorites.length}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">{listItem}</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
