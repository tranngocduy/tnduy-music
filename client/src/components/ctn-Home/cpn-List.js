import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Play from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            music: null
        }
    }

    renderList() {
        return this.state.data.params.map((el, index) => {
            let song = el.title.slice(0, el.title.indexOf("-") - 1);
            let singer = el.title.slice(el.title.indexOf("-") + 2);
            let str = el.link;
            let a = str.substring(str.lastIndexOf(".") - 4);
            let b = a.substring(0, a.indexOf("."));
            return (
                <div
                    className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                    key={index}
                    style={{ marginBottom: "50px" }}>
                    <Card containerStyle={{ height: "300px" }}>
                        <CardMedia
                        >
                            <img src={el.hinh} alt="" />
                        </CardMedia>
                        <CardActions style={{ marginTop: 20 }}>
                            <RaisedButton
                                onClick={() => {
                                    this.props.selected({
                                        type: 'clip',
                                        code: b,
                                        hinh: el.hinh,
                                        song,
                                        singer
                                    });
                                    this.setState({ music: index })
                                }}
                                icon={(this.state.music !== index) ? <Play /> : <Pause />}
                            />
                        </CardActions>
                        <CardText>
                            <strong>{song}</strong>
                            <p>{singer}</p>
                        </CardText>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default HomeList;
