import { writable } from 'svelte/store';

export const user = writable(null);

export function setUser(data) {
	user.set(data);
}