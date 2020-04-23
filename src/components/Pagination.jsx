import React from "react"

class Pagination extends React.Component {
    constructor() {
        super()
    }
    render() {
        const { pageSelected, pageSelectedPlus, pageSelectedMinus, totalPages } = this.props

        return (<div>
                <button className="btn btn-primary text-white" onClick={pageSelectedMinus}>Prev</button>
                <span className="px-4">{pageSelected} из {totalPages}</span>
                <button className="btn btn-primary text-white" onClick={pageSelectedPlus}>Next</button>
        </div>
        )
    }
}

export default Pagination