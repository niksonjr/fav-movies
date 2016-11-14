import React, { Component, PropTypes } from 'react';
import { has, map } from 'lodash';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { categoryTypes } from '../constants';

class MoviesList extends Component {
    constructor(props) {
        super(props);
    }

    showMovies() {
        return map(this.props.movies, (m, idx) => {
            return (
                <Draggable
                    type={this.props.category ? this.props.category : 'all'}
                    data={m.id}
                    key={m.id}
                >
                    <li data-index={m.id}>
                        <a href="" onClick={
                            (e) => {
                                e.preventDefault();
                                this.props.handleMovieClick(m.id);
                            }
                        }>
                            {m.title}
                        </a>
                        {' '}
                        <span>({m.year})</span>
                    </li>
                </Draggable>
            );
        });
    }

    getDroppedPositionIndex(node) {
        const item = node.nodeName === 'LI' ? node : node.parentNode;

        return item.getAttribute('data-index');
    }

    handleDrop(e, item) {
        const hasAll = has(e, categoryTypes.ALL);
        const hasFavourite = has(e, categoryTypes.FAVOURITE);

        if (hasAll && hasFavourite && e.all !== '') {
            // moved to favourites from all
            this.props.handleDrop(e.all, categoryTypes.FAVOURITE);
        }
        else if(hasFavourite && !hasAll) {
            // move to all from favourite
            this.props.handleDrop(e.favourite, categoryTypes.FAVOURITE);
        }
        else if(hasAll && hasFavourite && e.favourite !== '') {
            // move from favourite to favourite: REORDER
            this.props.handleReorder(e.favourite, this.getDroppedPositionIndex(item.target));
        }
    }

    render() {
        return (
            <Droppable
                types={this.props.types}
                onDrop={this.handleDrop.bind(this)}
            >
                <ul>{ this.showMovies() }</ul>
            </Droppable>
        );
    }
}

export default MoviesList;
