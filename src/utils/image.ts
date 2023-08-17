import axios from "axios";

export const uploadImage = async (image: string) => {
  const imageFile = image;

  const formData = new FormData();
  formData.append("file", imageFile[0]);
  formData.append("upload_preset", "yqpnf8zd");
  formData.append("cloud_name", "ddwqzra81");

  return await axios
    .post("https://api.cloudinary.com/v1_1/ddwqzra81/image/upload", formData)
    .then((response) => {
      return response.data.secure_url;
    });
};
