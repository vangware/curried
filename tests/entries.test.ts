import { suite } from "@vangware/test";
import { entries } from "../src/entries";
import type { Entries } from "../src/types/Entries";

const key = "key";
const value = "value";
const array = [key, value];

export default suite<Entries<number | string, string>>([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: entries({ [key]: value }),
		wanted: [[key, value]]
	},
	{
		given: "an array [key, value]",
		must: "return an array of tuples [index, key], [index, value]",
		received: entries(array),
		wanted: [
			[0, key],
			[1, value]
		]
	}
]);
