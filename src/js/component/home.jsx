import React from "react";
import Header from "./header.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
			< >
			<div><Header /></div>
			<div className="container">
				<p></p>
				<div className="mb-3"><Jumbotron /></div>
				<div className="row">
					<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://www.idsplus.net/wp-content/uploads/default-placeholder.png" title="Deborah" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque voluptatibus, laborum ducimus adipisci, cum enim,
                sequi beatae repudiandae recusandae sunt hic officia magni ab tempore quae excepturi.
                Hic, saepe debitis."/>
					</div>
					<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://www.idsplus.net/wp-content/uploads/default-placeholder.png" title="Dobles" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque voluptatibus, laborum ducimus adipisci, cum enim,
                sequi beatae repudiandae recusandae sunt hic officia magni ab tempore quae excepturi.
                Hic, saepe debitis."/>
					</div>
					<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://www.idsplus.net/wp-content/uploads/default-placeholder.png" title="Montalvan" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque voluptatibus, laborum ducimus adipisci, cum enim,
                sequi beatae repudiandae recusandae sunt hic officia magni ab tempore quae excepturi.
                Hic, saepe debitis."/>
					</div>
					<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://www.idsplus.net/wp-content/uploads/default-placeholder.png" title="Costa Rica" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque voluptatibus, laborum ducimus adipisci, cum enim,
                sequi beatae repudiandae recusandae sunt hic officia magni ab tempore quae excepturi.
                Hic, saepe debitis."/>
					</div>
				</div>
			<Footer/>
			</div>
		</>
	);
};
			export default Home;
