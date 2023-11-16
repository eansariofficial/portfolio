"use client";
import React from "react";
import ReactPDF, { Image, Line } from '@react-pdf/renderer';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,Link,PDFDownloadLink
} from "@react-pdf/renderer";
const index = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      backgroundColor:"pink"
    },
  });
  const MyDocument = () => (
    <Document >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Link src="https://parple.com/available-branches">LinkedIn</Link>
        </View>
        <View style={styles.section}>
          <Image fixed style={{width:30, height:30,}} src={"https://react-pdf.org/images/logo.png"}/>
          <Text style={{ position:'absolute', color:"white"}}>Section #2</Text>
          <Line x1={11} x2={12} y1={22} y2={22}/>
        </View>
      </Page>
    </Document>
  );
  async function trailDoc() {
    try {
      ReactPDF.render(<MyDocument />, `example.pdf`);

    } catch (error) {
      console.error("Error converting HTML to Word:", error);
    }
  }
  function getHeight(width:number){
    return width*1.41
  }
  return (
    <div id="main" style={{width: '100%'}}>
      {/* <button
        onClick={() => {
          trailDoc();
        }}
      >
        Click
      </button> */}
      <div style={{color:"pink"}}>

       <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
      </div>
      <div style={{width:700, scale:1, height:getHeight(700)}}>

      <PDFViewer  showToolbar={false} width={'100%'} height={'99%'} >
        <MyDocument />
      </PDFViewer>
      </div>
    </div>
  );
};

export default index;
