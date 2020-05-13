import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './state-drills/Accordion';
import AccordionData from './state-drills/Accordion-data';
import './index.css';

ReactDOM.render(<Accordion sections={AccordionData.sections} />, document.getElementById('root'));
