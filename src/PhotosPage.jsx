import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  const handleIndex = () => {
    axios.get("/photos.json").then((response) => {
      console.log(response);
      setPhotos(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PhotosIndex photos={photos} />
    </main>
  );
}
