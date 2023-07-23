import useTodo from "@/hooks/use-todo";
import {Button, Card} from "antd";
import React from "react";
import {useRouter} from "next/navigation";
const TodoCards=({todoItem,description,route,heading})=>{
const {status}=useTodo(todoItem);
const navigation=useRouter();
return(
    <>
    {!status?<Card className={'margin-top-1'}>
        <h1 className="">{heading}</h1>
        <p className="primary-title">

            {description}
        </p>
        <div className="flex justify-end">
            <Button
                type="text"
                className="bg-primary-color white-color primary-title rounded"
                onClick={()=>navigation.push(route)}
            >
                View
            </Button>
        </div>
    </Card>:<Card className="padding-none margin-top-1" size={'small'}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h1 className="padding-none">{heading}</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.625 24 24 18.625 24 12C24 5.375 18.625 0 12 0ZM18.175 9.1L11.125 16.175C10.9 16.4 10.575 16.55 10.25 16.55C9.925 16.55 9.6 16.425 9.375 16.175L5.825 12.625C5.325 12.125 5.325 11.35 5.825 10.85C6.325 10.35 7.1 10.35 7.6 10.85L10.25 13.5L16.425 7.325C16.925 6.825 17.7 6.825 18.2 7.325C18.675 7.825 18.675 8.6 18.175 9.1Z" fill="#87D6C6"/>
            </svg>
        </div>


    </Card>}
    </>

)

}

export default TodoCards;