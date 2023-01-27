import React from 'react';
import Article from './Article';
import Article2 from './Article2';
import  images  from '../static/Images';

function Main() {
  return (
    <main>
      <section>
      <Article />
        <img src={images.image1} alt="image1" />
          <hr/> 
          <div>
          <br/> 
          <br/> 
        <Article2 />
          <img src={images.image2} alt="image2" />
          <hr/>  
        </div>
      </section>
      <p class="a-gray">© 2021 Sartre's List</p>

    </main>
  );
}

export default Main;
