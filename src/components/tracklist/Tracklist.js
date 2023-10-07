import React from 'react';
import { CreatePlaylistItem } from '../playlistItem/PlaylistItem.js';

import { yearData } from './searchByButton/yearData.js';
import { genreData } from './searchByButton/genreData.js';
import { SearchByArtist } from './searchByButton/SearchByArtist.js';
import { SearchByYear } from './searchByButton/SearchByYear.js';
import { SearchByGenre } from './searchByButton/SearchByGenre.js';
import { useState } from 'react';
import * as S from './Tracklist.styles';
import { useSelector } from 'react-redux';


export const CreateTracklist = ({
	isLoading,
	formatTime,
	stop,
	setSelectedTrackId,
	selectedTrackId,
	todos,
	error,
	addTrackWithId,
	deleteTrackWithId,
	handleLikeClick,
	openPlayer,
	favoriteTodos,
	filteredTodos,
	setTodosValue,
	setRealTodos,
}) => {
	const [$visibleFilter, setVisibleFilter] = useState(null);

	const openFilter = filterName => {
		setVisibleFilter(filterName);
	};

	const closeAllFilters = () => {
		setVisibleFilter(null);
	};

	const { todosValue } = useSelector(state => state.trackList);

	return (
		<S.MainCenterBlock>
			<S.CenterblockSearch>
				<S.SearchSvg>
					<use xlinkHref='img/icon/sprite.svg#icon-search' />
				</S.SearchSvg>

				<S.SearchText
					type='search'
					placeholder='Поиск'
					name='search'
					onChange={event => setTodosValue(event.target.value)}
				/>
			</S.CenterblockSearch>
			<S.CenterblockH2>Треки</S.CenterblockH2>
			<S.CenterblockFilter>
				<S.FilterTitle>Искать по:</S.FilterTitle>

				<SearchByArtist
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					$visibleFilter={$visibleFilter === 'artist'}
				/>
				<SearchByYear
					todos={todos}
					setRealTodos={setRealTodos}
					filteredTodos={filteredTodos}
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					yearData={yearData}
					$visibleFilter={$visibleFilter === 'year'}
				/>
				<SearchByGenre
					openFilter={openFilter}
					closeAllFilters={closeAllFilters}
					genreData={genreData}
					$visibleFilter={$visibleFilter === 'genre'}
				/>
			</S.CenterblockFilter>
			<S.CenterblockContent>
				<S.ContentTitle>
					<S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
					<S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
					<S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
					<S.PlaylistTitleCol4>
						<S.PlaylistTitleSvg alt='time'>
							<use xlinkHref='img/icon/sprite.svg#icon-watch' />
						</S.PlaylistTitleSvg>
					</S.PlaylistTitleCol4>
				</S.ContentTitle>
				<S.ContentPlaylist>
					{error && (
						<p style={{ color: 'red' }}>
							Не удалось загрузить плейлист, попробуйте позже: {error}
						</p>
					)}
					<CreatePlaylistItem
						todos={todos}
						filteredTodos={filteredTodos}
						$stop={stop}
						isLoading={isLoading}
						openPlayer={openPlayer}
						formatTime={formatTime}
						setSelectedTrackId={setSelectedTrackId}
						selectedTrackId={selectedTrackId}
						addTrackWithId={addTrackWithId}
						deleteTrackWithId={deleteTrackWithId}
						handleLikeClick={handleLikeClick}
						favoriteTodos={favoriteTodos}
					/>
				</S.ContentPlaylist>
			</S.CenterblockContent>
		</S.MainCenterBlock>
	);
};
