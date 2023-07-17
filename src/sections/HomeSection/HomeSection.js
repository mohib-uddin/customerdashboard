"use client";
import { Button, Card } from "antd";
import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="px-36">
        <div className="flex justify-between">
          <p>4 session plan</p>
          <p>0 Complete</p>
        </div>
        <p>
          You have just completed the first stage of your journey. We just have
          a couple more steps for you to complete before we get you fully
          onboarded.
        </p>

        <Card>
          <h1>Paperwork</h1>
          <p>
            Before we proceed forward we just need you to review and sign some
            paperwrok
          </p>
          <Button type="text">View Work</Button>
        </Card>
      </div>
    </>
  );
};

export default HomeSection;
