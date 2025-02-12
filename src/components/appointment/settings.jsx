export default function Settings({ task, onSetTasks }) {
  const deleteTask = () => {
    onSetTasks((tasks) => tasks.filter((t) => t.title !== task.title));
  };
  return (
    <div className="settings">
      <ul>
        <li>🖋️ تعديل</li>
        <li onClick={deleteTask}>🗑️ حذف</li>
        <li>📝 إضافة ملاحظة</li>
      </ul>
    </div>
  );
}
