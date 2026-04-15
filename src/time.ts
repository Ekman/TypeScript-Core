export function timer(waitMs: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, waitMs));
}

export function interval(waitMs: number, fn: () => void | Promise<void>): () => void {
	const intervalId = setInterval(fn, waitMs);
	return () => clearInterval(intervalId);
}
