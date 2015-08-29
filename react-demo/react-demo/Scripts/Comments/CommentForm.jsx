﻿var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        console.log(this);
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Text: text });
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return;
    },
    render: function () {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Your name" ref="author" />
            <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />
          </form>
      );
    }
});