import React, { useState } from "react";

export default function AppointmentForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState({ name: "", color: "" });
  const [tags, setTags] = useState([]);
  const [submitText, setsubmitText] = useState("إضافة موعد");

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitText("جار إضافة موعد");

    const newTask = {
      title,
      description,
      dueDate: new Date(dueDate),
      priority,
      category,
      tags: tags.length > 0 ? tags.split(",").map((tag) => tag.trim()) : "",
      completed: false,
    };

    onAddTask((tasks) => [...tasks, newTask]);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");
    setCategory({ name: "", color: "" });
    setTags("");
    setTimeout(() => {
      setsubmitText("إضافة موعد");
    }, 500);
  };

  return (
    <section className="add-appointment">
      <h2>إضافة موعد جديد</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <div className="form-section">
            <div className="form-group">
              <label>العنوان:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>الوصف:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>تاريخ الاستحقاق:</label>
              <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>الأولوية:</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="high">عالي</option>
                <option value="medium">متوسط</option>
                <option value="low">منخفض</option>
              </select>
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label>الفئة:</label>
              <input
                type="text"
                placeholder="اسم الفئة"
                value={category.name}
                onChange={(e) =>
                  setCategory({ ...category, name: e.target.value })
                }
                required
              />
              <input
                type="color"
                value={category.color}
                onChange={(e) =>
                  setCategory({ ...category, color: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>الوسوم (مفصولة بفاصلة):</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <button type="submit" className="submit-btn">
          {submitText}
        </button>
      </form>
    </section>
  );
}
