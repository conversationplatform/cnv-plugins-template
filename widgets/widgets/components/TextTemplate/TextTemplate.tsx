import React from 'react'
import parse from 'html-react-parser'
import './TextTemplate.scss'

import md from 'markdown-it';
const markdown = md();

export type TextPropsTemplate = {
  text: string
}
export default class TextTemplate extends React.Component<TextPropsTemplate> {

  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='texts'>
        <div className='main'>
          {this.renderContent()}
        </div>
      </div>
    )
  }

  private renderContent() {
      return (
        <div className='text'>
          {this.renderText()}
        </div>
      )
  }

  private renderText() {
    return <>{parse(markdown.render(this.props.text || ''))}</>
  }
}
