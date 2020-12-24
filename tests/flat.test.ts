import { suite } from "@vangware/test";
import { flat } from "../src/flat";

const flat1 = flat(1);
const flat2 = flat(2);
const array = [
	[0, 1],
	[2, 3]
];
const arrayDeeper = [array, array];

export default suite<readonly (number | readonly number[])[]>([
	{
		given: "an array of arrays and a depth of 1",
		must: "return a flattened array",
		received: flat1(array),
		wanted: [0, 1, 2, 3]
	},
	{
		given: "an array arrays of arrays and a depth of 1",
		must: "return an array of arrays",
		received: flat1(arrayDeeper),
		wanted: [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3]
		]
	},
	{
		given: "an array arrays of arrays and a depth of 2",
		must: "return a flattened array",
		received: flat2(arrayDeeper),
		wanted: [0, 1, 2, 3, 0, 1, 2, 3]
	}
]);
