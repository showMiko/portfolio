import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import C_Sharp from "../assets/Tech Skills/C Sharp.png"
import Clang from "../assets/Tech Skills/C.png"
import css from "../assets/Tech Skills/css.png"
import HTMLpic from "../assets/Tech Skills/html.png"
import java from "../assets/Tech Skills/java.png"
import js from "../assets/Tech Skills/JS.png"
import MERN from "../assets/Tech Skills/MERN.png"
import Python from "../assets/Tech Skills/python.png"
import Unity from "../assets/Tech Skills/unity.png"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  width: 10%;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
  transform: ${(props) =>
    `rotate(${props.rotate}deg) translateY(-200px) rotate(${-props.rotate}deg)`};
`;

const Carousel = () => {
  const [items, setItems] = useState([
    { id: 1, imgUrl: C_Sharp},
    { id: 2, imgUrl: Clang },
    { id: 3, imgUrl: HTMLpic },
    { id: 4, imgUrl: css },
    { id: 5, imgUrl: js },
    { id: 6, imgUrl: MERN },
    { id: 7, imgUrl: java },
    { id: 8, imgUrl: Unity },
    { id: 9, imgUrl: Python },
  ]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, items.length]);

  return (
    <Container>
      {items.map((item, index) => (
        <Item

          key={item.id}
          rotate={(index * 360) / items.length + 360 / (2 * items.length)}
          style={{background:"transparent",
            transform: `rotate(${
              ((index - current + items.length) % items.length) *
              (360 / items.length)
            }deg) translateY(-100%) rotate(${
              -((index - current + items.length) % items.length) *
              (360 / items.length)
            }deg)`,
          }}
        >
          <img src={item.imgUrl}  alt="" srcset="" />
        </Item>
      ))}
    </Container>
  );
};

export default Carousel;
