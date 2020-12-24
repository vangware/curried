import { suite } from "@vangware/test";
import { flatMap } from "../src/flatMap";
import { map } from "../src/map";

const double = (item: number) => item * 2;
const mapDouble = map(double);
const mapMapDouble = map(mapDouble);
const flatMap1 = flatMap(mapDouble);
const flatMap2 = flatMap(mapMapDouble);
const array = [
	[0, 1],
	[2, 3]
];
const arrayDeeper = [array, array];

export default suite<readonly (number | readonly number[])[]>([
	{
		given: "an array of arrays and a depth of 1",
		must: "return a flatMaptened array",
		received: flatMap1(array),
		wanted: [0, 2, 4, 6]
	},
	{
		given: "an array of arrays of arrays and a depth of 1",
		must: "return an array of arrays",
		received: flatMap2(arrayDeeper),
		wanted: [
			[0, 2],
			[4, 6],
			[0, 2],
			[4, 6]
		]
	}
]);
