const PreviewPicture = (imgPreview: { imgPreview: string }) => {
  const imgSrc = imgPreview.imgPreview;
  return (
    <a href="/#">
      <img src={imgSrc} alt="Ảnh preview" />
    </a>
  );
};
export default PreviewPicture;
