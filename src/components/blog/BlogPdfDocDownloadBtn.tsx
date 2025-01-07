"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  content: {
    fontSize: 12,
    marginBottom: 12,
    lineHeight: 1.5,
  },
  boldText: {
    fontWeight: "bold",
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tag: {
    fontSize: 10,
    marginRight: 8,
    padding: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
});

// Function to process the content with formatting
const formatContent = (content: string) => {
  const lines = content.split("<line-break/>");
  return lines.map((line, lineIndex) => (
    <Text key={lineIndex} style={styles.content}>
      {line.split(/(\*\*.*?\*\*)/g).map((part, partIndex) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <Text key={partIndex} style={styles.boldText}>
            {part.slice(2, -2)}
          </Text>
        ) : (
          part
        )
      )}
    </Text>
  ));
};

// PDF document structure
const BlogPDFDocDownloadBtn = ({
  title,
  content,
  keywords,
  tags,
  category,
  metaDescription,
}: {
  title: string;
  content: string;
  keywords: string[];
  tags: string[];
  category: string;
  metaDescription: string;
}) => {
  const handleExportPDF = async () => {
    // Create the PDF document
    const document = (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.section}>{formatContent(content)}</View>
          <View style={styles.section}>
            <Text style={styles.heading}>Meta Description</Text>
            <Text style={styles.content}>{metaDescription}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Category</Text>
            <Text style={styles.tag}>{category}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Tags</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Keywords</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {keywords.map((keyword, index) => (
                <Text key={index} style={styles.tag}>
                  {keyword}
                </Text>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    );

    // Generate PDF blob
    const blob = await pdf(document).toBlob();

    // Create a blob URL and open in a new tab
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleExportPDF}
        className="px-8 py-2 flex items-center justify-center bg-blue-500 text-white rounded gap-4 text-[1.8rem] font-semibold"
      >
        <p>Generate</p>
        <FontAwesomeIcon icon={faFilePdf} />
      </button>
    </div>
  );
};

export default BlogPDFDocDownloadBtn;
