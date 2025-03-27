import React from "react";
import { useState, useEffect } from "react";

function BasicUseEffect() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/")
		.then((response) => response.json())
		.then((data) => setData(data))
		.catch((error) => console.error("error fetching data:", error));
	}, []);

	return (
		<div>
		{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
		</div>
	);
}

export default BasicUseEffect;