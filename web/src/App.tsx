import React from "react";
import { useEffect } from "react";

const App = () => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === "openUI") {
                setVisible(true);
            } else if (event.data.type === "closeUI") {
                setVisible(false);
            }
        };

        window.addEventListener("message", handleMessage);
        
        // Cleanup function pour supprimer l'event listener
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    const handleClose = () => {
        setVisible(false);
        // Envoyer un callback au client Lua pour désactiver le focus
        fetch("https://7wf-framework/close", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
        });
    };

	return (
		<>
            {visible && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                    <h1>Hello, NUI!</h1>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
		</>
	);
};

export default App;