export function PhotosShow({ photo }) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {photo.name}</p>
      <p>Width: {photo.width}</p>
      <p>Height: {photo.height}</p>
    </div>
  );
}
