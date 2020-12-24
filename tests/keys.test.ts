import { suite } from "@vangware/test";
import { keys } from "../src/keys";

const array = ["foo", "bar", "baz", "foobar"];
const object = { bar: "bar", foo: "foo" };

export default suite<readonly (string | number)[]>([
	{
		given: "an array",
		must: "return an array with the index keys of that array",
		received: keys(array),
		wanted: [0, 1, 2, 3]
	},
	{
		given: "an object",
		must: "return an array with the property keys of that object",
		received: keys(object),
		wanted: ["bar", "foo"]
	}
]);
