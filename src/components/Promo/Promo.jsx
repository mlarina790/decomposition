import React from 'react';

/**
  * Отображает блок c рекламой
  *
  * @param {Object} item - данные о рекламе
  */

export default function Promo({item}) {
  const {link, url, title} = item;

  return (
    <div className="promo-block">
      <a href={link}>
        <img src={url} alt={title} />
      </a>
    </div>
  )
}