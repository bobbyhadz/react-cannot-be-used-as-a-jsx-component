const App = () => {
  return (
    <>
      {['a', 'b', 'c'].map(element => {
        return <h2 key={element}>{element}</h2>;
      })}
    </>
  );
};

export default App;
