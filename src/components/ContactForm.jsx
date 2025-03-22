import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    if (!form.name) newErrors.name = "El nombre es obligatorio";
    if (!form.email.includes("@")) newErrors.email = "Correo no válido";
    if (form.message.length < 10) newErrors.message = "Mensaje demasiado corto";
    setErrors(newErrors);
  }, [form]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-yellow-500 text-black text-center p-10">
      <h2 className="text-3xl font-bold text-center">Contáctame</h2>
      <form className="mt-4 space-y-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 font-bold">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 font-bold">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.message && <p className="text-red-500 font-bold">{errors.message}</p>}

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="w-full bg-black text-white py-2 rounded disabled:bg-gray-400"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
