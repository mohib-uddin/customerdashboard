import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Image from 'next/image'

import EraseIcon from '../../assets/icons/erase.png';
const SignaturePad = () => {
    const signatureCanvasRef = useRef();
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

    // Function to hide the placeholder when the user starts drawing
    const handleStartDrawing = () => {
        setPlaceholderVisible(false);
    };

    // Function to show the placeholder when the canvas is cleared
    const handleClearCanvas = () => {
        setPlaceholderVisible(true);
    };

    return (
        <div>
            <div style={{width:'80%',border:'.5px solid black',margin:'auto'}}>
                <SignatureCanvas
                    ref={signatureCanvasRef}
                    penColor="black"
                    canvasProps={{ width: 400, height: 120 }}
                    onBegin={() => handleStartDrawing()}
                    onEnd={() => handleClearCanvas()}
                />
                <Image
                    src={EraseIcon}
                    width={18}
                    height={18}
                    alt="Erase"
                    style={{cursor:'pointer'}}
                    onClick={() => signatureCanvasRef.current.clear()}
                />

            </div>

        </div>
    );
};

export default SignaturePad;
