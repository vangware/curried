import type {
	BIGINT,
	BOOLEAN,
	FUNCTION,
	NULL,
	NUMBER,
	OBJECT,
	STRING,
	SYMBOL,
	UNDEFINED
} from "../constants";
import type { GenericFunction } from "./GenericFunction";
import type { GenericObject } from "./GenericObject";

/**
 * `typeof` type map (with `null`).
 */
export type TypeOfMap = {
	readonly [BIGINT]: bigint;
	readonly [BOOLEAN]: boolean;
	readonly [FUNCTION]: GenericFunction;
	readonly [NULL]: null;
	readonly [NUMBER]: number;
	readonly [OBJECT]: GenericObject;
	readonly [STRING]: string;
	readonly [SYMBOL]: symbol;
	readonly [UNDEFINED]: undefined;
};
