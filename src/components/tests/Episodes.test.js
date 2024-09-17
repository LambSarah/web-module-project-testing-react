import React from 'react'
import { render, screen, waitFor, rerender, fireEvent, getByText, getAllByTestId } from '@testing-library/react'
import Episodes from './../Episodes'

const testEpisodes = [
    {
        id: 7,
        name: "The Beginning",
        image: "https://i.ytimg.com/vi/ieYdgon-wT4/maxresdefault.jpg",
        season: 1,
        number: 1,
        summary: "A love letter",
        runtime: 1
    },
    {
        id: 1,
        name: "who knows",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyXju3SO9EoQ&psig=AOvVaw3z8WDVfwl0kXitJc6uYf9S&ust=1623227186880000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDbuNHOh_ECFQAAAAAdAAAAABAD",
        season: 1,
        number: 2,
        summary: "A love letter",
        runtime: 1
    }, {
        id: 2,
        name: 'static',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F434104851574953715%2F&psig=AOvVaw0Q246SDGXDQsOfPItjoBQ3&ust=1623227105489000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjlvqzOh_ECFQAAAAAdAAAAABAD',
        season: 1,
        number: 3,
        summary: "A love letter to the '80s classics",
        runtime: 1
    }]

test('renders without error', () => {
    render(<Episodes episodes={testEpisodes} />)
})

test('The correct number of test episodes are loaded', () => {
    render(<Episodes episodes={testEpisodes} />)
    const episodeList = screen.getByTestId('episodes-container')
    expect(episodeList).toBeVisible();
    expect(episodeList).toBeInTheDocument();
})