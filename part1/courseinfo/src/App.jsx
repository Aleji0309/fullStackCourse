const Header = (props) => {
  return (
    <>
      <p>Course Name: {props.course} </p>
    </>
  );
};

const Content = ({ division, exercises }) => {
  return (
    <>
      <p>Content: {division} Number of Excerices: {exercises} </p>
      
    </>
  );
};

const Total = ({ total }) => {
  return <> <p>Total: {total} </p> </>;
};

const App = () => {
  const course = "Half Stack application development";

  const division = {
    part1: "Fundamentals of React",
    part2: "Using props to pass data",
    part3: "State of a component",
  };

  const exercises = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14,
  };

  const total = exercises.exercises1 + exercises.exercises2 + exercises.exercises3;

  return (
    <div>
      <Header course={course} />

      <Content division={division.part1} exercises={exercises.exercises1} />
      <Content division={division.part2} exercises={exercises.exercises2} />
      <Content division={division.part3} exercises={exercises.exercises3} />

      <Total total={total} />
    </div>
  );
};

export default App;
