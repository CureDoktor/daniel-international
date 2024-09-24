"use client";
import React from "react"; // Add this if it's missing
import { useState, useEffect } from "react";
import Navbartwo from "../components/Navbartwo";
import CategoryScores from "../components/CategoryScores";
import Footer from "../components/Footer";

export default function Checkout() {
  const testResult = localStorage.getItem("finalScoreEQ");
  console.log(testResult);

  var parsedTestResult = "";

  if (testResult) {
    parsedTestResult = JSON.parse(testResult);
  }

  console.log(parsedTestResult);

  // const {
  //   emotionalResult,
  //   selfResult,
  //   socialResult,
  //   relationshipResult,
  //   adaptableResult,
  //   totalResult,
  // } = testResults(emotional, self, social, relationship, adaptable, totalScore);

  return (
    <div>
      <Navbartwo />
      <div className="m-auto  max-w-full md:max-w-[1200px] my-10 p-5 mx-auto py-24 text-black">
        <CategoryScores
          emotionalResult={parsedTestResult.emotional}
          selfResult={parsedTestResult.self}
          socialResult={parsedTestResult.social}
          relationshipResult={parsedTestResult.relationship}
          adaptableResult={parsedTestResult.adaptable}
          totalResult={parsedTestResult.totalScore}
        />
      </div>
      <Footer />
    </div>
  );
}
