import React from 'react'
import {CenterSlider} from '../CenterSlider/CenterSlider';
import {ViewContent} from '../ViewContent/ViewContent';

export const View = ({
  handleSetView,
  slides,
  activeView,
  viewContent
}) => {

  return (
    <article className="view">
      <div className="view__background"/>
      <CenterSlider
        slides={slides}
        handleSetView={handleSetView}
        activeView={activeView}
        content={viewContent[activeView].slider}
      />
      <ViewContent content={viewContent[activeView].content} />
    </article>
  )
}