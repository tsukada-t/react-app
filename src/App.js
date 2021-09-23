import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {
      name: "Taro", age: 20
    },
    {
      name: "Hanako", age: 5
    },
    {
      name: "Jiro"
    }
  ]
  return (
    <>
    <p>Hello, World!</p>
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
    </>
  );
}

const User = (props) => {
  const {name, age = "unknown"} = props;
  return (
    <p>I am {name}, and {age} years old!</p>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
