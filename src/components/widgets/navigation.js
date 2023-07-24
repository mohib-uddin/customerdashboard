import Image from "next/image";
import ChooseLife from "@/assets/svgs/logo-white.svg";
import {Menu, Grid, Layout, Card} from "antd";
import React from "react";
import {useRouter} from "next/navigation";
import FAQIcon from "@/assets/svgs/FAQ";
import HomeIcon from "@/assets/svgs/Home";
import ContactIcon from "@/assets/svgs/Contact";
const { useBreakpoint } = Grid;
const {  Sider } = Layout;



const Navigation=({collapsed})=>{
    const router=useRouter();
    const screens=useBreakpoint();

    const menuItems=[
        {
            key: "1",
            icon: <HomeIcon fill={screens.xs?'#9E9E9E':'white'}/>,
            label: "Home",
            onClick: () => {
                router.push("/home");
            },
        },
        {
            key: "2",
            icon: <FAQIcon fill={screens.xs?'#9E9E9E':'white'}/>,
            label: "FAQ's",
        },
        {
            key: "3",
            icon: <ContactIcon fill={screens.xs?'#9E9E9E':'white'} />,
            label: "Contact",
        },
    ];
    console.log(screens.xs)
    return(
        <>
            {!screens.xs?<Sider
                style={{
                    background: "#4261EF",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    minHeight:'100vh'

                }}
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={0}
            >
                <div className="flex justify-center">
                    <Image src={ChooseLife} style={{ margin: 25, width: 90 }} />
                </div>
                <div>
                    <Menu
                        style={{
                            background: "#4261EF",
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "white",
                        }}
                        onChange={(a) => {
                            console.log(a);
                        }}
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={menuItems}
                    />
                </div>

            </Sider>:
                <Card style={{position:'fixed',width:'100%',bottom:'1px',zIndex:'10',background:'white',alignItems:'center'}} size={"small"}>

                    <div  style={{display:'flex', justifyContent:'space-around'}}>
                        {menuItems.map((e,index)=>{
                            return(
                                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                    {e.icon}
                                    <span style={{color:'#9E9E9E'}}>{e.label}</span>
                                </div>
                            )
                        })}

                    </div>

               </Card>}
        </>

    )
}

export default Navigation;
