"use client";
import { Button, Card } from "antd";
import React from "react";
import TodoService from "@/services/todo.service";
import {useRouter} from "next/navigation";
import TodoCards from "@/components/stateful/todo-cards";


const HomeSection = () => {
  const navigation=useRouter();
  const {useFetchTodo}=TodoService();
  const {data,isLoading,isSuccess}=useFetchTodo();
  console.log(data);
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
            todoItem={'PaperWork'}
            heading={'Review And Sign Telemedicine Paperwork'}
            route={'/paperwork'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />

        <TodoCards
            todoItem={'VideoConsultation'}
            heading={'Schedule Your First Video Consultation'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'FirstExperience'}
            heading={'Schedule Your First Experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'SecondExperience'}
            heading={'Schedule Your Second Experience - Recommended 7+ Days After Your First'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'FollowupConsult'}
            heading={'Schedule your follow up clinician video consult'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'ThirdExperience'}
            heading={'Schedule your third experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />
        <TodoCards
            todoItem={'FourthExperience'}
            heading={'Schedule your fourth experience'}
            route={'/videoconsultation'}
            description={' Before we proceed forward we just need you to review and sign some paperwork'}
        />

      </div>
    </section>
  );
};

export default HomeSection;
