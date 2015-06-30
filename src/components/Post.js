import React, {PropTypes} from 'react';
import mixins from './mixins';

export default class Post extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    let content = mixins.getPost(this.props.params.slug);
    return <div dangerouslySetInnerHTML={{__html: content.__content}} />
  }
}
