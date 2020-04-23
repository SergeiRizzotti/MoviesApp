import React from "react"
import MovieItem from "./MovieItem"
import { API_URL, API_KEY_3 } from "../utils/api"
import MovieTabs from "./MovieTabs"
import Pagination from "./Pagination"

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			movies: [],
			moviesWillWatch: [],
			sort_by: "popularity.desc",
			pageSelected: 1,
			totalPages: 0,
		}
	}

	componentDidMount() {
		this.getMovies()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.sort_by !== this.state.sort_by || prevState.pageSelected !== this.state.pageSelected) {
			this.getMovies();
		}
	}

	getMovies = () => {
		fetch(
			`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.pageSelected}`, 
			
		)
			.then((response) => {
				return response.json()
			})			
			.then((data) => {
				this.setState({
					movies: data.results,
					totalPages: data.total_pages,
				})
			})
	}

	removeMovie = (movie) => {
		const updateMovies = this.state.movies.filter(function (item) {
			return item.id !== movie.id
		})
		this.setState({
			movies: updateMovies,
		})
	}

	addMovieToWillWatch = (movie) => {
		const updateMovieToWillWatch = [...this.state.moviesWillWatch, movie]

		this.setState({
			moviesWillWatch: updateMovieToWillWatch,
		})
	}

	removeMovieFromWillWatch = (movie) => {
		const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
			return item.id !== movie.id
		})
		this.setState({
			moviesWillWatch: updateMoviesWillWatch,
		})
	}

	updateSortBy = (value) => {
		this.setState({
			sort_by: value,
		})
	}

	pageSelectedPlus = () => {
		if (this.state.pageSelected <= 500) {
			this.setState({
				pageSelected: this.state.pageSelected + 1
			})
		}
	}
	
	pageSelectedMinus = () => {
		if (this.state.pageSelected > 1) {
			this.setState({
				pageSelected: this.state.pageSelected - 1
			})
		} 		
	}

	render() {
		return (
			<div className="container">
				<div className="row m-4">
					<div className="col-12">
						<MovieTabs 
							sort_by={this.state.sort_by} 
							updateSortBy={this.updateSortBy} 
						/>
					</div>
				</div>
				<div className="row m-4">
					<div className="col-9 d-flex justify-content-center">
						<Pagination 
							pageSelected={this.state.pageSelected}
							pageSelectedPlus={this.pageSelectedPlus}
							pageSelectedMinus={this.pageSelectedMinus}
							totalPages={this.state.totalPages}
							
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-9">
						<div className="row">
							{this.state.movies.map((movie) => {
								return (
									<div className="col-6 mb-4" key={movie.id}>
										<MovieItem
											movie={movie}
											removeMovie={this.removeMovie}
											addMovieToWillWatch={this.addMovieToWillWatch}
											removeMovieFromWillWatch={this.removeMovieFromWillWatch}
										/>
									</div>
								)
							})}
						</div>
					</div>
					<div className="col-3">
						<p>Will watch: {this.state.moviesWillWatch.length}</p>
					</div>
				</div>
				<div className="row m-4">
					<div className="col-9 d-flex justify-content-center">
						<Pagination
							pageSelected={this.state.pageSelected}
							pageSelectedPlus={this.pageSelectedPlus}
							pageSelectedMinus={this.pageSelectedMinus}
							totalPages={this.state.totalPages}

						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
