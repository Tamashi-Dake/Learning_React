import { useState } from "react";
const images = [
  { id: 1, content: "something" },
  { id: 2, content: "something1" },
  { id: 3, content: "something2" },
];
const Carosal = () => {
  const [currentItem, setCurrentItem] = useState(0);
  function handleBack() {
    currentItem !== 0
      ? setCurrentItem(currentItem - 1)
      : setCurrentItem(images.length - 1);
  }
  function handleNext() {
    currentItem !== images.length - 1
      ? setCurrentItem(currentItem + 1)
      : setCurrentItem(0);
  }
  return (
    <>
      <section>
        <button onClick={handleBack}>Back</button>
        <div id="contentWapper">
          <p> {images[currentItem].content}</p>
        </div>
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );
};

export default Carosal;
