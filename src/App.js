import React, { useState } from "react";
import './App.css';
import { Nav } from './component/Nav';
import { Intro } from './component/Intro';
import { Function } from './component/Function';
import Price  from './component/Price';
import { Footer } from './component/Footer';
import Feedback from './component/Feedback';
import Modal from "./component/Modal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className="App">

      <div>
        {/* Modal 컴포넌트를 표시, isOpen 상태로 열고 닫기 제어 */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <header>
        <Nav className="nav" />
      </header>

      <main>
        <Intro className="intro" />
        <Function className="function"/>
        <Price className="price"/>
        <Feedback className="feedback"/>
      </main>

      <footer>
        <Footer className="footer"/>
      </footer>
    </div>
  );
}

export default App;
