import React from 'react';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import {PaperworkDoc} from "@/utils/constants/paperwork-doc";
import axios from "axios";
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    list:{
        fontSize:10,
        marginTop:4,
    },
    ruleSection:{
        width:'80%',
        margin:'auto',
        marginTop:10
    },
    image: {
     width:150,
        height:60
    },
    heading:{
        textAlign:'center',
        marginTop:10
    }
});

const signature=localStorage.getItem('signature');
// Create Document Component
const PDFDoc = () =>{
    return(

            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.heading}>Ketamine Treatment Informed Consent</Text>
                    <View style={styles.ruleSection}>

                        {PaperworkDoc.map((e,index)=>{
                            return(
                                <Text style={styles.list}>{index+1})  {e}</Text>
                            )
                        })}
                    </View>
                    {<Image style={styles.image} src={signature} />}
                </Page>
            </Document>

    )
}

export default PDFDoc;
