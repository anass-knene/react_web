import React from "react";
import Logo from "../components/navbar/Logo";
import Nav from "../components/navbar/Nav";
import NavSearch from "../components/navbar/NavSearch";
import Hero from "../components/hero/Hero";
import SectionFlex from "./sectionFlex/SectionFlex";
import FourSections from "./FourSections/FourSections";
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
// import "../components/hero/hero.scss";
// import LiveEditors from "./LiveEditors/LiveEditors";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="navBar">
          <Logo />
          <Nav />
          <NavSearch />
        </div>
        <Hero />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid rgba(220,220,210,0.9)",
          marginRight: "12rem",
          marginLeft: "12rem",
        }}
      >
        <SectionFlex
          title="Declarative"
          para1="React makes it painless to create interactive UIs.
           Design simple views for each state in your application,
            and React will efficiently update and render just the right components when your data changes."
          para2="Declarative views make your code more predictable and easier to debug."
        />

        <SectionFlex
          title="Component-Based"
          para1="Build encapsulated components that manage their own state, then compose them to make complex UIs."
          para2="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
        />

        <SectionFlex
          title="Learn Once, Write Anywhere
"
          para1="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
          para2="React can also render on the server using Node and power mobile apps using  React Native."
        />
      </div>
      <div className="fourSections">
        <FourSections
          BigHeader="A Simple Component"
          para1="React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."
          paraHeader="JSX is optional and not required to use React. "
          para2="Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step."
          code="class HelloMessage extends React.Component {
            render() {
    return (
      <div>
        Hello 
      </div>
    );
  }
}"
        />
      </div>
      <div className="fourSections">
        <FourSections
          BigHeader="A Stateful Component"
          para1="In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."
          code="class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
    render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

"
        />
        <FourSections
          BigHeader="An Application"
          para1="Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."
          code="class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>
            What needs to be done?
          </label>
          <input
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

"
        />
        <FourSections
          BigHeader="A Component Using External Plugins"
          para1="React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time."
          code="class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className='MarkdownEditor'>
        <h3>Input</h3>
        <label htmlFor='markdown-content'>
          Enter some markdown
        </label>
        <textarea
          id='markdown-content'
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className='content'
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}


);"
        />
      </div>
      {/* // "start": "react-scripts start", */}
      <div className="headerButton">
        <Button />
      </div>
      {/* <div><Footer /></div> */}
    </div>
  );
}

export default App;
