export class EnumParseError extends Error {}

export function enumParse<T extends Record<string, string>>(enumObj: T, value: string): T[keyof T] {
	const match = Object.values(enumObj).find(v => v === value);

	if (!match) {
		const enumValues = Object.values(enumObj).join(", ");
		throw new EnumParseError(`"${value}" is not a valid enum value. Expected one of: ${enumValues}`);
	}

	return match as T[keyof T];
}
