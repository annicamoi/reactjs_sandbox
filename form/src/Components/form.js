import React from "react";

const Form = (props) => {
  return (
    <section className="form-container">
      <form id="form" onSubmit={props.submit}>
        <div className="user-input">
          <label htmlFor="firstName">First name </label>
          <input
            onChange={props.input}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Jane"
            required
          />
        </div>
        <div className="user-input">
          <label htmlFor="lastName">Last name </label>
          <input
            onChange={props.input}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            required
          />
        </div>
        <div className="user-input">
          <label htmlFor="phoneNumber">Phone Number </label>
          <input
            onChange={props.input}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="\+?\s*([0-9][\s-]*){1,15}$"
            placeholder="+358 xxx xxx"
            required
          />
        </div>
        <div className="user-input">
          <label htmlFor="role">Role </label>

          <select
            onChange={props.input}
            name="role"
            id="role"
            form="form"
            required
          >
            <option value="">Choose</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>
        <div className="user-input">
          <label htmlFor="message">Message </label>
          <textarea
            onChange={props.input}
            name="message"
            id="message"
            placeholder="Write a message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;