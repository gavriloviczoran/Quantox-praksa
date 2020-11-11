import React, { Component } from 'react';




class Form extends React.Component {
    render() {
        return (
            <form> 
                <label for="UserName">FIRST NAME:  <span>*</span></label>
                <input type="text" id="UserName" name="UserName" required/>

                <label for="UserLastName">LAST NAME:  <span>*</span></label>
                <input type="text" id="UserLastName" name="UserLastName" required/>

                <label for="email">WORK EMAIL:  <span>*</span></label>
                <input type="text" id="email" name="email" required/>

                <label for="Company">COMPANY:  <span>*</span></label>
                <input type="text" id="Company" name="Company" required/>

                <label for="Companysize">COMPANY SIZE:  <span>*</span></label>
                  <select name="Companysize" required>
                      <option value=""></option>
                      <option value="Micro">Micro (1-9)</option>
                      <option value="Small">Small (10-49)</option>
                      <option value="Medium Low">Medium Low (50-99)</option>
                      <option value="Medium High">Medium High (100-249)</option>
                      <option value="Large Low">Large Low (250-499)</option>
                      <option value="Large High">Large High (500 or more)</option>
                  </select>

                <label for="PhoneNumber">PHONE NUMBER:  <span>*</span></label>
                <input type="text" id="PhoneNumber" name="PhoneNumber" required/>

                <input type="submit" value="SUBMIT"/>
            </form>
        );
    }
}


export default Form;