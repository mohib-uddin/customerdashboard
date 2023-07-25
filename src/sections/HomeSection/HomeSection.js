"use client";
import { Button, Card } from "antd";
import React from "react";
import TodoService from "@/services/todo.service";
import {useRouter} from "next/navigation";
import TodoCards from "@/components/stateful/todo-cards";


const HomeSection = () => {


  const navigation=useRouter();
  return (
    <section style={{width:'100%',background:'whitesmoke'}}>
      <div style={{height:'100%',width:'80%',margin:'auto'}}>
        <div className="flex justify-space-between">
          <p className="heading-20 font-weight-600">4 session plan</p>
          <p className="heading-20 font-weight-600">0 Complete</p>
        </div>
        <p className="primary-title font-weight-400">
          You have just completed the first stage of your journey. We just have
          a couple more steps for you to complete before we get you fully
          onboarded.
        </p>

        <TodoCards
            todoItem={'telemedicine_paperwork'}
            heading={'Review And Sign Telemedicine Paperwork'}
            route={'/paperwork'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />

        <TodoCards
            todoItem={'video_consultation'}
            heading={'Schedule Your First Video Consultation'}
            route={'/videoconsultation'}
            description={'Now it’s time to schedule your video consult with your Choose Ketamine Clinician'}
        />
        <TodoCards
            todoItem={'first_experience'}
            heading={'Schedule Your First Experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'second_experience'}
            heading={'Schedule Your Second Experience - Recommended 7+ Days After Your First'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'video_consultation_followup'}
            heading={'Schedule your follow up clinician video consult'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'third_experience'}
            heading={'Schedule your third experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'fourth_experience'}
            heading={'Schedule your fourth experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />

      </div>
    </section>
  );
};

export default HomeSection;
