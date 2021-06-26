import { suite } from "@vangware/test";
import { getOwnPropertyDescriptor } from "../src/getOwnPropertyDescriptor";

const getFooDescriptor = getOwnPropertyDescriptor("foo");

export default suite([
	{
		given: "a foo property to get and an object with a foo property",
		must: "return property descriptor of foo",
		received: getFooDescriptor({ foo: "bar" }),
		wanted: {
			value: "bar",
			writable: true,
			// TODO: Remove next comment when @vangware/test is updated
			// eslint-disable-next-line sort-keys
			enumerable: true,
			// TODO: Remove next comment when @vangware/test is updated
			// eslint-disable-next-line sort-keys
			configurable: true
		}
	}
]);
