import PropTypes from 'prop-types';

const Greeting = (props) => {
  console.log(props);
  const {name, age, isTeacher} = props;
  let teacherText = '';
  if (isTeacher) {
    teacherText = '(And a teacher.)'
  } else {
    teacherText = '(NOT a teacher.)'
  }

  return (
    <>
      <div>Greetings mortal. Thou ist {name} of age {age}. {teacherText}</div>
    </>
  );
};

//kevyt tyyppitarkastus
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isTeacher: PropTypes.bool,
}

export default Greeting;
