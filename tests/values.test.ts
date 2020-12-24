import { suite } from "@vangware/test";
import { values } from "../src/values";

const array = ["foo", "bar", "baz", "foobar"];
const object = { bar: "bar", foo: "foo" };

export default suite<readonly (string | number)[]>([
	{
		given: "an array",
		must: "return an array with the values of that array",
		received: values(array),
		wanted: array
	},
	{
		given: "an object",
		must: "return an array with the values of that object",
		received: values(object),
		wanted: ["bar", "foo"]
	}
]);
