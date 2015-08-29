var CommentBox = React.createClass({
    loadCommentsFromServer: function () {
        var that = this;
        $.get(that.props.url, function (data) {
            that.setState({ data: data });
        });
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.post(this.props.submitUrl, { comment });
    },
    getInitialState: function () {
        return { data: [] };
    },
    componentWillMount: function () {
        this.loadCommentsFromServer();
        window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            <div className="commentBox">
                <h2 className="page-header">Comments App</h2>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});