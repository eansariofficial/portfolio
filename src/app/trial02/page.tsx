"use client";
import React, { useState } from "react";
import ReactPDF, { Font, Image, Line } from "@react-pdf/renderer";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
  PDFDownloadLink,
} from "@react-pdf/renderer";
Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      src: `/fonts/Ubuntu-Bold.ttf`
    },
    // {
    //   src: `/Roboto-Bold.ttf`,
    //   fontWeight: 'bold'
    // },
    // {
    //   src: `/Roboto-Italic.ttf`,
    //   fontWeight: 'normal',
    //   fontStyle: 'italic'
    // },
    // {
    //   src: `/Roboto-BoldItalic.ttf`,
    //   fontWeight: 'bold',
    //   fontStyle: 'italic'
    // }
  ]
})
const index = () => {
  const [name, setName] = useState("Your Name");
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
    },
    section: {},
    name: {
      // whiteSpace: "preWrap",
      paddingBottom: "2px",
      fontWeight: 500,
      fontFamily: 'Ubuntu',
      color: "#000000",
      fontSize: "38px",
      lineHeight: 1,
    },
  });
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </Page>
    </Document>
  );

  function getHeight(width: number) {
    return width * 1.41;
  }
  return (
    <div id="main" style={{ width: "100%" }}>
      <div style={{ color: "pink" }}>
        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
      <div style={{ width: 700, scale: 1, height: getHeight(700) }}>
        <PDFViewer showToolbar={false} width={"100%"} height={"99%"}>
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default index;
