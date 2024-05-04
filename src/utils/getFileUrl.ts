import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";
import { uid } from "uid";

export async function getSingleFileUrl(file: any) {
  let result;

  const storage = getStorage(app);

  const imgRef = ref(storage, `images/${uid()}`);
  try {
    await uploadBytes(imgRef, file);
    const downloadURL = await getDownloadURL(imgRef);

    result = downloadURL;
  } catch (err) {
    console.error("Error uploading image:", err);
  }

  return result;
}
