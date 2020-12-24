import { suite } from "@vangware/test";
import { instanceOf } from "../src/instanceOf";

const object = { key: "value" };
const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an object",
		must: "return true for instanceOf(Object)",
		received: instanceOf(Object)(object),
		wanted: true
	},
	{
		given: "an array",
		must: "return true for inscanceOf(Array)",
		received: instanceOf(Array)(array),
		wanted: true
	}
]);
