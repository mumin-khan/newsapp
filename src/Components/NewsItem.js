import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                Newsitem
            </div>
        )
    }
}