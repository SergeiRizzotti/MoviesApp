import React from "react"

class Pagination extends React.Component {
    constructor() {
        super()
    }
    render() {
        const { pageSelected, pageIncrease, pageDecrease, totalPages } = this.props

        return (<div>
            <button 
                className="btn btn-primary text-white" 
                onClick={pageDecrease}
                disabled={pageSelected === 1}
            >Prev</button>
                <span className="px-4">{pageSelected} из {totalPages}</span>
            <button 
                className="btn btn-primary text-white" 
                onClick={pageIncrease}
                enabled={pageSelected === totalPages}
            >Next</button>
        </div>
        )
    }
}

export default Pagination