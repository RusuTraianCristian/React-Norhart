import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
    tableLayout: "fixed",
    width: "100%",
    backgroundColor: "#dfdfdf",
    fontFamily: "Arial",
    fontWeight: "100",
    padding: "10px 0"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
    backgroundColor: "lightsteelblue"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      marginBottom: "40px",
      width: "100%"
    },
    inputs: {
      marginBottom: "5px"
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      outline: "none",
      backgroundColor: "lightsteelblue",
      fontSize: "12px",
      lineHeight: "14px",
      fontWeight: "100",
      cursor: "pointer",
      width: "177px"
    }
  }
};

function PhoneBookForm({ phoneBookProps }) {
  const {
    placeholders,
    formInputs,
    setFormInputs,
    submitContact
  } = phoneBookProps;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        placeholder={placeholders.firstName}
        value={formInputs.firstName}
        onChange={(e) =>
          setFormInputs({ ...formInputs, firstName: e.target.value })
        }
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        placeholder={placeholders.lastName}
        value={formInputs.lastName}
        onChange={(e) =>
          setFormInputs({ ...formInputs, lastName: e.target.value })
        }
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        placeholder={placeholders.phoneNumber}
        value={formInputs.phoneNumber}
        onChange={(e) =>
          setFormInputs({ ...formInputs, phoneNumber: e.target.value })
        }
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onClick={() => submitContact(formInputs)}
      />
    </form>
  );
}

function InformationTable({ contactList }) {
  const sortedContactList = contactList.sort((prev, next) =>
    prev.lastName.localeCompare(next.lastName)
  );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      {sortedContactList.map((contact, index) => (
        <thead key={index}>
          <tr>
            <th>{contact.firstName}</th>
            <th>{contact.lastName}</th>
            <th>{contact.phoneNumber}</th>
          </tr>
        </thead>
      ))}
    </table>
  );
}

const Application = () => {
  const [contactList, setContactList] = useState([]);

  const [placeholders] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phoneNumber: 8885559999
  });

  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  });

  const submitContact = (contact) => {
    setContactList([...contactList, contact]);
  };

  return (
    <section>
      <PhoneBookForm
        phoneBookProps={{
          placeholders,
          formInputs,
          setFormInputs,
          submitContact
        }}
      />
      <InformationTable contactList={contactList} />
    </section>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
