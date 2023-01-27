import React from 'react';

const Article = () => {
  return (
    <article className="content-container">
      <h1 class="reder ">Sartre's List</h1>
      <time datetime="2015-08-07">7 Aug 2015</time>
      <h2 >On the Street in Brooklyn</h2>
      <img src="/images/blog-image-1.jpg" alt="" className="aligner" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, neque
        obcaecati dolores fugit ducimus, quibusdam atque ipsam quasi velit cum
        eaque reiciendis in mollitia ea possimus laborum nihil aperiam enim?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, autem
        eligendi amet pariatur dolore eius cumque a saepe rerum, temporibus quia,
        in et culpa necessitatibus sint fugiat? Ipsum, vero saepe.
      </p>
     <a href="..." alt="" className="reder p-switch">
        Continues
      </a>
    </article>
  );
};

export default Article;
