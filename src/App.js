import React from 'react';
import './App.css';
// import Counter from './Counter/Counter';
// import HelloWorld from './state-drills/HellowWorld'
// import Bomb from './state-drills/Bomb'
// import RouletteGun from './state-drills/RouletteGun';
// import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

// const tabsProp = [
//   {name: 'First tab',
//    content: 'Lorem ipsum dolor sit amet consectetur'},
//   {name: 'Second tab',
//    content: 'Laboriosam exercitationem quos consectetur '},
//   {name: 'Third tab',
//    content: 'Fugit, sapiente aspernatur corporis velit'},
// ];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
// e.g. <Accordion sections={sections} />

function App() {
  return (
    <Accordion sections={sections} />
  );
}

export default App;
