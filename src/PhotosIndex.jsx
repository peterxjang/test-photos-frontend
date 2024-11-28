export function PhotosIndex({ photos }) {
  return (
    <div>
      <h1>All photos ({photos.length} total)</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>Name: {photo.name}</h2>
          <p>Width: {photo.width}</p>
          <p>Height: {photo.height}</p>
        </div>
      ))}
    </div>
  );
}
