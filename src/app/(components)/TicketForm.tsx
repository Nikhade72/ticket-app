import React, { useState } from "react";
import Link from "next/link";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Link href="/TicketPage/new">
        <a>Create New Ticket</a>
      </Link>
      <h1>Create New Ticket</h1>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
