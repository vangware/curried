import type { Hours } from "./types/Hours";

/**
 * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
 *
 * @category Date
 * @example
 * ```typescript
 * const date = createDate("1989-10-13T10:15:31.123Z");
 * getUTCHours(date); // 10
 * ```
 * @param source Date instance.
 * @returns A number value between 0 and 23.
 */
export const getUTCHours = (source: Date) => source.getUTCHours() as Hours;
