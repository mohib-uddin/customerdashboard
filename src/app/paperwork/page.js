"use client"
import '../../styles/PaperWork.scss';
import { Button, Card } from "antd";
import React from "react";
import PaperworkModal from "@/components/modal/paperwork-modal";
const Paperwork=()=>{


    return(
        <div className={'paper-card'} style={{height:'100%'}}>
            <h4>Step 1:Review And Sign Telemedicine Paperwork</h4>
            <p>We work hard to be as thorough and transparent as possible throughout your entire journey with us. This includes making sure you fully understand the process up front.
            </p>
            <p>Please carefully review our Informed Consent and Remote Treatment Agreement before your first session.
            </p>
            <p>These provide important information about your medication, including ketamine’s history, off-label use, therapeutic benefits, and potential side-effects. They also outline what we require from you to promote safety and optimal outcomes including the requirement to have a peer present in your home on the day of your treatment.
            </p>
            <p>During your video consultation, your clinician will review these documents with you and answer any questions you have, and then we'll ask you to sign them before your first session.
            </p>
            <p>You’re well on your way to your first guided ketamine therapy session. We look forward to seeing you soon!
            </p>
            <p>Action Item: You will first complete the treatment informed consent document at the link below and then automatically be redirected to schedule your initial consultation call.
            </p>
                <div className={'margin-top-2'}>
                        <a className={'primary-color'}>Informed Consent</a>
                </div>
                <div className={'margin-top-1'}>
                        <a className={'primary-color'}>Remote Treatment Agreement</a>
                </div>

            <PaperworkModal/>
        </div>
    )

}

export default Paperwork;

