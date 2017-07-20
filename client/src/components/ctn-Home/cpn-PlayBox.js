import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Paper from 'material-ui/Paper';

class PlayBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
                isLoading: false,
                play: null
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: { isLoading: false, play: nextProps.selected }
        }, () => this.setState({
            selected: { isLoading: true, play: nextProps.selected }
        }))
    }

    componentDidMount() {
        setTimeout(() => {
            let styleSheet = document.styleSheets[0];

            let animationName = `animation${Math.round(Math.random() * 100)}`;

            let keyframes = `@-webkit-keyframes rotate {
                            100% { -webkit-transform:rotate(360deg); }
                        }`;

            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        }, 1000)
    }

    render() {
        const { selected: { isLoading, play } } = this.state;
        console.log(12121, play)
        let style = {
            animationName: 'rotate',
            animationTimingFunction: 'linear',
            animationDuration: '30s',
            animationIterationCount: 'infinite',
            borderRadius: "200px",
            position: 'absolute',
            margin: 'auto',
            left: 0,
            right: 0,
        };

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {(!isLoading && !play) && 
                    <img 
                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/17498772_1514617115271556_651453174119308170_n.jpg?oh=077852b1e3e059c4bbc3756e759be5e8&oe=59FCA7A5" 
                    style={imageStyle}
                    />}
                    {(isLoading && play) &&
                        <img
                            src={play.hinh}
                            id="hinh"
                            alt="Smiley face"
                            height="300"
                            width="300" style={style} />}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: play ? '350px' : '20px' }}>
                    <Paper zDepth={1} >
                        <List>
                            <ListItem primaryText={play ? play.song : "Thích thì mình làm thôi"} leftIcon={<ContentInbox />} />
                            <ListItem primaryText={play ? play.singer : "tranngocduy.it@gmail.com"} leftIcon={<ActionGrade />} />
                        </List>
                        {(isLoading && play) &&
                            <video autoPlay hidden>
                                <source src={`http://nhacpro.net/stream/${play.code}.mp4`} type="video/mp4" />
                            </video>}
                    </Paper>
                </div>      
            </div>

        );
    }
}

const imageStyle={
    width: '100%',
    height: '400px'
}


export default PlayBox;
