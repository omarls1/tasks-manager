import Box from "../components/appointment/box";

export default function Appointment({ query, tasks, onSetTasks }) {
  const filtredTasks = tasks
    .filter((item) => item.title.includes(query) && item)
    .reverse();
  return (
    <section className="appointment">
      <h2>قائمة مواعيدي</h2>
      <div className="task-container">
        {filtredTasks.length === 0 ? (
          <p className="notFound">لم يتم العثور على اي مواعيد 😓 </p>
        ) : (
          filtredTasks.map((task, index) => (
            <Box item={task} key={index} onSetTasks={onSetTasks} />
          ))
        )}
      </div>
    </section>
  );
}
