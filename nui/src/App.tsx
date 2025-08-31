import React from "react";
import { useEffect } from "react";

const App = () => {

    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        console.log("App mounted");
        

        window.addEventListener("message", (event) => {
            console.log("Received message:", event.data);

            if (event.data.type === "openUI") {
                setVisible(true);
            }
        });
    }, []);

	return (
		<>
            {visible && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                    <h1>Hello, NUI!</h1>
                    <button onClick={() => setVisible(false)}>Close</button>
                </div>
            )}
		</>
	);
};

export default App;