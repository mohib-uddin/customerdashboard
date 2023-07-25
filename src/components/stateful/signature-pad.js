import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Image from 'next/image'

import EraseIcon from '../../assets/icons/erase.png';

const SignaturePad = () => {
    const signatureCanvasRef = useRef();
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

    const handleSaveSignature = () => {
        if (signatureCanvasRef.current) {
            // Get the data URL of the signature
            const signatureDataURL = signatureCanvasRef.current.toDataURL();
            console.log(signatureDataURL);
            localStorage.setItem('signature',signatureDataURL);

            // You can now use the 'signatureDataURL' to display the signature as an image or send it to the server for saving.
            // For example, you can make an API call here to save the signature on the server.
        }
    };

    // Function to hide the placeholder when the user starts drawing
    const handleStartDrawing = () => {
        setPlaceholderVisible(false);
    };

    // Function to show the placeholder when the canvas is cleared
    const handleClearCanvas = () => {
        setPlaceholderVisible(true);
    };

    const handleEraseClick = () => {
        // Clear the signature canvas when the "Erase" icon is clicked
        signatureCanvasRef.current.clear();
        // Save the signature after clearing
        handleSaveSignature();
    };

    return (
        <div>
            <div style={{ width: '80%', border: '.5px solid black', margin: 'auto' }}>
                <SignatureCanvas
                    ref={signatureCanvasRef}
                    penColor="black"
                    canvasProps={{ width: 400, height: 120 }}
                    onBegin={() => handleStartDrawing()}
                    onEnd={() => {
                        handleClearCanvas();
                        handleSaveSignature();
                    }}
                />
                <Image
                    src={EraseIcon}
                    width={18}
                    height={18}
                    alt="Erase"
                    style={{ cursor: 'pointer' }}
                    onClick={handleEraseClick}
                />
            </div>
        </div>
    );
};

export default SignaturePad;
