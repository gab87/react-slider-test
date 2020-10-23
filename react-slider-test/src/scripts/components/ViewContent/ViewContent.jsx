import React, {useRef} from 'react';

export const ViewContent = ({content}) => {
  const {photoCredits, date} = content

  return (
    <div className="view-content">
      <p className="view-content__credits" dangerouslySetInnerHTML={{__html: photoCredits}}/>
      <p className="view-content__date">
        {date}
      </p>
      <a href="/" className="view-content__cta js-fill-pointer-circle">
        HAVE A LOOK
        <span />
      </a>
    </div>
  )
}