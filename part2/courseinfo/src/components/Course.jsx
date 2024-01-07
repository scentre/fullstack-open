const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const total = (data) => data.reduce((acc, curr) => acc + curr.exercises, 0);

const Course = ({ courses }) => {
  return (
    <div>
      <Header title="Web development curriculum" />
      <div>
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <h1> {course.name}</h1>

              {course.parts.map((each) => (
                <p key={each.id}>
                  {each.name} {each.exercises}
                </p>
              ))}
              <h3>total of {total(course.parts)} exercises</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
