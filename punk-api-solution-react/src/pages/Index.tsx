export function Index(): JSX.Element {
  return (
    <>
      <section>
        <h2>Your random beer of the day!</h2>
        <article className="random-beer">
          <div className="loader"></div>
        </article>
      </section>
      <footer>
        <button>Generate new random beer</button>
      </footer>
    </>
  );
}
