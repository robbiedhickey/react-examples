var AddCardForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="github login" ref="login" />
                <button>Add</button>
                <hr/>
            </form>
        );
}
});