import React from "react";
import { Button, Icon, Select, TextInput, Textarea, } from "react-materialize";
const handleSubmit =(e)=> {
    e.preventDefault()
  }

const Contact = () => {
  return (
    <div>
      
        
        <form className="contact" onSubmit={handleSubmit}>
        <div className="subcontact">
        <h3>Contact If U Want Update movies ur like</h3>
        <TextInput id="TextInput-31" label="Your Name" />
        <TextInput id="TextInput-31" label="Your Phone" />
        <TextInput email id="TextInput-44" label="Email" validate />
        
        <Select
          id="Select-46"
          multiple={false}
          onChange={function noRefCheck() {}}

          value=""
        >
          <option disabled value="">
            Choose your  category Movies your Like
          </option>
          
          <option value="1">Horror</option>
          <option value="2">Drama</option>
          <option value="3">Action</option>
          <option value="4">Scientis</option>
          <option value="5">romantic</option>
        </Select>
        <Textarea
          icon={<Icon></Icon>}
          placeholder="Your Message about movies your like"
          id="Textarea-28"
        /><Button node="button" type="submit" waves="light">
          Submit
          
        </Button>
        </div>
        
      </form>
      
    </div>
  );
};

export default Contact;
