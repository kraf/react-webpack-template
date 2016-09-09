const React = require('react');
const ReactDOM = require('react-dom');

const Rebase = require('re-base');
const base = Rebase.createClass('*** firebase ***');

window.firebase = base;

const {Router, Route, hashHistory} = require('react-router');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>props</h1>
                <pre>
                    {JSON.stringify(this.props, null, 4)}
                </pre>
                <h1>state</h1>
                <pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>
            </div>
        );
    }

    componentDidMount() {
        base.syncState('test', {
            context: this,
            state: 'test',
            asArray: true
        }); 
    }

    newRecipe(newItem) {
        const recipes = this.state ? (this.state.recipes || []) : [];
        
        this.setState({
            recipes: recipes.concat([newItem])
        });
    }
}

const rootComponent = (
    <Router history={hashHistory}>
        <Route path="(/:book)" component={App} />
    </Router>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
