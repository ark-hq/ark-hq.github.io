'use client'
import React, { useState } from 'react';
import styles from "@/ui/form.module.css"
import Button from './button';

// Type for form input data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  // Initial form state
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message:'' });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data (e.g., submit to an API, log it, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.content_container}>
          <div className={styles.content}>
              <label htmlFor="name">Name:</label>
              <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              />
          </div>
          <div className={styles.content}>
              <label htmlFor="email">Email:</label>
              <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
          </div>
          <div className={styles.content}>
              <label htmlFor="message">Message:</label>
              <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              />
          </div>
          <Button link='submit' text='Submit' color={true}/>
        </div>
        </form>
    </div>
  );
};

export default Form;
