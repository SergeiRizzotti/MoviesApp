import React from "react"

class MovieTabs extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.sort_by !== this.props.sort_by){
            return true;
        } else {
            return false;
        }
    }
    render(){
        const { sort_by, updateSortBy } = this.props;
        const handleClick = value => {
            return () => {
                updateSortBy(value)
            };
        };
        const getClassLink = value => {
            return `nav-link ${sort_by === value ? "active" : ""}`
        }
        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={getClassLink("popularity.desc")}
                        onClick={handleClick("popularity.desc")}
                    >Popylarity
                </div>
                </li>
                <li className="nav-item">
                    <div
                        className={getClassLink("revenue.desc")}
                        onClick={handleClick("revenue.desc")}
                    >Revenue
                </div>
                </li>
                <li className="nav-item">
                    <div
                        className={getClassLink("vote_avearage.desc")}
                        onClick={handleClick("vote_avearage.desc")}
                    >Vote avearage
                </div>
                </li>
            </ul>
        )
    }
}

export default MovieTabs
