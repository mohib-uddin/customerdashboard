"use client";
import { Button, Card } from "antd";
import React from "react";

const HomeSection = () => {
  return (
    <>
      <div className="padding-left-4 padding-right-4">
        <div className="flex justify-space-between">
          <p className="heading-22 font-weight-700">4 session plan</p>
          <p className="heading-22 font-weight-700">0 Complete</p>
        </div>
        <p className="heading-20 font-weight-400">
          You have just completed the first stage of your journey. We just have
          a couple more steps for you to complete before we get you fully
          onboarded.
        </p>

        <Card>
          <h1 className="heading-22 font-weight-700">Paperwork</h1>
          <p className="sub-heading font-weight-400">
            Before we proceed forward we just need you to review and sign some
            paperwrok
          </p>
          <div className="flex justify-end">
            <Button
              type="text"
              className="bg-primary-color white-color sub-heading font-weight-700 padding-left-2 padding-right-2 padding-bottom-2"
            >
              View
            </Button>
          </div>
        </Card>

        <Card className="padding-none">
          <h1 className="heading-22 font-weight-700 padding-none">Schedule consultation</h1>
        </Card>
      </div>
    </>
  );
};

export default HomeSection;
