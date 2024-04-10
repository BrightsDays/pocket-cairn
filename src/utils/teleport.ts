export function teleport(node: HTMLElement, name: string) {
	if (!name) return
	
	let teleportContainer = document.getElementById(name);
	teleportContainer.appendChild(node);

	return {
		destroy() {
			node.remove()
		}
	}
}