import axios from "axios";

export const uploadImage = async (image: string) => {
  const imageFile = image;

  const formData = new FormData();
  formData.append("file", imageFile[0]);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_VAR_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("cloud_name", import.meta.env.VITE_VAR_CLOUDINARY_CLOUD_NAME);

  return await axios
    .post(import.meta.env.VITE_URL_CLOUDINARY, formData)
    .then((response) => {
      return response.data;
    });
};
