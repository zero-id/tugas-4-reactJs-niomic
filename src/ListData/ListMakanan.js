import React, { Component } from "react"

export default class ListMakanan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: this.props.linkimg
        }
    }
    render() {
        return (
            <>
                <img src={this.state.dataList} alt="Product Makanan" width={150} />
            </>
        )
    }
}