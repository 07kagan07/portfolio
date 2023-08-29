import { useEffect } from "react";
import { useRef } from "react";
import { StyledHero } from "./style";

const Hero = () => {
  const textElement = useRef(null);
  const texts = ["Hello!", "I'm Kağan!", "I'm a Web Developer!"];
  let index = 0;
  let charIndex = 0;

  useEffect(() => {
    if (textElement.current) {
      textElement.current.textContent = "";
      type();
    }
    
    return () => {
      // Temizleyici fonksiyon: Bileşen unmount edildiğinde çalışır
      clearTimeout(typeTimer);
      clearTimeout(eraseTimer);
    };
  }, [textElement]);

  let typeTimer;
  function type() {
    if (charIndex < texts[index].length) {
      textElement.current.textContent += texts[index].charAt(charIndex);
      charIndex++;
      typeTimer = setTimeout(type, 100);
    } else {
      eraseTimer = setTimeout(erase, 1500);
    }
  }

  let eraseTimer;
  function erase() {
    if (charIndex > 0) {
      textElement.current.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      eraseTimer = setTimeout(erase, 50);
    } else {
      index = (index + 1) % texts.length;
      typeTimer = setTimeout(type, 500);
    }
  }

  return (
    <StyledHero id='home' className='w-100 h-100'>
      <h1 ref={textElement}></h1>
    </StyledHero>
  );
};

export default Hero;
