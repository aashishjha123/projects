
import $ from "jquery";
import React, { Component, createRef } from "react";



window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
    {
      type: "header",
      subtype: "h1",
      label: "formBuilder in React"
    },
    {
      type: "paragraph",
      label: "This is a demonstration of formBuilder running in a React project."
    }
  ];

  class FormBuilder extends Component {
    fb = createRef();
    componentDidMount() {
      $(this.fb.current).formBuilder({ formData });
    }
  
    render() {
      return <div id="fb-editor" ref={this.fb} />;
    }
  }

export default function NewDrag() {
  return (
    <FormBuilder />
  )
}

