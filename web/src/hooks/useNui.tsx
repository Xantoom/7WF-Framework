import { useEffect, useCallback } from "react";

interface NuiMessage {
	action: string;
	data?: any;
}

export const useNui = () => {
	// Send message to Lua
	const sendMessage = useCallback((action: string, data?: any) => {
		// @ts-ignore
		fetch(`https://${GetParentResourceName()}/${action}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data || {}),
		});
	}, []);

	// Listen for messages from Lua
	const onMessage = useCallback((action: string, handler: (data: any) => void) => {
		const messageHandler = (event: MessageEvent<NuiMessage>) => {
			if (event.data.action === action) handler(event.data.data);
		};

		window.addEventListener("message", messageHandler);

		// Cleanup function
		return () => window.removeEventListener("message", messageHandler);
	}, []);

	// Close UI function
	const closeNui = useCallback(() => {
		sendMessage("closeNui");
	}, [sendMessage]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeNui();
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeNui]);

	return {
		sendMessage,
		onMessage,
		closeNui,
	};
};
