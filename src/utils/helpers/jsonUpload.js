export default function handleUpload(file, setElementsFn) {
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);
      setElementsFn(jsonData);
    };
    reader.readAsText(file);
  }
};
