import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'
//import { fetchShow as mockFetchShow } from '../../api/fetchShow';

const testDisplay = {
    //add in approprate test data structure here.
    name: 'TEST:Stranger Things',
    summary: 'Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. ',
    seasons: [
        {
            id: '1',
            name: 'test Season 1',
            episodes: []
        },
        {
            id: '2',
            name: 'test Season 2',
            episodes: []
        },
        {
            id: '3',
            name: 'test Season 3',
            episodes: []
        }
    ]
}

const displayFunction = (data) => {
    console.log(data)
}

test('Display renders without errors without props passed in', () => {
    render(<Display />)
})


test('Show component will display when fetch button clicked', async () => {
    render(<Display displayFunction={displayFunction} />)

    const show = screen.queryByTestId('show-container')
    waitFor(() => expect(show).toBeInTheDocument());

    const button = screen.getByRole('button');
    userEvent.click(button)
})


test('After fetch button pushed, select options rendered equals number of seasons', () => {
    render(<Display show={testDisplay} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testDisplay.seasons.length))
})

test('Optional display function called when fetch button pressed', () => {
    const mockClick = jest.fn()
    render(<Display handleClick={mockClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    waitFor(() => expect(mockClick).toHaveBeenCalledTimes(1))

})







///Tasks:

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.