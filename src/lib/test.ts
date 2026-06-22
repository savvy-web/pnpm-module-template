/**
 * A test Bar object
 * @public
 */
export interface Bar {
	bar: number;
}

/**
 * Returns a {@link Bar} object with a default value.
 * @public
 * @returns {@link Bar} The default `Bar` object.
 */
export function getBar(): Bar {
	return { bar: 42 };
}
