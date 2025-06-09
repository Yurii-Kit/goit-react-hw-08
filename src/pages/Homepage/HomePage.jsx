const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div>
        <h1 style={styles.title}>
          Contacts manager
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p style={{ textAlign: 'center' }}>
          This is a simple contacts manager application built with React.
          <br />
          You can add, edit, and delete contacts.
        </p>
      </div>
    </>
  );
}
