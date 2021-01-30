import type { Entry } from "./Entry";
import type { GenericObject } from "./GenericObject";
import type { ValueOf } from "./ValueOf";

/**
 * Entry type of given Record.
 */
export type EntryOf<Source extends GenericObject> = Entry<
	keyof Source,
	ValueOf<Source>
>;
