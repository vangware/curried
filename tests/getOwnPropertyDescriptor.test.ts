import { suite } from "@vangware/test";
import { getOwnPropertyDescriptor } from "../src/getOwnPropertyDescriptor";

const getFooDescriptor = getOwnPropertyDescriptor("foo");

export default suite([
	{
		given: "a foo property to get and an object with a foo property",
		must: "return property descriptor of foo",
		received: getFooDescriptor({ foo: "bar" }),
		wanted: {
			configurable: true,
			enumerable: true,
			value: "bar",
			writable: true
		}
	}
]);
