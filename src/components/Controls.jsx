export default function Controls({ sortAsc, sortDesc, submit, disabled }) 
{
  return (
    <div className="controls">
      <button onClick={sortAsc}>Sort ASC</button>
      <button onClick={sortDesc}>Sort DESC</button>
      <button onClick={submit} disabled={disabled}>
        Submit
      </button>
    </div>
  );
}
