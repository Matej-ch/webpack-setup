import {wizard} from './wizard'
import {clerik} from './clerik'

import "./style.css";
import "./style2.scss"

console.log('test');

console.log(wizard);

console.log(clerik);

const obj = {
    a: 'Alpha',
    b: 'Beta',
    s: 'Sigma',
    l: 'Ligma'
}

const newObj = {...obj, c: 'charlie' }

const headline = 'Welcome here, EPIC'

document.querySelector('h1').innerText = headline