import { suite } from "@vangware/test";
import { filter } from "../src/filter";

const array = [0, 1, 2, 3];
const nothing = (_: unknown) => false;
const filterEverything = filter(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = filter(isEven);

export default suite([
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: filterEverything(array),
		wanted: []
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: filterOdds(array),
		wanted: [0, 2]
	}
]);
