import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    console.log({
      service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          time: new Date().toLocaleString(),
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center  px-4">
      {/* Heading */}
      <h1 className=" text-center text-4xl font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-600 after:mx-auto after:mt-3 after:mb-3 after:rounded-full ">
        Contact
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full h-10 rounded-md bg-white border border-gray-900 px-3 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-200 focus:ring-blue-500"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full h-10 rounded-md bg-white border border-gray-900 px-3 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-200 focus:ring-blue-500"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={`w-full rounded-md bg-white border border-gray-900 px-3 py-2 resize-none focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-200 focus:ring-blue-500"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            disabled={loading}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50">
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Success */}
        {success && (
          <p className="text-green-600 text-sm text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
