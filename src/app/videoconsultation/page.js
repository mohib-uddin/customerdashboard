"use client"
import { Button, Card } from "antd";
import React from "react";
import '../../styles/VideoConsultation.scss'
const VideoConsultation=()=>{

    return(
        <Card className={'paper-card'}>
            <h4>Step 2: Schedule your first video consultation</h4>
            <h5>If you have already scheduled this appointment in step 1 above then simply mark it as complete below.
            </h5>
            <h5>If not, it’s time to schedule your video consult with your Choose Ketamine Clinician.
            </h5>
            <p>Our clients have seen incredible success with ketamine therapy. Part of what makes our program so powerful is our high-touch and personalized approach. We're excited to get to know you and build a personal connection throughout your journey.
            </p>
            <p>After your consultation, you’ll be in an excellent place to begin your first ketamine session!
            </p>
            <h5>Your 40-minute consultation includes:
            </h5>
            <ul>
                    <li>A psychiatric evaluation. Make sure to have your government ID to hand for the call.</li>
                    <li>Expert guidance on how to prepare for your program.</li>
                    <li>Confirmation that ketamine treatment is a good fit for you.</li>
            </ul>
                <p>Note: We'll reserve this time on the Clinician’s calendar for you. If you must reschedule, please do so at least 72 hours in advance to avoid a $150 fee… and a sad Clinician :(
                </p>
        </Card>
    )

}

export default VideoConsultation;