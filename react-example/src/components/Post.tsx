const names: string[] = ['Johan', 'Jonas'];

export function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <main>
      <p>{chosenName}</p>
    </main>
  );
}
