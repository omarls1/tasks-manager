import { useState, useRef } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useLocaleStorageState } from "./custom-hooks/useLocalStorageState";
import Appointment from "./views/appointment";
import AppointmentForm from "./views/appointmentForm";
import Categories from "./views/categories";

const inialTasks = [
  {
    title: "إنهاء التقرير الشهري",
    description: "كتابة تقرير عن أداء الفريق لشهر أكتوبر",
    dueDate: new Date("2023-10-31"),
    priority: "high",
    category: { name: "عمل", color: "#00B4D8" },
    tags: ["تقرير", "فريق"],
    reminders: [new Date("2023-10-30T10:00:00")],
    completed: true,
  },
  {
    title: "شراء البقالة",
    description: "شراء الخضروات والفواكه من السوق",
    dueDate: new Date("2023-10-20"),
    priority: "medium",
    category: { name: "شخصي", color: "#B388EB" },
    tags: ["تسوق", "منزل"],
    reminders: [new Date("2023-10-19T18:00:00")],
    completed: false,
  },
  {
    title: "مذاكرة React.js",
    description: "مراجعة مفاهيم React.js وإكمال المشروع",
    dueDate: new Date("2023-10-25"),
    priority: "high",
    category: { name: "دراسة", color: "#FF6B6B" },
    tags: ["برمجة", "React"],
    reminders: [new Date("2023-10-24T09:00:00")],
    completed: false,
  },
  {
    title: "حجز تذكرة سفر",
    description: "حجز تذكرة سفر إلى دبي",
    dueDate: new Date("2023-11-05"),
    priority: "medium",
    category: { name: "سفر", color: "#FFD166" },
    tags: ["ترتيبات", "رحلات"],
    reminders: [new Date("2023-11-04T12:00:00")],
    completed: false,
  },
  {
    title: "ممارسة الرياضة",
    description: "الذهاب إلى النادي الرياضي لمدة ساعة",
    dueDate: new Date("2023-10-22"),
    priority: "low",
    category: { name: "صحة", color: "#06D6A0" },
    tags: ["لياقة", "رياضة"],
    reminders: [new Date("2023-10-21T17:00:00")],
    completed: false,
  },
  {
    title: "قراءة كتاب",
    description: "قراءة كتاب 'العادات الذرية'",
    dueDate: new Date("2023-11-10"),
    priority: "medium",
    category: { name: "تطوير الذات", color: "#A663CC" },
    tags: ["قراءة", "كتب"],
    reminders: [new Date("2023-11-09T20:00:00")],
    completed: false,
  },
  {
    title: "اجتماع مع الفريق",
    description: "مناقشة خطة العمل للأسبوع القادم",
    dueDate: new Date("2023-10-23"),
    priority: "high",
    category: { name: "عمل", color: "#00B4D8" },
    tags: ["اجتماع", "فريق"],
    reminders: [new Date("2023-10-22T09:00:00")],
    completed: false,
  },
  {
    title: "تحديث البروفايل الشخصي",
    description: "إضافة المهارات الجديدة إلى البروفايل على LinkedIn",
    dueDate: new Date("2023-10-28"),
    priority: "medium",
    category: { name: "تطوير الذات", color: "#A663CC" },
    tags: ["تواصل", "مهنية"],
    reminders: [new Date("2023-10-27T15:00:00")],
    completed: false,
  },
];

export default function App() {
  const [showSidebar, setShowSidebar] = useLocaleStorageState("showSide");
  const [path, setPath] = useState(window.location.pathname);
  const [tasks, setTasks] = useLocaleStorageState("tasks", inialTasks);

  const [query, setQuery] = useState("");

  const sidebar = useRef(null);

  const handleShowSide = () => {
    sidebar.current?.classList.add("close");

    setTimeout(
      () => {
        setShowSidebar((v) => !v);
        sidebar.current?.classList.remove("close");
      },
      showSidebar ? 300 : 0
    );
  };

  const handlePath = (newPath) => {
    if (path !== newPath) {
      window.history.pushState({}, "", newPath);
      setPath(newPath);
    }
  };

  return (
    <div>
      <Header
        onShowSidebar={handleShowSide}
        showSide={showSidebar}
        onSearch={setQuery}
        search={query}
      />
      <main style={{ display: "flex" }}>
        {showSidebar && <Sidebar reference={sidebar} onSetPath={handlePath} />}
        {path === "/" && (
          <Appointment query={query} tasks={tasks} onSetTasks={setTasks} />
        )}
        {path === "/new-appointment" && (
          <AppointmentForm onAddTask={setTasks} />
        )}
        {path === "/categories" && <Categories />}
      </main>
    </div>
  );
}
