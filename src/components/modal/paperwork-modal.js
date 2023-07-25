import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {PaperworkDoc} from "@/utils/constants/paperwork-doc";
import SignaturePad from "@/components/stateful/signature-pad";
import ReactPDF, {PDFDownloadLink} from "@react-pdf/renderer";
import PDFDoc from "@/components/pdf/paperwork-pdf";
import {BlobProvider} from "@react-pdf/renderer";
const PaperworkModal= () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };




    return (
        <>
            <Button type="primary"  className="bg-primary-color white-color button" onClick={showModal}>
               Review & Sign
            </Button>
            <Modal
                open={open}
                title="Ketamine Treatment Informed Consent"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                ]}
            >
                <p>This field is required. By electronically signing Choose Ketamine's Ketamine Treatment Informed Consent, I confirm that:</p>
                <ol>
                    {PaperworkDoc.map((e)=>{
                        return(
                            <li>{e}</li>
                        )
                    })}
                </ol>
                <SignaturePad/>

                <div>

                    <BlobProvider document={<PDFDoc/>}>
                        {({ blob, url, loading, error }) => (
                            <>
                                {loading ? (
                                    <Button type="primary" style={{borderRadius:'none'}} className="bg-primary-color button white-color" disabled>
                                        Loading PDF...
                                    </Button>
                                ) : (
                                    <Button
                                        type="primary"
                                        style={{borderRadius:'none'}}
                                        className="bg-primary-color button white-color"
                                        onClick={() => window.open(url, '_blank')} // Open PDF in new tab
                                    >
                                        Preview PDF
                                    </Button>
                                )}
                            </>
                        )}
                    </BlobProvider>

                    <Button type="primary" style={{borderRadius:'none'}}  className="bg-primary-color button white-color" onClick={showModal}>
                        Submit
                    </Button>



                </div>

            </Modal>
        </>
    );
};

export default PaperworkModal;