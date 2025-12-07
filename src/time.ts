export function timer(waitMs: number): Promise<void> {
	return new Promise(
		resolve => setTimeout(resolve, waitMs),
	);
}
