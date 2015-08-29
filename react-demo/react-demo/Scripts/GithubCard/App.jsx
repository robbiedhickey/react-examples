var Main = React.createClass({
    getInitialState: function(){
        return { logins: ['petehunt', 'fisherwebdev'] };
    },
    addCard: function(loginToAdd){
        this.setState({ logins: this.state.logins.concat(loginToAdd) });
    },
    render: function () {
        var cards = this.state.logins.map(function (login) {
            return (<Card login={login}/>);
        });
        return (
            <div>
                <h2 className="page-header">Github Card App</h2>
                <AddCardForm addCard={this.addCard} />
                {cards}
            </div>
        );
    }
});

React.render(
    <Main />,
    document.getElementById('content')
);