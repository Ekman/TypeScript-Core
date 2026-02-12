export function errorDetect(possibleError: unknown): possibleError is Error {
	return Boolean(
		typeof possibleError === 'object'
		&& possibleError
		&& "message" in possibleError
		&& typeof possibleError.message === "string"
	)
}
