import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import { PhotosShow } from "./PhotosShow";
import { Modal } from "./Modal";

export function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});

  const handleIndex = () => {
    axios.get("/photos.json").then((response) => {
      console.log(response);
      setPhotos(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/photos.json", params).then((response) => {
      setPhotos([...photos, response.data]);
      successCallback();
    });
  };

  const handleShow = (photo) => {
    console.log("handleShow", photo);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };

  const handleUpdate = (photo, params, successCallback) => {
    console.log("handleUpdate", photo);
    axios.patch(`/photos/${photo.id}.json`, params).then((response) => {
      setPhotos(photos.map((p) => (p.id === photo.id ? response.data : p)));
      setIsPhotosShowVisible(false);
      successCallback();
    });
  };

  const handleDestroy = (photo) => {
    console.log("handleDestroy", photo);
    axios.delete(`/photos/${photo.id}.json`).then(() => {
      setPhotos(photos.filter((p) => p.id !== photo.id));
      setIsPhotosShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PhotosNew onCreate={handleCreate} />
      <PhotosIndex photos={photos} onShow={handleShow} />
      <Modal show={isPhotosShowVisible} onClose={() => setIsPhotosShowVisible(false)}>
        <PhotosShow photo={currentPhoto} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
