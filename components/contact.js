import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    const resizeTextArea = () => {
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight}px`;
    };
    
    textArea.addEventListener('input', resizeTextArea);
    resizeTextArea(); // Initialize size

    return () => {
      textArea.removeEventListener('input', resizeTextArea);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-left mb-2">Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left mb-2">Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left mb-2">Message:</label>
          <textarea 
            ref={textAreaRef} 
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border p-2 w-full resize-none"
          ></textarea>
        </div>
        
        <button type="submit" className="hover:bg-indigo-700 hover:scale-110 transition duration-300 ease-in-out bg-rose-900 text-white p-2">
          Send
        </button>
      </form>
    </div>
  );
}