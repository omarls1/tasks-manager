import { useState } from "react";
import Settings from "./settings";

export default function Box({ item, onSetTasks }) {
  const [showSettings, setShowSettings] = useState(false);

  function handleCheck(e) {
    onSetTasks((tasks) => {
      return tasks.map((el) =>
        el.title === item.title ? { ...el, completed: !el.completed } : el
      );
    });
  }

  return (
    <div
      className={`item-box ${item.completed ? "completed" : ""}`}
      style={{
        borderTop: `5px solid ${
          item.priority === "high"
            ? "#ff6b6b"
            : item.priority === "low"
            ? "#06d6a0"
            : "#ffd166"
        }`,
      }}
    >
      <header className="item-header">
        <input
          type="checkbox"
          name="completed"
          id="completeditem"
          checked={item.completed}
          onChange={handleCheck}
        />
        <span
          style={{ fontSize: "18px" }}
          onClick={() => setShowSettings((show) => !show)}
        >
          ⚙️
        </span>
        {showSettings && <Settings onSetTasks={onSetTasks} task={item} />}
      </header>
      <hr />
      <main className="item-content">
        <span className="item-category" style={{ color: item.category.color }}>
          {item.category.name}
        </span>
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>
      </main>
      <hr />
      <footer className="item-details">
        <p className="item-due-date">
          تاريخ الاستحقاق: {new Date(item.dueDate).toLocaleDateString("ar-EG")}
        </p>
        <div className="item-tags">
          {item.tags.length > 0 &&
            item.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
        </div>
      </footer>
    </div>
  );
}
