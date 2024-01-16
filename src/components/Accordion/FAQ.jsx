import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 p-4 w-[600px] rounded-lg ">
        <Accordion
          title="Python"
          answer="The easiest programming language used among developers is Python. It is an object-oriented programming language. The language has a high-Level data structure, and built-in libraries, that make it easy to use and suitable for rapid application development. It is easy, decoded and has a dynamic semantic language. "
        />
        <Accordion
          title="Javascript"
          answer="JavaScript is a high-level programming language that is one of the core technologies of the World Wide Web. It is used as a client-side programming language by 97.8 percent of all websites. JavaScript was originally used only to develop web browsers, but they are now used for server-side website deployments and non-web browser applications as well. "
        />
        <Accordion
          title="Java"
          answer="Java is widely used in web and application development as well as big data. Java is also used on the backend of several popular websites, including Google, Amazon, Twitter, and YouTube."
        />
      </div>
    </div>
  );
};

export default FAQ;
