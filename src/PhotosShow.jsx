export function PhotosShow({ photo, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(photo, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {photo.name}</p>
      <p>Width: {photo.width}</p>
      <p>Height: {photo.height}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={photo.name} name="name" type="text" />
        </div>
        <div>
          Width: <input defaultValue={photo.width} name="width" type="text" />
        </div>
        <div>
          Height: <input defaultValue={photo.height} name="height" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
