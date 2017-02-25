import React from 'react';
import classnames from 'classnames';

class GameForm extends React.Component {
  state = {
    _id: this.props.game ? this.props.game._id : null,
    title: this.props.game ? this.props.game.title : '',
    cover: this.props.game ? this.props.game.cover : '',
    errors: {},
    isLoading: false,
    addMore: false
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.continueAdding) {
      this.setState({
        _id: null,
        title: '',
        cover: '',
        errors: {},
        isLoading: false
      });
    } else {
      this.setState({
        _id: nextProps.game._id,
        title: nextProps.game.title,
        cover: nextProps.game.cover
      });
    }
  }
  
  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ 
        [e.target.name]: e.target.value, 
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    // client side validation 
    let errors = {};
    if (this.state.title === '') errors.title = 'This field is required';
    if (this.state.cover === '') errors.cover = 'This field is required';
    this.setState({ errors });
    
    const isValid = Object.keys(errors).length === 0;
    
    if (isValid) {
      const { _id, title, cover, addMore } = this.state;
      this.setState({ isLoading: true });
      // save to db and server side validation happening here
      this.props.saveGame({ _id, title, cover, addMore })
        .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
    }
  }
  
  handleCheckBox = (e) => {
    if (e.target.checked) {  
      this.setState({ addMore: true });
    } else {
      this.setState({ addMore: false });
    }
  }
  
  render() {
    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.isLoading })} onSubmit={this.handleSubmit}>
        
        <h1>Add New Game</h1>
        
        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
        
        <div className={classnames('field', { error: !!this.state.errors.title })}>
          <label htmlFor="title">Title</label>
          <input 
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>
        
        <div className={classnames('field', { error: !!this.state.errors.cover })}>
          <label htmlFor="cover">Cover URL</label>
          <input 
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            id="cover"
          />
          <span>{this.state.errors.cover}</span>
        </div>
        
        <div className="field">
          {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
        </div>
        
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
        
        <div className="field">
          <div className="ui checkbox">
            <input onChange={this.handleCheckBox} type="checkbox" tabIndex="0" id="check-box"/>
            <label htmlFor="check-box">Save and continue adding more games</label>
          </div>
        </div>
        
        
      </form>
    );
    return (
      <div>
        { form }
      </div>
    );
  }
}

export default GameForm;
