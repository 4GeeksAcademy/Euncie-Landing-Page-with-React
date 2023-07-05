import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const card = [
	{ image: "https://www.clarin.com/img/2021/10/07/l-IQkhV1S_340x340__1.jpg", title: "Kimchi", description: "Kimchi (pronounced [kimtɕʰi]) is a Korean dish made from a fermented preparation whose basic ingredient is Asian cabbage. There are also other recipes that use more ingredients.", buttonURL: "https://es.wikipedia.org/wiki/Kimchi", buttonLabel: "Click Here" },
	{ image: "https://i.pinimg.com/originals/db/44/8b/db448baf24506d2ee78319e43a309d8b.jpg", title: "Samgyeopsal", description: "Grilled pork belly is a type of gui (grilled dish) in Korean cuisine, it means three layer flesh, referring to striations of lean meat and fat in the pork belly that appear as three layers when cut.", buttonURL: "https://en.wikipedia.org/wiki/Samgyeopsal", buttonLabel: "Click Here" },
	{ image: "https://twoplaidaprons.com/wp-content/uploads/2022/12/close-top-down-of-tteokbokki-thumbnail.jpg", title: "Tteobokki", description: "Korean rice cake based snack that is usually purchased from street vendors. While the previous versions were salty. After the Korean War, a new type of tteokbokki became very popular.", buttonURL: "https://es.wikipedia.org/wiki/Tteokbokki", buttonLabel: "Click Here" },
	{ image: "https://daejim.sg/wp-content/uploads/2022/12/Osam-bulgogi-Spicy-stir-fried-squid-sliced-pork-belly.jpg", title: "Osam bulgogi ", description: "Korean dish made from squid and pork belly (samgyeopsal in Korean), marinated in a blend of seasonings. The mixture is cooked over a griddle with onion, scallion, garlic.", buttonURL: "https://en.wikipedia.org/wiki/Osam-bulgogi", buttonLabel: "Click Here" }
]
//create your first component
const Home = () => {
	return (

		<>
			<Navbar />
			<Jumbotron title="Korean Food!"
				description="Korean cuisine has evolved over the years of social and political change. Originating from ancient agricultural and nomadic traditions in the Korean peninsula and southern Manchuria."
				buttonURL="https://en.wikipedia.org/wiki/Korean_cuisine"
				buttonLabel="More Information" />
			<div className="card-group">
				{card.map((value, index) => {
					return <Card key={index} image={value.image} title={value.title} description={value.description} buttonURL={value.buttonURL} buttonLabel={value.buttonLabel} />
				})};
			</div>
			<Footer description="Copyright © Korean Food 2023" />
		</>
	);
};

export default Home;
