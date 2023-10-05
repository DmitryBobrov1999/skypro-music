import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchFavoriteTodos } from './favoriteTodo';

import { token } from './token';

export const fetchDeleteFavoriteTrack = createAsyncThunk(
	'fetchDeleteFavoriteTrack',
	async (trackId, { rejectWithValue, dispatch }) => {
		const tokens = await token();

		const { access: accessToken } = tokens;
		try {
			const response = await fetch(
				`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`,
				{
					method: 'Delete',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'content-type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error(response.status);
			}
			dispatch(fetchFavoriteTodos());
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

